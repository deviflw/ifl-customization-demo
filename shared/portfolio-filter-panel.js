// Portfolio Filter Panel - Behance Style
class PortfolioFilterPanel {
    
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            position: 'left', // 'left' for desktop, 'top' for mobile
            width: '280px',
            animationDuration: 300,
            pushContent: true,
            ...options
        };
        this.isOpen = false;
        this.activeFilters = {
            style: [],
            theme: [],
            brand: []
        };
    }
    
    // Initialize the filter panel
    init(items) {
        this.items = items;
        this.render();
        this.attachEventListeners();
    }
    
    // Render filter panel HTML
    render() {
        const panelHtml = `
            <!-- Filter Toggle Button -->
            <button class="portfolio-filter-toggle" id="portfolio-filter-toggle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="14" y2="18"></line>
                </svg>
                <span>Filter</span>
            </button>
            
            <!-- Filter Panel -->
            <div class="portfolio-filter-panel ${this.options.position}" id="portfolio-filter-panel">
                <div class="portfolio-filter-panel-header">
                    <h3>Filter Portfolio</h3>
                    <button class="portfolio-filter-close" id="portfolio-filter-close">×</button>
                </div>
                
                <div class="portfolio-filter-panel-body">
                    <!-- Clear All -->
                    <div class="portfolio-filter-clear">
                        <button class="filter-clear-btn" id="filter-clear-all">Clear All</button>
                    </div>
                    
                    <!-- Style Filters -->
                    <div class="portfolio-filter-group">
                        <h4 class="portfolio-filter-group-title">Style</h4>
                        <div class="portfolio-filter-group-options">
                            ${this.renderFilterOptions('style')}
                        </div>
                    </div>
                    
                    <!-- Theme Filters -->
                    <div class="portfolio-filter-group">
                        <h4 class="portfolio-filter-group-title">Theme</h4>
                        <div class="portfolio-filter-group-options">
                            ${this.renderFilterOptions('theme')}
                        </div>
                    </div>
                    
                    <!-- Watch Model Filters -->
                    <div class="portfolio-filter-group">
                        <h4 class="portfolio-filter-group-title">Watch Brand</h4>
                        <div class="portfolio-filter-group-options">
                            ${this.renderFilterOptions('brand')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Overlay for mobile -->
            <div class="portfolio-filter-overlay" id="portfolio-filter-overlay"></div>
        `;
        
        // Insert at the beginning of container
        this.container.insertAdjacentHTML('afterbegin', panelHtml);
    }
    
    // Render filter options for a specific type
    renderFilterOptions(type) {
        let values = [];
        
        if (type === 'style') {
            values = [...new Set(this.items.map(item => item.style))];
        } else if (type === 'theme') {
            values = [...new Set(this.items.map(item => item.theme))];
        } else if (type === 'brand') {
            values = [...new Set(this.items.map(item => item.watch.brand))];
        }
        
        return values.map(value => `
            <label class="portfolio-filter-option">
                <input type="checkbox" value="${value}" data-filter-type="${type}">
                <span class="portfolio-filter-checkbox"></span>
                <span class="portfolio-filter-label">${value}</span>
                <span class="portfolio-filter-count">${this.getCount(type, value)}</span>
            </label>
        `).join('');
    }
    
    // Get count of items for a filter value
    getCount(type, value) {
        if (type === 'style') {
            return this.items.filter(item => item.style === value).length;
        } else if (type === 'theme') {
            return this.items.filter(item => item.theme === value).length;
        } else if (type === 'brand') {
            return this.items.filter(item => item.watch.brand === value).length;
        }
        return 0;
    }
    
    // Attach event listeners
    attachEventListeners() {
        // Toggle button
        document.getElementById('portfolio-filter-toggle').addEventListener('click', () => {
            this.toggle();
        });
        
        // Close button
        document.getElementById('portfolio-filter-close').addEventListener('click', () => {
            this.close();
        });
        
        // Overlay (mobile)
        document.getElementById('portfolio-filter-overlay').addEventListener('click', () => {
            this.close();
        });
        
        // Clear all
        document.getElementById('filter-clear-all').addEventListener('click', () => {
            this.clearAll();
        });
        
        // Filter checkboxes
        document.querySelectorAll('.portfolio-filter-option input').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.updateFilters(e.target);
            });
        });
        
        // Check for mobile and adjust position
        this.checkMobile();
        window.addEventListener('resize', () => this.checkMobile());
    }
    
    // Check if mobile and adjust panel position
    checkMobile() {
        const isMobile = window.innerWidth < 768;
        const panel = document.getElementById('portfolio-filter-panel');
        
        if (isMobile) {
            panel.classList.remove('left');
            panel.classList.add('top');
        } else {
            panel.classList.remove('top');
            panel.classList.add('left');
        }
    }
    
    // Toggle panel
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    
    // Open panel
    open() {
        const panel = document.getElementById('portfolio-filter-panel');
        const overlay = document.getElementById('portfolio-filter-overlay');
        const content = document.querySelector('.portfolio-grid-wrapper');
        
        panel.classList.add('active');
        overlay.classList.add('active');
        
        if (content && window.innerWidth >= 768) {
            content.classList.add('panel-open');
        }
        
        this.isOpen = true;
        document.body.style.overflow = window.innerWidth < 768 ? 'hidden' : '';
    }
    
    // Close panel
    close() {
        const panel = document.getElementById('portfolio-filter-panel');
        const overlay = document.getElementById('portfolio-filter-overlay');
        const content = document.querySelector('.portfolio-grid-wrapper');
        
        panel.classList.remove('active');
        overlay.classList.remove('active');
        
        if (content) {
            content.classList.remove('panel-open');
        }
        
        this.isOpen = false;
        document.body.style.overflow = '';
    }
    
    // Update filters
    updateFilters(checkbox) {
        const type = checkbox.dataset.filterType;
        const value = checkbox.value;
        
        if (checkbox.checked) {
            if (!this.activeFilters[type].includes(value)) {
                this.activeFilters[type].push(value);
            }
        } else {
            this.activeFilters[type] = this.activeFilters[type].filter(v => v !== value);
        }
        
        this.applyFilters();
    }
    
    // Clear all filters
    clearAll() {
        this.activeFilters = {
            style: [],
            theme: [],
            brand: []
        };
        
        document.querySelectorAll('.portfolio-filter-option input').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        this.applyFilters();
    }
    
    // Apply filters to grid
    applyFilters() {
        const cards = document.querySelectorAll('.portfolio-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            let show = true;
            
            // Check style filters
            if (this.activeFilters.style.length > 0) {
                show = show && this.activeFilters.style.includes(card.dataset.style);
            }
            
            // Check theme filters
            if (this.activeFilters.theme.length > 0) {
                show = show && this.activeFilters.theme.includes(card.dataset.theme);
            }
            
            // Check brand filters
            if (this.activeFilters.brand.length > 0) {
                show = show && this.activeFilters.brand.includes(card.dataset.brand);
            }
            
            card.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });
        
        // Update counter
        this.updateCounter(visibleCount);
    }
    
    // Update results counter
    updateCounter(count) {
        const counter = document.getElementById('portfolio-results-count');
        if (counter) {
            counter.textContent = `${count} ${count === 1 ? 'Result' : 'Results'}`;
        }
    }
}

// Export for use
window.PortfolioFilterPanel = PortfolioFilterPanel;