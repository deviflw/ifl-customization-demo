// Stepped Navigation Controller
let currentStep = 1;
let selectedWatch = null;
let selectedVariant = null;

// Mock variant database
const variantDatabase = {
    'tissot-prx': [
        {
            id: 'prx-leather-black',
            name: 'Black Leather Strap',
            type: 'leather',
            color: 'black',
            price: 0,
            image: '[Black Leather]'
        },
        {
            id: 'prx-leather-brown',
            name: 'Brown Leather Strap',
            type: 'leather',
            color: 'brown',
            price: 50,
            image: '[Brown Leather]'
        },
        {
            id: 'prx-steel',
            name: 'Steel Bracelet',
            type: 'metal',
            color: 'steel',
            price: 150,
            image: '[Steel Bracelet]'
        },
        {
            id: 'prx-rubber-blue',
            name: 'Blue Rubber Strap',
            type: 'rubber',
            color: 'blue',
            price: 75,
            image: '[Blue Rubber]'
        }
    ],
    'oris-aquis': [
        {
            id: 'aquis-steel',
            name: 'Steel Bracelet',
            type: 'metal',
            color: 'steel',
            price: 0,
            image: '[Steel Bracelet]'
        },
        {
            id: 'aquis-rubber-black',
            name: 'Black Rubber Strap',
            type: 'rubber',
            color: 'black',
            price: 0,
            image: '[Black Rubber]'
        },
        {
            id: 'aquis-rubber-orange',
            name: 'Orange Rubber Strap',
            type: 'rubber',
            color: 'orange',
            price: 100,
            image: '[Orange Rubber]'
        }
    ],
    'default': [
        {
            id: 'default-leather',
            name: 'Leather Strap',
            type: 'leather',
            color: 'brown',
            price: 0,
            image: '[Leather Strap]'
        },
        {
            id: 'default-metal',
            name: 'Metal Bracelet',
            type: 'metal',
            color: 'steel',
            price: 100,
            image: '[Metal Bracelet]'
        }
    ]
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Override selectWatch from filters.js
    window.selectWatch = function(watchId) {
        const watch = watchDatabase.find(w => w.id === watchId);
        if (!watch) return;
        
        // Remove selected from all cards
        document.querySelectorAll('.watch-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selected to clicked card
        const selectedCard = document.querySelector(`.watch-card[data-watch-id="${watchId}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
        
        // Save selected watch
        selectedWatch = watch;
        
        // Enable next button
        const nextBtn = document.getElementById('btn-next');
        nextBtn.disabled = false;
        nextBtn.innerHTML = `Next: Choose Options →`;
        
        // Update summary if exists
        if (typeof updateWatchSummary === 'function') {
            updateWatchSummary(watch);
        }
        
        // Update price summary on main page
        if (typeof updatePriceSummary === 'function') {
            updatePriceSummary(watch);
        }
    };
});

// Navigate to next step
function nextStep() {
    if (currentStep === 1 && selectedWatch) {
        // Go to step 2
        showStep(2);
        loadVariants();
    } else if (currentStep === 2 && selectedVariant) {
        // Go to step 3
        showStep(3);
        loadFinalSummary();
    }
}

// Navigate to previous step
function previousStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// Show specific step
function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show target step
    document.getElementById(`step-${step}`).style.display = 'block';
    
    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        if (index < step - 1) {
            stepEl.classList.add('completed');
        } else if (index === step - 1) {
            stepEl.classList.add('active');
        }
    });
    
    // Update navigation buttons
    updateNavigationButtons(step);
    
    // Update current step
    currentStep = step;
}

// Update navigation buttons based on step
function updateNavigationButtons(step) {
    const backBtn = document.getElementById('btn-back');
    const nextBtn = document.getElementById('btn-next');
    const applyBtn = document.getElementById('btn-apply');
    
    if (step === 1) {
        // Делаем кнопку Back невидимой но занимающей место
        backBtn.style.visibility = 'hidden';
        backBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        applyBtn.style.display = 'none';
        nextBtn.disabled = !selectedWatch;
    } else if (step === 2) {
        backBtn.style.visibility = 'visible';
        backBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        applyBtn.style.display = 'none';
        nextBtn.disabled = !selectedVariant;
        nextBtn.innerHTML = 'Next: Review Order →';
    } else if (step === 3) {
        backBtn.style.visibility = 'visible';
        backBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        applyBtn.style.display = 'block';
        
        // Update preview slider when entering step 3
        if (typeof updatePreviewSlider === 'function') {
            updatePreviewSlider();
        }
    }
}

// Load variants for selected watch
function loadVariants() {
    if (!selectedWatch) return;
    
    // Display selected watch
    const display = document.getElementById('selected-watch-display');
    display.innerHTML = `
        <div class="selected-badge">Selected Model</div>
        <div class="selected-watch-info">
            <div class="selected-watch-thumb">${selectedWatch.image}</div>
            <div class="selected-watch-details">
                <h5>${selectedWatch.brand} ${selectedWatch.model}</h5>
                <p>${capitalizeFirst(selectedWatch.movement)} • $${selectedWatch.price}</p>
            </div>
        </div>
    `;
    
    // Setup variant options based on watch model
    setupVariantOptions(selectedWatch);
}

// Setup variant options for Shopify-style selection
function setupVariantOptions(watch) {
    // Configure available options based on watch model
    const sizeOptions = document.querySelectorAll('#size-options .option-btn');
    const dialOptions = document.querySelectorAll('#dial-options .option-btn');
    const caseOptions = document.querySelectorAll('#case-options .option-btn');
    
    // Example: Some watches might not have all sizes available
    if (watch.brand === 'Tissot' && watch.model.includes('PRX')) {
        // PRX only comes in 40mm
        sizeOptions[0].classList.remove('disabled'); // 40mm available
        sizeOptions[1].classList.add('disabled'); // 35mm not available
    } else if (watch.brand === 'Oris') {
        // Oris only in 40mm
        sizeOptions[0].classList.remove('disabled');
        sizeOptions[1].classList.add('disabled');
    } else {
        // Citizen and Seiko have both sizes
        sizeOptions.forEach(btn => btn.classList.remove('disabled'));
    }
    
    // Setup click handlers
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.onclick = function() {
            if (this.classList.contains('disabled')) return;
            
            // Remove selected from siblings
            const group = this.parentElement;
            group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            
            // Add selected to this button
            this.classList.add('selected');
            
            // Check if all options selected
            checkVariantSelection();
        };
    });
}

// Check if all variant options are selected
function checkVariantSelection() {
    const hasSize = document.querySelector('#size-options .option-btn.selected');
    const hasDial = document.querySelector('#dial-options .option-btn.selected');
    const hasCase = document.querySelector('#case-options .option-btn.selected');
    
    if (hasSize && hasDial && hasCase) {
        // All options selected
        selectedVariant = {
            size: hasSize.dataset.value,
            dial: hasDial.dataset.value,
            case: hasCase.dataset.value,
            price: 0 // Additional price if any
        };
        
        // Enable next button
        document.getElementById('btn-next').disabled = false;
    } else {
        selectedVariant = null;
        document.getElementById('btn-next').disabled = true;
    }
}

// Select a variant
function selectVariant(variantId) {
    // Find variant
    const watchKey = `${selectedWatch.brand.toLowerCase()}-${selectedWatch.model.toLowerCase().split(' ')[0]}`;
    const variants = variantDatabase[watchKey] || variantDatabase['default'];
    const variant = variants.find(v => v.id === variantId);
    
    if (!variant) return;
    
    // Update UI
    document.querySelectorAll('.variant-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`.variant-card[data-variant-id="${variantId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Save selection
    selectedVariant = variant;
    
    // Enable next button
    const nextBtn = document.getElementById('btn-next');
    nextBtn.disabled = false;
}

// Load final summary
function loadFinalSummary() {
    if (!selectedWatch || !selectedVariant) return;
    
    // Configuration details
    const detailsDiv = document.getElementById('final-watch-details');
    detailsDiv.innerHTML = `
        <div class="config-line">
            <span class="config-label">Brand:</span>
            <span class="config-value">${selectedWatch.brand}</span>
        </div>
        <div class="config-line">
            <span class="config-label">Model:</span>
            <span class="config-value">${selectedWatch.model}</span>
        </div>
        <div class="config-line">
            <span class="config-label">Movement:</span>
            <span class="config-value">${capitalizeFirst(selectedWatch.movement)}</span>
        </div>
        <div class="config-line">
            <span class="config-label">Selected Size:</span>
            <span class="config-value">${selectedVariant.size}</span>
        </div>
        <div class="config-line">
            <span class="config-label">Dial Color:</span>
            <span class="config-value">${capitalizeFirst(selectedVariant.dial)}</span>
        </div>
        <div class="config-line">
            <span class="config-label">Case Color:</span>
            <span class="config-value">${capitalizeFirst(selectedVariant.case)}</span>
        </div>
    `;
    
    // Price breakdown
    const servicePrice = 1200;
    const watchPrice = selectedWatch.price + (selectedVariant.price || 0);
    const totalPrice = servicePrice + watchPrice;
    
    document.getElementById('watch-price-line').innerHTML = `
        <span>Watch:</span>
        <span>$${watchPrice.toLocaleString()}</span>
    `;
    
    document.getElementById('total-price').innerHTML = `
        <strong>$${totalPrice.toLocaleString()}</strong>
    `;
}

// Apply configuration
function applyConfiguration() {
    if (!selectedWatch || !selectedVariant) {
        showNotification('Please complete your selection', 'error');
        return;
    }
    
    // Update main product page
    const selectedDisplay = document.getElementById('currently-selected-display');
    selectedDisplay.innerHTML = `
        <div class="selected-watch">
            <div class="selected-watch-flex" style="display: flex; gap: 20px; align-items: start;">
                <div class="watch-thumb" style="width: 100px; height: 100px; background: #f5f5f5; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; flex-shrink: 0;">
                    ${selectedWatch.image}
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div class="selected-watch-name">${selectedWatch.brand} ${selectedWatch.model}</div>
                    <div class="selected-watch-specs">
                        ${capitalizeFirst(selectedWatch.movement)} • ${selectedVariant.size} • ${capitalizeFirst(selectedVariant.case)} Case • ${capitalizeFirst(selectedVariant.dial)} Dial<br>
                        Watch Price: $${selectedWatch.price.toLocaleString()}<br>
                        <span style="color: #28a745; font-size: 12px;">✓ Custom configuration saved</span>
                    </div>
                    <details style="margin-top: 12px;">
                        <summary style="cursor: pointer; color: #666; font-size: 13px; outline: none;">View full specifications</summary>
                        <div style="padding: 12px 0; font-size: 13px; color: #666; line-height: 1.8;">
                            <strong>Movement & Performance</strong><br>
                            • Power Reserve: ${selectedWatch.movement === 'automatic' ? '38-80 hours' : 'Battery 2-3 years'}<br>
                            • Jewels: ${selectedWatch.movement === 'automatic' ? '21-25' : 'N/A'}<br>
                            • Frequency: ${selectedWatch.movement === 'automatic' ? '21,600-28,800 vph' : 'Quartz'}<br>
                            <br>
                            <strong>Case & Dimensions</strong><br>
                            • Diameter: ${selectedVariant.size}<br>
                            • Thickness: 10-12mm<br>
                            • Lug to Lug: 44-48mm<br>
                            • Lug Width: 20-22mm<br>
                            <br>
                            <strong>Materials & Protection</strong><br>
                            • Crystal: Sapphire<br>
                            • Water Resistance: 100m/10ATM<br>
                            <br>
                            <strong>Included</strong><br>
                            • Custom IFL Box<br>
                            • 2 Years IFL Warranty
                        </div>
                    </details>
                </div>
            </div>
        </div>
    `;
    
    // Update price summary on main page
    if (typeof updatePriceSummary === 'function') {
        updatePriceSummary(selectedWatch);
    }
    
    // Close customizer without saving state
    if (typeof closeCustomizer === 'function') {
        closeCustomizer(true);
    } else {
        // Fallback if closeCustomizer is not available
        document.getElementById('customizer').classList.remove('open');
        document.getElementById('overlay').classList.remove('open');
    }
    
    // Show success
    showNotification('Configuration applied successfully!', 'success');
    
    // Clear saved state after successful apply
    localStorage.removeItem('customizerState');
    
    // Reset for next use
    resetCustomizer();
}

// Reset customizer
function resetCustomizer() {
    currentStep = 1;
    selectedWatch = null;
    selectedVariant = null;
    
    // Очищаем все активные состояния в UI
    document.querySelectorAll('.watch-card.active').forEach(card => {
        card.classList.remove('active');
    });
    
    document.querySelectorAll('.variant-card.active').forEach(card => {
        card.classList.remove('active');
    });
    
    // Очищаем отображение выбранных вариантов
    const variantGrid = document.querySelector('.variant-grid');
    if (variantGrid) {
        variantGrid.innerHTML = '<div style="text-align: center; color: #999; padding: 40px;">Please select a watch model first</div>';
    }
    
    // Возвращаемся на первый шаг
    showStep(1);
}

// Helper function
function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}