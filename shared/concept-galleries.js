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
            'tissot-prx-powermatic-black': [
                '[Galaxy on PRX Black 1]',
                '[Galaxy on PRX Black 2]',
                '[Galaxy on PRX Black 3]'
            ],
            'tissot-prx-powermatic-blue': [
                '[Galaxy on PRX Blue 1]',
                '[Galaxy on PRX Blue 2]'
            ],
            'tissot-prx-quartz-gold': [
                '[Galaxy on PRX Gold]'
            ],
            
            // Oris variations
            'oris-aquis-blue': [
                '[Galaxy on Aquis Blue 1]',
                '[Galaxy on Aquis Blue 2]',
                '[Galaxy on Aquis Blue 3]',
                '[Galaxy on Aquis Blue 4]'
            ],
            'oris-aquis-green': [
                '[Galaxy on Aquis Green 1]',
                '[Galaxy on Aquis Green 2]'
            ],
            'oris-big-crown': [], // No images yet
            
            // Seiko variations
            'seiko-presage-cocktail': [
                '[Galaxy on Presage Blue]'
            ],
            'seiko-presage-sharp-edge': [
                '[Galaxy on Sharp Edge 1]',
                '[Galaxy on Sharp Edge 2]',
                '[Galaxy on Sharp Edge 3]',
                '[Galaxy on Sharp Edge 4]',
                '[Galaxy on Sharp Edge 5]'
            ],
            
            // Citizen variations
            'citizen-tsuyosa': [
                '[Galaxy on Tsuyosa 1]',
                '[Galaxy on Tsuyosa 2]',
                '[Galaxy on Tsuyosa 3]'
            ],
            'citizen-eco-drive': [], // No images
            
            // Bulova
            'bulova-lunar-pilot': [
                '[Galaxy on Lunar Pilot]'
            ],
            
            // Hamilton
            'hamilton-khaki-field': [
                '[Galaxy on Khaki 1]',
                '[Galaxy on Khaki 2]'
            ]
        }
    },
    
    'ocean-waves': {
        name: 'Ocean Waves',
        description: 'Dynamic ocean waves with blue gradient',
        watchGalleries: {
            'tissot-prx-powermatic-black': [
                '[Ocean on PRX Black]'
            ],
            'oris-aquis-blue': [
                '[Ocean on Aquis 1]',
                '[Ocean on Aquis 2]',
                '[Ocean on Aquis 3]'
            ],
            // Most models don't have this concept yet
            'default': []
        }
    },
    
    'urban-graffiti': {
        name: 'Urban Graffiti',
        description: 'Street art inspired design',
        watchGalleries: {
            'citizen-tsuyosa': [
                '[Graffiti on Tsuyosa 1]',
                '[Graffiti on Tsuyosa 2]',
                '[Graffiti on Tsuyosa 3]',
                '[Graffiti on Tsuyosa 4]'
            ],
            'bulova-lunar-pilot': [
                '[Graffiti on Lunar]'
            ],
            'default': []
        }
    }
};

// Helper function to get gallery for specific watch
function getConceptGallery(conceptId, watchId) {
    const concept = conceptGalleries[conceptId];
    if (!concept) return [];
    
    // Create a key from watch properties
    // Format: brand-model-dial (simplified)
    const watch = watchDatabase.find(w => w.id === watchId);
    if (!watch) return [];
    
    // Generate key variants to try
    const brandLower = watch.brand.toLowerCase();
    const modelSimple = watch.model.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/presage-/g, 'presage-')
        .replace(/powermatic.*/, 'powermatic')
        .replace(/date/, '');
    const dialColor = watch.dialColor;
    
    // Try different key combinations
    const keysToTry = [
        `${brandLower}-${modelSimple}-${dialColor}`, // Full key
        `${brandLower}-${modelSimple}`,               // Without color
        `${brandLower}`,                              // Just brand
        'default'                                      // Fallback
    ];
    
    // Find first matching gallery
    for (const key of keysToTry) {
        if (concept.watchGalleries[key]) {
            return concept.watchGalleries[key];
        }
    }
    
    return concept.watchGalleries.default || [];
}

// For Full Customization - portfolio examples
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