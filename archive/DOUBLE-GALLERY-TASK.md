# CURRENT TASK: Double Gallery System

## 📋 Requirements Discussion

### The Challenge
We need to implement a **double gallery system** where:
- Desktop and mobile can show different sets of images
- Different layouts for different screen sizes
- Smooth transition between views

### Current Gallery Setup

#### Bespoke Edition
```html
Desktop: 2x3 grid (6 images)
Mobile: 1 main + 5 thumbnails
```

#### Full Customization  
```html
Desktop: 3x4 grid (12 images)
Mobile: Single column (12 images)
```

## 💡 Proposed Solutions

### Option 1: CSS-Only Approach
```css
/* Hide/show different image sets */
.gallery-desktop { display: grid; }
.gallery-mobile { display: none; }

@media (max-width: 768px) {
    .gallery-desktop { display: none; }
    .gallery-mobile { display: block; }
}
```

**Pros:**
- Simple implementation
- No JavaScript needed
- Fast switching

**Cons:**
- Duplicate images in HTML
- Larger page size
- SEO considerations

### Option 2: JavaScript Image Swap
```javascript
// Detect screen size and swap images
if (window.innerWidth <= 768) {
    loadMobileGallery();
} else {
    loadDesktopGallery();
}
```

**Pros:**
- Single set of images
- Dynamic loading
- Smaller HTML

**Cons:**
- Requires JS
- Potential flicker on resize
- More complex

### Option 3: Picture Element
```html
<picture>
    <source media="(max-width: 768px)" srcset="mobile-gallery.jpg">
    <source media="(min-width: 769px)" srcset="desktop-gallery.jpg">
    <img src="fallback.jpg" alt="">
</picture>
```

**Pros:**
- Native browser support
- Responsive images
- Good performance

**Cons:**
- Limited layout control
- Not ideal for grid layouts

## 🎨 Design Considerations

### Mobile Double Gallery Ideas
1. **Swiper/Carousel**
   - Main image with dots
   - Swipe between images
   - Thumbnails below

2. **Tab System**
   - "View 1" | "View 2" tabs
   - Different angles/details

3. **Accordion Gallery**
   - Collapsible sections
   - Categories of images

4. **Modal Gallery**
   - Thumbnail grid
   - Fullscreen on tap

### Desktop Double Gallery Ideas
1. **Split View**
   - Left: Product shots
   - Right: Detail shots

2. **Tab Gallery**
   - "Gallery" | "Details" | "Process"
   - Different image sets per tab

3. **Hover Switch**
   - Main gallery
   - Hover to see alternate angle

## 📐 Technical Implementation Plan

### Phase 1: Structure
```html
<div class="product-gallery" data-gallery-type="double">
    <!-- Desktop Gallery -->
    <div class="gallery-desktop">
        <!-- 6 or 12 images -->
    </div>
    
    <!-- Mobile Gallery -->
    <div class="gallery-mobile">
        <!-- Different layout/images -->
    </div>
</div>
```

### Phase 2: Styling
```css
/* Base styles */
.product-gallery[data-gallery-type="double"] {
    /* Container styles */
}

/* Responsive behavior */
@media (max-width: 768px) {
    /* Mobile-specific layout */
}
```

### Phase 3: Enhancement (Optional)
- Lazy loading
- Image optimization
- Smooth transitions
- Touch gestures

## 🤔 Questions for Team

1. **Same images or different sets?**
   - Use same images in different layouts?
   - Or completely different image sets?

2. **Priority images?**
   - Which images are most important?
   - What should mobile users see first?

3. **Performance vs Features?**
   - Simple = faster
   - Complex = more engaging

4. **Interaction patterns?**
   - Click to zoom?
   - Swipe on mobile?
   - Hover effects on desktop?

## 📝 Decision Matrix

| Solution | Complexity | Performance | UX | SEO |
|----------|-----------|-------------|----|----|
| CSS-Only | Low | Good | Good | OK |
| JS Swap | Medium | OK | Great | Good |
| Picture | Low | Great | OK | Great |
| Hybrid | High | OK | Great | Good |

## 🎯 Recommendation

**For Quick Implementation:**
- CSS-only with duplicate image sets
- Different layouts per breakpoint
- Progressive enhancement later

**For Best UX:**
- JavaScript-powered gallery
- Lazy loading
- Touch gestures
- Smooth transitions

---

**Status:** Awaiting team decision
**Next Step:** Choose approach and implement prototype