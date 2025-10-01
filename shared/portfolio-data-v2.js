// Portfolio Data - Simulating Shopify Metaobjects
// Single source of truth for all portfolio items

const portfolioMetaobjects = {
  // Style metaobjects
  styles: [
    { id: "style-1", handle: "illustration", name: "Illustration" },
    { id: "style-2", handle: "fine-art", name: "Fine Art" },
    { id: "style-3", handle: "logo-design", name: "Logo Design" },
    { id: "style-4", handle: "abstract", name: "Abstract" },
    { id: "style-5", handle: "pointillism", name: "Pointillism" },
    { id: "style-6", handle: "graffiti", name: "Graffiti" }
  ],
  
  // Theme metaobjects
  themes: [
    { id: "theme-1", handle: "cars-motors", name: "Cars & Motors" },
    { id: "theme-2", handle: "ocean-marine", name: "Ocean & Marine" },
    { id: "theme-3", handle: "space-galaxy", name: "Space & Galaxy" },
    { id: "theme-4", handle: "nature-wildlife", name: "Nature & Wildlife" },
    { id: "theme-5", handle: "urban-street", name: "Urban & Street Art" },
    { id: "theme-6", handle: "sports-teams", name: "Sports & Teams" },
    { id: "theme-7", handle: "aviation", name: "Aviation" },
    { id: "theme-8", handle: "music-culture", name: "Music & Culture" }
  ],
  
  // Portfolio items
  items: [
    {
      id: "port-1",
      handle: "racing-dreams-ferrari",
      title: "Racing Dreams",
      description: "Custom Ferrari F40 artwork celebrating the golden era of supercars",
      main_image: "https://picsum.photos/600/600?random=1",
      images: [
        "https://picsum.photos/800/800?random=2",
        "https://picsum.photos/800/800?random=3"
      ],
      style_id: "style-1",
      theme_id: "theme-1",
      watch_product: {
        id: "watch-1",
        title: "Tissot PRX Powermatic 80",
        vendor: "Tissot",
        price: 650,
        size: "40mm",
        image: "https://picsum.photos/400/400?random=100"
      },
      portfolio_type: "custom_order",
      client_location: "Dubai, UAE",
      completion_date: "2024-12-15",
      featured: true,
      video_url: "https://www.youtube.com/watch?v=example",
      instagram_url: "https://instagram.com/p/example",
      is_active: true
    },
    {
      id: "port-2",
      handle: "ocean-explorer",
      title: "Ocean Explorer",
      description: "Deep sea diving scene with octopus and coral reef",
      main_image: "https://picsum.photos/600/600?random=4",
      images: [
        "https://picsum.photos/800/800?random=5",
        "https://picsum.photos/800/800?random=6"
      ],
      style_id: "style-2",
      theme_id: "theme-2",
      watch_product: {
        id: "watch-2",
        title: "Oris Aquis Date",
        vendor: "Oris",
        price: 2100,
        size: "43.5mm",
        image: "https://picsum.photos/400/400?random=101"
      },
      portfolio_type: "product",
      product_reference: "/products/ocean-explorer-oris",
      completion_date: "2024-11-20",
      featured: true,
      timelapse_url: "https://www.youtube.com/watch?v=timelapse",
      is_active: true
    },
    {
      id: "port-3",
      handle: "galaxy-wanderer",
      title: "Galaxy Wanderer",
      description: "Abstract space theme with nebula and stars",
      main_image: "https://picsum.photos/600/600?random=7",
      images: [
        "https://picsum.photos/800/800?random=8",
        "https://picsum.photos/800/800?random=9"
      ],
      style_id: "style-5",
      theme_id: "theme-3",
      watch_product: {
        id: "watch-3",
        title: "Citizen Tsuyosa",
        vendor: "Citizen",
        price: 450,
        size: "40mm",
        image: "https://picsum.photos/400/400?random=102"
      },
      portfolio_type: "concept",
      completion_date: "2024-10-10",
      featured: false,
      is_active: true
    },
    {
      id: "port-4",
      handle: "urban-pulse",
      title: "Urban Pulse",
      description: "NYC street art inspired design with graffiti elements",
      main_image: "https://picsum.photos/600/600?random=10",
      images: [
        "https://picsum.photos/800/800?random=11",
        "https://picsum.photos/800/800?random=12"
      ],
      style_id: "style-6",
      theme_id: "theme-5",
      watch_product: {
        id: "watch-4",
        title: "G-Shock CasiOak",
        vendor: "Casio",
        price: 150,
        size: "45mm",
        image: "https://picsum.photos/400/400?random=103"
      },
      portfolio_type: "product",
      product_reference: "/products/urban-pulse-casioak",
      client_location: "New York, USA",
      completion_date: "2024-09-05",
      featured: true,
      instagram_url: "https://instagram.com/p/urbanpulse",
      is_active: true
    },
    {
      id: "port-5",
      handle: "wildlife-spirit",
      title: "Wildlife Spirit",
      description: "Majestic lion portrait in watercolor style",
      main_image: "https://picsum.photos/600/600?random=13",
      images: [
        "https://picsum.photos/800/800?random=14"
      ],
      style_id: "style-2",
      theme_id: "theme-4",
      watch_product: {
        id: "watch-5",
        title: "Seiko 5 Sports",
        vendor: "Seiko",
        price: 325,
        size: "42.5mm",
        image: "https://picsum.photos/400/400?random=104"
      },
      portfolio_type: "custom_order",
      client_location: "London, UK",
      completion_date: "2024-08-15",
      featured: false,
      video_url: "https://www.youtube.com/watch?v=wildlife",
      is_active: true
    },
    {
      id: "port-6",
      handle: "aviation-legend",
      title: "Aviation Legend",
      description: "P-51 Mustang fighter plane detailed illustration",
      main_image: "https://picsum.photos/600/600?random=15",
      images: [
        "https://picsum.photos/800/800?random=16",
        "https://picsum.photos/800/800?random=17",
        "https://picsum.photos/800/800?random=18"
      ],
      style_id: "style-1",
      theme_id: "theme-7",
      watch_product: {
        id: "watch-6",
        title: "Hamilton Khaki Aviation",
        vendor: "Hamilton",
        price: 895,
        size: "42mm",
        image: "https://picsum.photos/400/400?random=105"
      },
      portfolio_type: "custom_order",
      client_location: "Dallas, USA",
      completion_date: "2024-07-20",
      featured: true,
      timelapse_url: "https://www.youtube.com/watch?v=aviation",
      is_active: true
    },
    {
      id: "port-7",
      handle: "retro-gaming",
      title: "Retro Gaming",
      description: "8-bit pixel art inspired by classic arcade games",
      main_image: "https://picsum.photos/600/600?random=19",
      images: [
        "https://picsum.photos/800/800?random=20",
        "https://picsum.photos/800/800?random=21"
      ],
      style_id: "style-3",
      theme_id: "theme-8",
      watch_product: {
        id: "watch-7",
        title: "Casio A168",
        vendor: "Casio",
        price: 89,
        size: "38mm",
        image: "https://picsum.photos/400/400?random=106"
      },
      portfolio_type: "concept",
      completion_date: "2024-06-10",
      featured: false,
      instagram_url: "https://instagram.com/p/retrogaming",
      is_active: true
    },
    {
      id: "port-8",
      handle: "botanical-garden",
      title: "Botanical Garden",
      description: "Delicate floral patterns with Japanese influence",
      main_image: "https://picsum.photos/600/600?random=22",
      images: [
        "https://picsum.photos/800/800?random=23"
      ],
      style_id: "style-2",
      theme_id: "theme-4",
      watch_product: {
        id: "watch-8",
        title: "Orient Bambino",
        vendor: "Orient",
        price: 295,
        size: "40.5mm",
        image: "https://picsum.photos/400/400?random=107"
      },
      portfolio_type: "product",
      product_reference: "/products/botanical-garden-orient",
      client_location: "Tokyo, Japan",
      completion_date: "2024-05-22",
      featured: true,
      video_url: "https://www.youtube.com/watch?v=botanical",
      timelapse_url: "https://www.youtube.com/watch?v=botanical-process",
      is_active: true
    }
  ]
};

// Helper функции для получения данных
const portfolioHelpers = {
  // Получить стиль по ID
  getStyle(styleId) {
    return portfolioMetaobjects.styles.find(s => s.id === styleId);
  },
  
  // Получить тему по ID
  getTheme(themeId) {
    return portfolioMetaobjects.themes.find(t => t.id === themeId);
  },
  
  // Получить item с раскрытыми метаобъектами
  getItemWithDetails(item) {
    return {
      ...item,
      style: this.getStyle(item.style_id),
      theme: this.getTheme(item.theme_id)
    };
  },
  
  // Получить все активные items
  getActiveItems() {
    return portfolioMetaobjects.items
      .filter(item => item.is_active)
      .map(item => this.getItemWithDetails(item));
  },
  
  // Фильтровать items
  filterItems(filters = {}) {
    let items = this.getActiveItems();
    
    if (filters.style) {
      items = items.filter(item => item.style_id === filters.style);
    }
    if (filters.theme) {
      items = items.filter(item => item.theme_id === filters.theme);
    }
    if (filters.type) {
      items = items.filter(item => item.portfolio_type === filters.type);
    }
    if (filters.featured !== undefined) {
      items = items.filter(item => item.featured === filters.featured);
    }
    
    return items;
  },
  
  // Получить featured items
  getFeaturedItems(limit = 3) {
    return this.filterItems({ featured: true }).slice(0, limit);
  }
};

// Export для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioMetaobjects, portfolioHelpers };
}