// Portfolio Data - Simulating Shopify Metaobjects
// Single source of truth for all portfolio items

const portfolioData = {
    items: [
        {
            id: 'galaxy-prx',
            title: 'Galaxy Concept',
            subtitle: 'Cosmic inspiration',
            handle: 'galaxy-concept-tissot-prx',
            style: 'Abstract',
            theme: 'Space',
            watch: {
                model: 'Tissot PRX Powermatic 80',
                brand: 'Tissot',
                size: '40mm',
                price: 695
            },
            service_price: 1200,
            portfolio_type: 'product',
            images: [
                'https://via.placeholder.com/800x800/1a1a2e/fff?text=Galaxy+1',
                'https://via.placeholder.com/800x800/2d2d44/fff?text=Galaxy+2',
                'https://via.placeholder.com/800x800/3d3d55/fff?text=Galaxy+3'
            ],
            main_image: 'https://via.placeholder.com/800x800/1a1a2e/fff?text=Galaxy+Main',
            client_location: null,
            completion_date: '2024-11-15',
            featured: true,
            is_active: true,
            description: 'Inspired by deep space nebulas and cosmic phenomena, this design features swirling galaxies and stellar formations.'
        },
        {
            id: 'ocean-aquis',
            title: 'Ocean Explorer',
            subtitle: 'Deep sea adventure',
            handle: 'ocean-explorer-oris-aquis',
            style: 'Nature',
            theme: 'Ocean',
            watch: {
                model: 'Oris Aquis Date',
                brand: 'Oris',
                size: '43.5mm',
                price: 2250
            },
            service_price: 1200,
            portfolio_type: 'product',
            images: [
                'https://via.placeholder.com/800x800/006994/fff?text=Ocean+1',
                'https://via.placeholder.com/800x800/0099cc/fff?text=Ocean+2',
                'https://via.placeholder.com/800x800/00ccff/fff?text=Ocean+3'
            ],
            main_image: 'https://via.placeholder.com/800x800/006994/fff?text=Ocean+Main',
            featured: true,
            is_active: true,
            description: 'Capturing the mystery of ocean depths with marine life and coral reef patterns.'
        },
        {
            id: 'ferrari-prx',
            title: 'Racing Dreams',
            subtitle: 'Ferrari F40 tribute',
            handle: 'racing-dreams-ferrari-f40',
            style: 'Illustration',
            theme: 'Cars & Motors',
            watch: {
                model: 'Tissot PRX',
                brand: 'Tissot',
                size: '40mm',
                price: 695
            },
            service_price: 1490,
            portfolio_type: 'custom_order',
            images: [
                'https://via.placeholder.com/800x800/cc0000/fff?text=Ferrari+1',
                'https://via.placeholder.com/800x800/ff0000/fff?text=Ferrari+2',
                'https://via.placeholder.com/800x800/990000/fff?text=Ferrari+3'
            ],
            main_image: 'https://via.placeholder.com/800x800/cc0000/fff?text=Ferrari+Main',
            client_location: 'Dubai, UAE',
            completion_date: '2024-12-01',
            is_active: true,
            description: 'A tribute to the legendary Ferrari F40, featuring detailed automotive artwork.'
        },
        {
            id: 'logo-rolex',
            title: 'Corporate Identity',
            subtitle: 'Company branding',
            handle: 'corporate-identity-rolex',
            style: 'Logo',
            theme: 'Corporate',
            watch: {
                model: 'Rolex Datejust 41',
                brand: 'Rolex',
                size: '41mm',
                price: 8500
            },
            service_price: 1490,
            portfolio_type: 'custom_order',
            images: [
                'https://via.placeholder.com/800x800/333333/fff?text=Logo+1',
                'https://via.placeholder.com/800x800/555555/fff?text=Logo+2'
            ],
            main_image: 'https://via.placeholder.com/800x800/333333/fff?text=Logo+Main',
            client_location: 'London, UK',
            completion_date: '2024-10-15',
            is_active: true,
            description: 'Elegant corporate branding integrated into luxury timepiece design.'
        },
        {
            id: 'geometric-seiko',
            title: 'Sacred Geometry',
            subtitle: 'Mathematical beauty',
            handle: 'sacred-geometry-seiko',
            style: 'Geometric',
            theme: 'Abstract',
            watch: {
                model: 'Seiko Presage',
                brand: 'Seiko',
                size: '40.5mm',
                price: 450
            },
            service_price: 1200,
            portfolio_type: 'product',
            images: [
                'https://via.placeholder.com/800x800/9b59b6/fff?text=Geometry+1',
                'https://via.placeholder.com/800x800/8e44ad/fff?text=Geometry+2'
            ],
            main_image: 'https://via.placeholder.com/800x800/9b59b6/fff?text=Geometry+Main',
            featured: true,
            is_active: true,
            description: 'Intricate geometric patterns inspired by sacred geometry and mathematical forms.'
        },
        {
            id: 'portrait-omega',
            title: 'Personal Portrait',
            subtitle: 'Family heritage',
            handle: 'personal-portrait-omega',
            style: 'Portrait',
            theme: 'Personal',
            watch: {
                model: 'Omega Seamaster',
                brand: 'Omega',
                size: '42mm',
                price: 5200
            },
            service_price: 1490,
            portfolio_type: 'custom_order',
            images: [
                'https://via.placeholder.com/800x800/f39c12/fff?text=Portrait+1',
                'https://via.placeholder.com/800x800/e67e22/fff?text=Portrait+2'
            ],
            main_image: 'https://via.placeholder.com/800x800/f39c12/fff?text=Portrait+Main',
            client_location: 'Paris, France',
            completion_date: '2024-09-20',
            is_active: true,
            description: 'Personal portraits and family heritage transformed into timeless art.'
        },
        {
            id: 'graffiti-gshock',
            title: 'Street Art',
            subtitle: 'Urban expression',
            handle: 'street-art-gshock',
            style: 'Illustration',
            theme: 'Urban',
            watch: {
                model: 'G-Shock CasiOak',
                brand: 'Casio',
                size: '45mm',
                price: 150
            },
            service_price: 1200,
            portfolio_type: 'product',
            images: [
                'https://via.placeholder.com/800x800/e74c3c/fff?text=Graffiti+1',
                'https://via.placeholder.com/800x800/c0392b/fff?text=Graffiti+2',
                'https://via.placeholder.com/800x800/d35400/fff?text=Graffiti+3'
            ],
            main_image: 'https://via.placeholder.com/800x800/e74c3c/fff?text=Graffiti+Main',
            featured: true,
            is_active: true,
            description: 'Bold street art and graffiti culture captured on robust G-Shock canvas.'
        },
        {
            id: 'nature-tudor',
            title: 'Forest Dreams',
            subtitle: 'Natural beauty',
            handle: 'forest-dreams-tudor',
            style: 'Nature',
            theme: 'Forest',
            watch: {
                model: 'Tudor Black Bay',
                brand: 'Tudor',
                size: '41mm',
                price: 3500
            },
            service_price: 1490,
            portfolio_type: 'custom_order',
            images: [
                'https://via.placeholder.com/800x800/27ae60/fff?text=Forest+1',
                'https://via.placeholder.com/800x800/229954/fff?text=Forest+2'
            ],
            main_image: 'https://via.placeholder.com/800x800/27ae60/fff?text=Forest+Main',
            client_location: 'Vancouver, Canada',
            completion_date: '2024-11-30',
            is_active: true,
            description: 'Enchanting forest landscapes with detailed flora and fauna artwork.'
        }
    ],
    
    // Helper methods
    getActiveItems() {
        return this.items.filter(item => item.is_active);
    },
    
    getFeaturedItems() {
        return this.items.filter(item => item.featured && item.is_active);
    },
    
    getByStyle(style) {
        return this.items.filter(item => item.style === style && item.is_active);
    },
    
    getByBrand(brand) {
        return this.items.filter(item => item.watch.brand === brand && item.is_active);
    },
    
    getById(id) {
        return this.items.find(item => item.id === id);
    },
    
    getByHandle(handle) {
        return this.items.find(item => item.handle === handle);
    },
    
    getUniqueStyles() {
        return [...new Set(this.items.map(item => item.style))];
    },
    
    getUniqueBrands() {
        return [...new Set(this.items.map(item => item.watch.brand))];
    }
};