// Customizer state management
let customizerState = {
    isOpen: false,
    currentStep: 1,
    selected: {
        brand: null,
        model: null,
        variant: null
    }
};

// Load saved state from sessionStorage
function loadSavedState() {
    const saved = sessionStorage.getItem('customizer_state');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            customizerState.selected = state.selected || customizerState.selected;
            customizerState.currentStep = state.currentStep || 1;
            return true;
        } catch (e) {
            console.error('Failed to load saved state:', e);
        }
    }
    return false;
}

// Save state to sessionStorage
function saveState() {
    sessionStorage.setItem('customizer_state', JSON.stringify({
        selected: customizerState.selected,
        currentStep: customizerState.currentStep
    }));
}

// Open customizer
function openCustomizer() {
    const hadSavedState = loadSavedState();
    
    document.getElementById('customizer').classList.add('open');
    document.getElementById('overlay').classList.add('open');
    customizerState.isOpen = true;
    
    if (hadSavedState) {
        updateUIFromState();
        showNotification('Previous selection restored');
    }
}

// Close customizer
function closeCustomizer() {
    document.getElementById('customizer').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
    customizerState.isOpen = false;
    
    // Save state when closing without applying
    saveState();
}

// Select a card
function selectCard(card, type) {
    // Remove selected from siblings
    const parent = card.parentElement;
    parent.querySelectorAll('.watch-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Add selected to clicked card
    card.classList.add('selected');
    
    // Update state
    const data = card.dataset;
    if (type === 'brand') {
        customizerState.selected.brand = data.brand;
    } else if (type === 'model') {
        customizerState.selected.model = {
            name: data.model,
            price: data.price,
            specs: data.specs
        };
    } else if (type === 'variant') {
        customizerState.selected.variant = data.variant;
    }
    
    // Save state after each selection
    saveState();
    
    // Update summary
    updateSummary();
}

// Update summary
function updateSummary() {
    const summaryEl = document.getElementById('customizer-summary');
    const watchLine = document.getElementById('summary-watch');
    const totalLine = document.getElementById('summary-total');
    
    if (customizerState.selected.model) {
        const watchPrice = parseFloat(customizerState.selected.model.price) || 0;
        const servicePrice = 1200; // Get from page
        const total = servicePrice + watchPrice;
        
        watchLine.innerHTML = `<span>Watch:</span> <span>${customizerState.selected.model.name} - $${watchPrice}</span>`;
        totalLine.innerHTML = `<span><strong>Total:</strong></span> <span><strong>$${total.toLocaleString()}</strong></span>`;
    } else {
        watchLine.innerHTML = `<span>Watch:</span> <span>Not selected</span>`;
        totalLine.innerHTML = `<span><strong>Total:</strong></span> <span><strong>$1,200</strong></span>`;
    }
}

// Apply selection
function applySelection() {
    if (!customizerState.selected.model) {
        showNotification('Please select a watch model first', 'error');
        return;
    }
    
    // Update the main product page
    const selectedDisplay = document.getElementById('currently-selected-display');
    const model = customizerState.selected.model;
    
    selectedDisplay.innerHTML = `
        <div class="selected-watch">
            <div class="selected-watch-flex" style="display: flex; gap: 20px; align-items: start;">
                <div class="watch-thumb" style="width: 100px; height: 100px; background: #f5f5f5; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; flex-shrink: 0;">
                    [${customizerState.selected.brand || 'Watch'} Thumb]
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div class="selected-watch-name">${customizerState.selected.brand || ''} ${model.name}</div>
                    <div class="selected-watch-specs">
                        ${model.specs || 'Automatic • 40mm'} • $${model.price}<br>
                        <span style="color: #28a745; font-size: 12px;">✓ Custom configuration saved</span>
                    </div>
                    <details style="margin-top: 12px;">
                        <summary style="cursor: pointer; color: #666; font-size: 13px; outline: none;">View full specifications</summary>
                        <div style="padding: 12px 0; font-size: 13px; color: #666; line-height: 1.8;">
                            • Movement: ${model.specs?.includes('Auto') ? 'Automatic' : 'Quartz'}<br>
                            • Power Reserve: ${model.specs?.includes('Auto') ? '38-80 hours' : 'N/A'}<br>
                            • Water Resistance: 100m<br>
                            • Crystal: Sapphire<br>
                            • Case: Stainless Steel<br>
                            • Reference: Custom Configuration
                        </div>
                    </details>
                </div>
            </div>
        </div>
    `;
    
    // Clear sessionStorage after successful apply
    sessionStorage.removeItem('customizer_state');
    
    // Close customizer
    closeCustomizer();
    
    // Show success notification
    showNotification('Configuration applied successfully!', 'success');
}

// Update UI from saved state
function updateUIFromState() {
    // This would select the appropriate cards based on saved state
    // For now, just a placeholder
    updateSummary();
}

// Show notification
function showNotification(message, type = 'info') {
    // Simple notification (could be enhanced with toast library)
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#dc3545' : type === 'success' ? '#28a745' : '#333'};
        color: white;
        border-radius: 4px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Quantity controls
function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    const value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    const value = parseInt(input.value);
    input.value = value + 1;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved state
    const saved = sessionStorage.getItem('customizer_state');
    if (saved) {
        const badge = document.createElement('span');
        badge.style.cssText = `
            position: absolute;
            top: -5px;
            right: -5px;
            background: #dc3545;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        `;
        badge.textContent = '!';
        
        const customizeBtn = document.querySelector('.customize-button');
        if (customizeBtn) {
            customizeBtn.style.position = 'relative';
            customizeBtn.appendChild(badge);
        }
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Update price summary on main product page
function updatePriceSummary(watch = null) {
    const watchNameEl = document.getElementById('selected-watch-name');
    const watchPriceEl = document.getElementById('selected-watch-price');
    const totalPriceEl = document.getElementById('total-price-summary');
    
    if (!watchNameEl || !watchPriceEl || !totalPriceEl) return;
    
    const servicePrice = 1200;
    
    if (watch) {
        watchNameEl.textContent = `${watch.brand} ${watch.model}`;
        watchPriceEl.textContent = `$${watch.price.toLocaleString()}.00`;
        const totalPrice = servicePrice + watch.price;
        totalPriceEl.textContent = `$${totalPrice.toLocaleString()}.00`;
    } else {
        // Default state - Tissot PRX
        watchNameEl.textContent = 'Tissot PRX Powermatic 80';
        watchPriceEl.textContent = '$850.00';
        totalPriceEl.textContent = '$2,050.00';
    }
}

// Initialize price summary on page load
document.addEventListener('DOMContentLoaded', function() {
    updatePriceSummary();
});
