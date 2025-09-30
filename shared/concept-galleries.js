// Simulated Metaobject: Concept Gallery
// Связывает: концепт + модель часов + галерея изображений

const conceptGalleries = {
    // Bespoke Edition концепты
    'galaxy-concept': {
        name: 'Galaxy Concept',
        description: 'Abstract galaxy artwork with vibrant nebula colors',
        // Галереи для разных моделей часов
        watchGalleries: {
            // Tissot PRX variations
            'tissot-prx-powermatic-80-black': [
                '[Galaxy on PRX Black 1]',
                '[Galaxy on PRX Black 2]',
                '[Galaxy on PRX Black 3]'
            ],
            'tissot-prx-powermatic-80-blue': [
                '[Galaxy on PRX Blue 1]',
                '[Galaxy on PRX Blue 2]',
                '[Galaxy on PRX Blue 3]',
                '[Galaxy on PRX Blue 4]'
            ],
            'tissot-prx-quartz-white': [
                '[Galaxy on PRX White 1]',
                '[Galaxy on PRX White 2]'
            ],
            'tissot-prx-quartz-gold': [
                '[Galaxy on PRX Gold]'
            ],
            
            // Oris variations
            'oris-aquis-date-blue': [
                '[Galaxy on Aquis Blue 1]',
                '[Galaxy on Aquis Blue 2]',
                '[Galaxy on Aquis Blue 3]',
                '[Galaxy on Aquis Blue 4]'
            ],
            'oris-aquis-date-green': [
                '[Galaxy on Aquis Green 1]',
                '[Galaxy on Aquis Green 2]',
                '[Galaxy on Aquis Green 3]'
            ],
            'oris-big-crown-black': [
                '[Galaxy on Big Crown 1]',
                '[Galaxy on Big Crown 2]'
            ],
            
            // Seiko variations
            'seiko-presage-cocktail-blue': [
                '[Galaxy on Presage Blue 1]',
                '[Galaxy on Presage Blue 2]',
                '[Galaxy on Presage Blue 3]',
                '[Galaxy on Presage Blue 4]',
                '[Galaxy on Presage Blue 5]'
            ],
            'seiko-presage-sharp-edge-white': [
                '[Galaxy on Sharp Edge 1]',
                '[Galaxy on Sharp Edge 2]',
                '[Galaxy on Sharp Edge 3]'
            ],
            
            // Citizen variations
            'citizen-tsuyosa-green': [
                '[Galaxy on Tsuyosa Green 1]',
                '[Galaxy on Tsuyosa Green 2]',
                '[Galaxy on Tsuyosa Green 3]'
            ],
            'citizen-eco-drive-black': [
                '[Galaxy on Eco-Drive 1]',
                '[Galaxy on Eco-Drive 2]'
            ],
            
            // Bulova
            'bulova-lunar-pilot-black': [
                '[Galaxy on Lunar Pilot 1]',
                '[Galaxy on Lunar Pilot 2]',
                '[Galaxy on Lunar Pilot 3]',
                '[Galaxy on Lunar Pilot 4]'
            ],
            
            // Hamilton
            'hamilton-khaki-field-black': [
                '[Galaxy on Khaki Field 1]',
                '[Galaxy on Khaki Field 2]',
                '[Galaxy on Khaki Field 3]'
            ],
            
            // Fallback for any unmatched
            'default': [
                '[Galaxy Concept Default]'
            ]
        }
    },
    
    'ocean-waves': {
        name: 'Ocean Waves',
        description: 'Dynamic ocean waves with blue gradient',
        watchGalleries: {
            // Tissot
            'tissot-prx-powermatic-80-black': [
                '[Ocean on PRX Black]'
            ],
            'tissot-prx-powermatic-80-blue': [
                '[Ocean on PRX Blue 1]',
                '[Ocean on PRX Blue 2]'
            ],
            
            // Oris - Perfect for ocean theme!
            'oris-aquis-date-blue': [
                '[Ocean on Aquis Blue 1]',
                '[Ocean on Aquis Blue 2]',
                '[Ocean on Aquis Blue 3]',
                '[Ocean on Aquis Blue 4]',
                '[Ocean on Aquis Blue 5]'
            ],
            'oris-aquis-date-green': [
                '[Ocean on Aquis Green 1]',
                '[Ocean on Aquis Green 2]',
                '[Ocean on Aquis Green 3]'
            ],
            
            // Seiko
            'seiko-presage-cocktail-blue': [
                '[Ocean on Presage Blue 1]',
                '[Ocean on Presage Blue 2]'
            ],
            
            // Hamilton
            'hamilton-khaki-field-black': [
                '[Ocean on Khaki Field]'
            ],
            
            'default': []
        }
    },
    
    'urban-graffiti': {
        name: 'Urban Graffiti',
        description: 'Street art inspired design',
        watchGalleries: {
            // Citizen - urban vibe
            'citizen-tsuyosa-green': [
                '[Graffiti on Tsuyosa Green 1]',
                '[Graffiti on Tsuyosa Green 2]',
                '[Graffiti on Tsuyosa Green 3]',
                '[Graffiti on Tsuyosa Green 4]'
            ],
            'citizen-eco-drive-black': [
                '[Graffiti on Eco-Drive 1]',
                '[Graffiti on Eco-Drive 2]',
                '[Graffiti on Eco-Drive 3]'
            ],
            
            // Bulova - modern street style
            'bulova-lunar-pilot-black': [
                '[Graffiti on Lunar Pilot 1]',
                '[Graffiti on Lunar Pilot 2]'
            ],
            
            // Tissot PRX - urban classic
            'tissot-prx-quartz-white': [
                '[Graffiti on PRX White 1]',
                '[Graffiti on PRX White 2]',
                '[Graffiti on PRX White 3]'
            ],
            
            // Seiko
            'seiko-presage-sharp-edge-white': [
                '[Graffiti on Sharp Edge]'
            ],
            
            'default': []
        }
    },
    
    'minimalist-lines': {
        name: 'Minimalist Lines',
        description: 'Clean geometric patterns with monochrome palette',
        watchGalleries: {
            // Tissot PRX - perfect for minimal
            'tissot-prx-powermatic-80-black': [
                '[Minimal Lines on PRX Black 1]',
                '[Minimal Lines on PRX Black 2]'
            ],
            'tissot-prx-quartz-white': [
                '[Minimal Lines on PRX White 1]',
                '[Minimal Lines on PRX White 2]',
                '[Minimal Lines on PRX White 3]'
            ],
            
            // Seiko Sharp Edge - architectural
            'seiko-presage-sharp-edge-white': [
                '[Minimal Lines on Sharp Edge 1]',
                '[Minimal Lines on Sharp Edge 2]',
                '[Minimal Lines on Sharp Edge 3]',
                '[Minimal Lines on Sharp Edge 4]'
            ],
            
            // Oris Big Crown
            'oris-big-crown-black': [
                '[Minimal Lines on Big Crown]'
            ],
            
            'default': []
        }
    },
    
    'nature-forest': {
        name: 'Forest Nature',
        description: 'Organic patterns inspired by nature',
        watchGalleries: {
            // Citizen Tsuyosa Green - perfect match!
            'citizen-tsuyosa-green': [
                '[Forest on Tsuyosa Green 1]',
                '[Forest on Tsuyosa Green 2]',
                '[Forest on Tsuyosa Green 3]',
                '[Forest on Tsuyosa Green 4]',
                '[Forest on Tsuyosa Green 5]'
            ],
            
            // Oris Green
            'oris-aquis-date-green': [
                '[Forest on Aquis Green 1]',
                '[Forest on Aquis Green 2]'
            ],
            
            // Hamilton Khaki - military forest
            'hamilton-khaki-field-black': [
                '[Forest on Khaki Field 1]',
                '[Forest on Khaki Field 2]',
                '[Forest on Khaki Field 3]'
            ],
            
            'default': []
        }
    }
};

// Helper function to get gallery for specific watch
function getConceptGallery(conceptId, watchId) {
    const concept = conceptGalleries[conceptId];
    if (!concept) return [];
    
    // Find watch in database
    const watch = watchDatabase.find(w => w.id === watchId);
    if (!watch) return [];
    
    // Generate key from watch properties
    const brandLower = watch.brand.toLowerCase();
    const modelSimple = watch.model.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/powermatic-80/g, 'powermatic-80')
        .replace(/presage-/g, 'presage-')
        .replace(/eco-drive/g, 'eco-drive')
        .replace(/lunar-pilot/g, 'lunar-pilot')
        .replace(/khaki-field/g, 'khaki-field')
        .replace(/big-crown/g, 'big-crown')
        .replace(/aquis-date/g, 'aquis-date');
    const dialColor = watch.dialColor.toLowerCase();
    
    // Build the full key
    const fullKey = `${brandLower}-${modelSimple}-${dialColor}`;
    
    // Try different key combinations
    const keysToTry = [
        fullKey,                                      // Full specific key
        `${brandLower}-${modelSimple}`,              // Without color
        `${brandLower}`,                             // Just brand
        'default'                                     // Fallback
    ];
    
    // Find first matching gallery
    for (const key of keysToTry) {
        if (concept.watchGalleries[key] && concept.watchGalleries[key].length > 0) {
            return concept.watchGalleries[key];
        }
    }
    
    return concept.watchGalleries.default || [];
}

// For Full Customization - NO PREVIEW EXAMPLES!
// Full Custom is completely custom design by customer request
// These are only kept for potential future use (portfolio page, etc)
const fullCustomizationExamples = {
    'abstract': [
        '[Abstract Example 1]',
        '[Abstract Example 2]',
        '[Abstract Example 3]'
    ],
    'portrait': [
        '[Portrait Example 1]',
        '[Portrait Example 2]'
    ],
    'logo': [
        '[Logo Example 1]',
        '[Logo Example 2]',
        '[Logo Example 3]',
        '[Logo Example 4]'
    ],
    'nature': [
        '[Nature Example 1]',
        '[Nature Example 2]',
        '[Nature Example 3]'
    ],
    'minimal': [
        '[Minimal Example]'
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { conceptGalleries, getConceptGallery, fullCustomizationExamples };
}