// Portfolio Components - Reusable UI components
// DRY principle - use everywhere

class PortfolioComponents {
    
    // Render single portfolio card
    static renderCard(item, options = {}) {
        const {
            showPrice = true,
            showBrand = true,
            linkToDetail = true,
            size = 'normal' // 'small', 'normal', 'large'
        } = options;
        
        const cardClass = `portfolio-card portfolio-card--${size}`;
        const link = linkToDetail ? `portfolio-detail.html?id=${item.id}` : '#';
        
        return `
            <div class="${cardClass}" data-id="${item.id}" data-style="${item.style}" data-brand="${item.watch.brand}">
                <div class="portfolio-card__image">
                    <div class="portfolio-card__slider">
                        ${item.images.slice(0, 3).map((img, index) => `
                            <img src="${img}" alt="${item.title}" 
                                 class="portfolio-card__img ${index === 0 ? 'active' : ''}" 
                                 data-index="${index}">
                        `).join('')}
                    </div>
                    <div class="portfolio-card__dots">
                        ${item.images.slice(0, 3).map((_, index) => `
                            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                        `).join('')}
                    </div>
                    <div class="portfolio-card__overlay">
                        <button class="quick-view-btn" onclick="PortfolioComponents.openQuickView('${item.id}')">
                            Quick View
                        </button>
                    </div>
                </div>
                <div class="portfolio-card__info">
                    <h3 class="portfolio-card__title">
                        ${linkToDetail ? `<a href="${link}">${item.title}</a>` : item.title}
                    </h3>
                    <p class="portfolio-card__subtitle">${item.subtitle}</p>
                    ${showBrand ? `
                        <p class="portfolio-card__watch">
                            <span class="brand">${item.watch.brand}</span> 
                            <span class="model">${item.watch.model}</span>
                        </p>
                    ` : ''}
                    ${showPrice ? `
                        <p class="portfolio-card__price">
                            Service: $${item.service_price.toLocaleString()}
                        </p>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    // Render portfolio grid
    static renderGrid(items, options = {}) {
        const {
            columns = 3,
            showFilters = true,
            filterOptions = ['style', 'brand'],
            size = 'normal'
        } = options;
        
        const gridClass = `portfolio-grid portfolio-grid--${columns}col`;
        
        let html = '<div class="portfolio-container">';
        
        // Add filters if enabled
        if (showFilters) {
            html += this.renderFilters(items, filterOptions);
        }
        
        // Add grid
        html += `<div class="${gridClass}" id="portfolio-grid">`;
        items.forEach(item => {
            html += this.renderCard(item, { size });
        });
        html += '</div>';
        
        html += '</div>';
        
        return html;
    }
    
    // Render filters
    static renderFilters(items, filterTypes = ['style', 'brand']) {
        let html = '<div class="portfolio-filters">';
        
        // All button
        html += '<button class="filter-btn active" data-filter="all">All</button>';
        
        // Style filters
        if (filterTypes.includes('style')) {
            const styles = [...new Set(items.map(item => item.style))];
            html += '<div class="filter-group filter-group--style">';
            styles.forEach(style => {
                html += `<button class="filter-btn" data-filter-type="style" data-filter="${style}">${style}</button>`;
            });
            html += '</div>';
        }
        
        // Brand filters
        if (filterTypes.includes('brand')) {
            const brands = [...new Set(items.map(item => item.watch.brand))];
            html += '<div class="filter-group filter-group--brand">';
            html += '<span class="filter-label">Brand:</span>';
            brands.forEach(brand => {
                html += `<button class="filter-btn" data-filter-type="brand" data-filter="${brand}">${brand}</button>`;
            });
            html += '</div>';
        }
        
        html += '</div>';
        return html;
    }
    
    // Quick View Modal
    static renderQuickViewModal(item) {
        return `
            <div class="portfolio-modal" id="portfolio-modal">
                <div class="portfolio-modal__content">
                    <button class="portfolio-modal__close" onclick="PortfolioComponents.closeQuickView()">×</button>
                    
                    <div class="portfolio-modal__body">
                        <div class="portfolio-modal__gallery">
                            <div class="main-image">
                                <img src="${item.images[0]}" alt="${item.title}" id="modal-main-image">
                            </div>
                            <div class="thumb-images">
                                ${item.images.map((img, index) => `
                                    <img src="${img}" alt="${item.title}" 
                                         class="thumb ${index === 0 ? 'active' : ''}"
                                         onclick="PortfolioComponents.changeModalImage('${img}', this)">
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="portfolio-modal__info">
                            <h2>${item.title}</h2>
                            <p class="subtitle">${item.subtitle}</p>
                            
                            <div class="watch-details">
                                <h3>Base Watch</h3>
                                <p><strong>${item.watch.brand}</strong> ${item.watch.model}</p>
                                <p>Size: ${item.watch.size}</p>
                                <p>Original Price: $${item.watch.price.toLocaleString()}</p>
                            </div>
                            
                            <div class="service-details">
                                <h3>Customization</h3>
                                <p>Style: ${item.style}</p>
                                <p>Theme: ${item.theme}</p>
                                <p>Service Price: $${item.service_price.toLocaleString()}</p>
                            </div>
                            
                            <p class="description">${item.description}</p>
                            
                            ${item.client_location ? `
                                <p class="client-info">
                                    <small>Client: ${item.client_location}</small><br>
                                    <small>Completed: ${new Date(item.completion_date).toLocaleDateString()}</small>
                                </p>
                            ` : ''}
                            
                            <div class="modal-actions">
                                <a href="full-customization.html" class="btn btn-primary">Order Similar Design</a>
                                <a href="portfolio-detail.html?id=${item.id}" class="btn btn-secondary">View Full Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Initialize portfolio functionality
    static init() {
        // Handle filter clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                this.handleFilter(e.target);
            }
        });
        
        // Handle card image slider
        this.initCardSliders();
    }
    
    // Filter functionality
    static handleFilter(button) {
        const filter = button.dataset.filter;
        const filterType = button.dataset.filterType;
        const grid = document.getElementById('portfolio-grid');
        const cards = grid.querySelectorAll('.portfolio-card');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter cards
        cards.forEach(card => {
            if (filter === 'all') {
                card.style.display = '';
            } else {
                const cardValue = filterType === 'brand' ? 
                    card.dataset.brand : 
                    card.dataset.style;
                card.style.display = cardValue === filter ? '' : 'none';
            }
        });
    }
    
    // Card slider functionality
    static initCardSliders() {
        const cards = document.querySelectorAll('.portfolio-card');
        
        cards.forEach(card => {
            const dots = card.querySelectorAll('.dot');
            const images = card.querySelectorAll('.portfolio-card__img');
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.dataset.index);
                    
                    // Update active states
                    dots.forEach(d => d.classList.remove('active'));
                    images.forEach(img => img.classList.remove('active'));
                    
                    dot.classList.add('active');
                    images[index].classList.add('active');
                });
            });
        });
    }
    
    // Quick view functions
    static openQuickView(itemId) {
        const item = portfolioData.getById(itemId);
        if (!item) return;
        
        // Create and append modal
        const modalHtml = this.renderQuickViewModal(item);
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        setTimeout(() => {
            document.getElementById('portfolio-modal').classList.add('active');
        }, 10);
    }
    
    static closeQuickView() {
        const modal = document.getElementById('portfolio-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
    
    static changeModalImage(src, thumb) {
        document.getElementById('modal-main-image').src = src;
        document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    }
}