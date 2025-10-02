// Mock watch database
const watchDatabase = [
    {
        id: 1,
        brand: 'Tissot',
        model: 'PRX Powermatic 80',
        price: 850,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'black',
        size: '40',
        image: '[PRX Black]'
    },
    {
        id: 2,
        brand: 'Tissot',
        model: 'PRX Powermatic 80',
        price: 875,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'blue',
        size: '40',
        image: '[PRX Blue]'
    },
    {
        id: 3,
        brand: 'Tissot',
        model: 'PRX Quartz',
        price: 395,
        movement: 'quartz',
        caseColor: 'gold',
        dialColor: 'white',
        size: '40',
        image: '[PRX Gold]'
    },
    {
        id: 4,
        brand: 'Oris',
        model: 'Aquis Date',
        price: 2200,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'blue',
        size: '44',
        image: '[Aquis Blue]'
    },
    {
        id: 5,
        brand: 'Oris',
        model: 'Aquis Date',
        price: 2400,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'green',
        size: '44',
        image: '[Aquis Green]'
    },
    {
        id: 6,
        brand: 'Oris',
        model: 'Big Crown',
        price: 1950,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'black',
        size: '40',
        image: '[Big Crown]'
    },
    {
        id: 7,
        brand: 'Seiko',
        model: 'Presage Cocktail',
        price: 450,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'blue',
        size: '38',
        image: '[Presage Blue]'
    },
    {
        id: 8,
        brand: 'Seiko',
        model: 'Presage Sharp Edge',
        price: 550,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'white',
        size: '40',
        image: '[Sharp Edge]'
    },
    {
        id: 9,
        brand: 'Citizen',
        model: 'Tsuyosa',
        price: 395,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'green',
        size: '40',
        image: '[Tsuyosa Green]'
    },
    {
        id: 10,
        brand: 'Citizen',
        model: 'Eco-Drive',
        price: 350,
        movement: 'solar',
        caseColor: 'black',
        dialColor: 'black',
        size: '42',
        image: '[Eco-Drive]'
    },
    {
        id: 11,
        brand: 'Bulova',
        model: 'Lunar Pilot',
        price: 695,
        movement: 'quartz',
        caseColor: 'steel',
        dialColor: 'black',
        size: '44',
        image: '[Lunar Pilot]'
    },
    {
        id: 12,
        brand: 'Hamilton',
        model: 'Khaki Field',
        price: 575,
        movement: 'automatic',
        caseColor: 'steel',
        dialColor: 'black',
        size: '38',
        image: '[Khaki Field]'
    }
];

// Active filters state
let activeFilters = {
    brand: [],
    movement: [],
    caseColor: [],
    dialColor: [],
    size: []
};

// Toggle filters panel
function toggleFiltersPanel() {
    const panel = document.getElementById('filters-panel');
    const toggle = document.querySelector('.filters-toggle');
    const arrow = document.getElementById('filter-arrow');
    
    if (panel.style.display === 'none' || !panel.style.display) {
        panel.style.display = 'block';
        toggle.classList.add('active');
    } else {
        panel.style.display = 'none';
        toggle.classList.remove('active');
    }
}

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderWatches();
});

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleFilter(this);
        });
    });
}

// Toggle filter button
function toggleFilter(button) {
    const filterType = button.dataset.filterType;
    const filterValue = button.dataset.filterValue;
    
    // Toggle active class
    button.classList.toggle('active');
    
    // Update active filters
    if (button.classList.contains('active')) {
        // Add to filters
        if (!activeFilters[filterType].includes(filterValue)) {
            activeFilters[filterType].push(filterValue);
        }
    } else {
        // Remove from filters
        const index = activeFilters[filterType].indexOf(filterValue);
        if (index > -1) {
            activeFilters[filterType].splice(index, 1);
        }
    }
    
    // Update display
    updateActiveFiltersDisplay();
    filterAndRenderWatches();
}

// Update active filters display
function updateActiveFiltersDisplay() {
    const activeFiltersDiv = document.getElementById('active-filters');
    const filterTagsDiv = document.getElementById('filter-tags');
    
    // Check if any filters are active
    const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);
    
    if (hasActiveFilters) {
        activeFiltersDiv.style.display = 'flex';
        filterTagsDiv.innerHTML = '';
        
        // Add filter tags
        for (const [type, values] of Object.entries(activeFilters)) {
            values.forEach(value => {
                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.innerHTML = `
                    ${formatFilterName(type, value)}
                    <span class="remove-tag" onclick="removeFilter('${type}', '${value}')">×</span>
                `;
                filterTagsDiv.appendChild(tag);
            });
        }
    } else {
        activeFiltersDiv.style.display = 'none';
    }
}

// Format filter name for display
function formatFilterName(type, value) {
    if (type === 'brand') return capitalizeFirst(value);
    if (type === 'size') return value + 'mm';
    if (type === 'caseColor') return 'Case: ' + capitalizeFirst(value);
    if (type === 'dialColor') return 'Dial: ' + capitalizeFirst(value);
    return capitalizeFirst(value);
}

// Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Remove specific filter
function removeFilter(type, value) {
    // Remove from active filters
    const index = activeFilters[type].indexOf(value);
    if (index > -1) {
        activeFilters[type].splice(index, 1);
    }
    
    // Remove active class from button
    const button = document.querySelector(`.filter-btn[data-filter-type="${type}"][data-filter-value="${value}"]`);
    if (button) {
        button.classList.remove('active');
    }
    
    // Update display
    updateActiveFiltersDisplay();
    filterAndRenderWatches();
}

// Clear all filters
function clearAllFilters() {
    // Reset active filters
    activeFilters = {
        brand: [],
        movement: [],
        caseColor: [],
        dialColor: [],
        size: []
    };
    
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Update display
    updateActiveFiltersDisplay();
    filterAndRenderWatches();
}

// Filter and render watches
function filterAndRenderWatches() {
    let filteredWatches = [...watchDatabase];
    
    // Apply filters (OR within category, AND between categories)
    if (activeFilters.brand.length > 0) {
        filteredWatches = filteredWatches.filter(watch => 
            activeFilters.brand.includes(watch.brand.toLowerCase())
        );
    }
    
    if (activeFilters.movement.length > 0) {
        filteredWatches = filteredWatches.filter(watch => 
            activeFilters.movement.includes(watch.movement)
        );
    }
    
    if (activeFilters.caseColor.length > 0) {
        filteredWatches = filteredWatches.filter(watch => 
            activeFilters.caseColor.includes(watch.caseColor)
        );
    }
    
    if (activeFilters.dialColor.length > 0) {
        filteredWatches = filteredWatches.filter(watch => 
            activeFilters.dialColor.includes(watch.dialColor)
        );
    }
    
    if (activeFilters.size.length > 0) {
        filteredWatches = filteredWatches.filter(watch => 
            activeFilters.size.includes(watch.size)
        );
    }
    
    // Update count
    document.getElementById('result-count').textContent = filteredWatches.length;
    
    // Render watches
    renderWatches(filteredWatches);
}

// Render watches in grid
function renderWatches(watches = watchDatabase) {
    const watchGrid = document.getElementById('filtered-watches');
    
    if (watches.length === 0) {
        watchGrid.innerHTML = `
            <div class="no-results">
                <h4>No watches match your criteria</h4>
                <p>Try adjusting your filters to see more results</p>
                <button class="suggestion-btn" onclick="clearAllFilters()">Clear All Filters</button>
            </div>
        `;
        return;
    }
    
    watchGrid.innerHTML = watches.map(watch => `
        <div class="watch-card" onclick="selectWatch(${watch.id})" data-watch-id="${watch.id}">
            <div class="watch-image">${watch.image}</div>
            <div class="watch-info">
                <div class="watch-name">${watch.brand} ${watch.model}</div>
                <div class="watch-specs">
                    ${capitalizeFirst(watch.movement)} • ${watch.size}mm
                </div>
                <div class="watch-price">$${watch.price.toLocaleString()}</div>
                <div class="watch-attributes">
                    <span class="attribute">Case: ${capitalizeFirst(watch.caseColor)}</span>
                    <span class="attribute">Dial: ${capitalizeFirst(watch.dialColor)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Select a watch
function selectWatch(watchId) {
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
    
    // Update summary
    updateWatchSummary(watch);
}

// Update watch summary
function updateWatchSummary(watch) {
    const watchLine = document.getElementById('summary-watch');
    const totalLine = document.getElementById('summary-total');
    
    const servicePrice = 1200;
    const total = servicePrice + watch.price;
    
    watchLine.innerHTML = `<span>Watch:</span> <span>${watch.brand} ${watch.model} - $${watch.price}</span>`;
    totalLine.innerHTML = `<span><strong>Total:</strong></span> <span><strong>$${total.toLocaleString()}</strong></span>`;
    
    // Save to customizer state
    if (typeof customizerState !== 'undefined') {
        customizerState.selected.model = {
            name: `${watch.brand} ${watch.model}`,
            price: watch.price,
            specs: `${capitalizeFirst(watch.movement)} • ${watch.size}mm • ${capitalizeFirst(watch.caseColor)} Case • ${capitalizeFirst(watch.dialColor)} Dial`
        };
    }
}