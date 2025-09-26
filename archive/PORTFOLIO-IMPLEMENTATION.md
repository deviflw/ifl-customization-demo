# Portfolio Implementation Plan

## 🎯 Metaobject Structure (Shopify-style)

### Portfolio Item Schema:
```javascript
const portfolioItems = [
  {
    id: "galaxy-prx",
    title: "Galaxy Concept",
    subtitle: "Cosmic inspiration",
    watch_model: "Tissot PRX Powermatic 80",
    original_price: "$695",
    service_price: "$1,200",
    category: ["space", "abstract"],
    image_main: "galaxy-prx-main.jpg",
    image_lifestyle: "galaxy-prx-lifestyle.jpg",
    available: true,
    featured: true
  },
  {
    id: "ocean-aquis",
    title: "Ocean Dreams",
    subtitle: "Deep sea artistry",
    watch_model: "Oris Aquis",
    original_price: "$2,250",
    service_price: "$1,200",
    category: ["nature", "blue"],
    image_main: "ocean-aquis-main.jpg",
    image_lifestyle: "ocean-aquis-lifestyle.jpg",
    available: true
  },
  {
    id: "urban-casioak",
    title: "Street Art",
    subtitle: "NYC graffiti inspired",
    watch_model: "G-Shock CasiOak",
    original_price: "$150",
    service_price: "$1,200",
    category: ["urban", "colorful"],
    image_main: "urban-casioak-main.jpg",
    image_lifestyle: "urban-casioak-lifestyle.jpg",
    available: true
  }
];
```

## 🎨 Display Options

### 1. Grid Layout (Desktop: 3-4 cols, Mobile: 1-2 cols)
```html
<div class="portfolio-section">
  <h2>Get Inspired by Our Portfolio</h2>
  
  <!-- Filters -->
  <div class="portfolio-filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="space">Space</button>
    <button class="filter-btn" data-filter="nature">Nature</button>
    <button class="filter-btn" data-filter="urban">Urban</button>
    <button class="filter-btn" data-filter="abstract">Abstract</button>
  </div>
  
  <!-- Grid -->
  <div class="portfolio-grid">
    <!-- Items dynamically inserted here -->
  </div>
</div>
```

### 2. Item Card Structure
```html
<div class="portfolio-item" data-categories="space,abstract">
  <div class="portfolio-image">
    <img src="galaxy-prx-main.jpg" alt="Galaxy Concept">
    <div class="portfolio-overlay">
      <button class="quick-view">Quick View</button>
    </div>
  </div>
  <div class="portfolio-info">
    <h3>Galaxy Concept</h3>
    <p class="portfolio-watch">on Tissot PRX</p>
    <p class="portfolio-price">Service: $1,200</p>
  </div>
</div>
```

## 💫 Interactive Features

### 1. Hover Effects
- Image zoom on hover
- Show "Quick View" button
- Darken overlay

### 2. Quick View Modal
- Large image
- Full details
- "Select This Design" button
- Related designs

### 3. Filter Animation
- Smooth fade in/out
- Rearrange grid
- Show count

## 📱 Responsive Behavior

### Desktop (>1200px)
- 4 columns
- Hover effects active
- Side-by-side image comparison

### Tablet (768-1200px)
- 3 columns
- Touch to show overlay

### Mobile (<768px)
- 2 columns
- Simplified cards
- No hover, tap for modal

## 🔧 Implementation Steps

1. **Create data structure** (portfolioItems array)
2. **Build HTML skeleton** 
3. **Add CSS grid layout**
4. **Implement filter logic**
5. **Add modal for quick view**
6. **Make responsive**
7. **Add loading animation**

## 🎯 For Full Customization Page

Portfolio appears AFTER the product details section:
```
[Product Details Section]
[Accordion Info]
--- Full Width Break ---
[Portfolio Section - Full Width]
[Process Steps]
[FAQ]
```

## 🎯 For Bespoke Edition Page

Smaller portfolio at bottom:
```
[Product Details Section]
--- 
[Related Designs - 3 items]
[View All Portfolio →]
```

---

**Note:** This simulates Shopify metaobjects but uses local JS arrays for the demo