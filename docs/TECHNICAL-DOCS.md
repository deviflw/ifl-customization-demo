# IFL Customization Demo - Technical Documentation

## 📁 Project Structure

```
ifl-customization-demo/
├── index.html              # Homepage with service cards
├── bespoke-edition.html    # Bespoke Edition demo ($1,200)
├── full-customization.html # Full Customization demo ($1,490)
├── test-sticky.html        # Test file for sticky scroll
├── shared/                 # Shared resources
│   ├── styles.css         # Main styles (v11)
│   ├── navigation.css     # Navigation menu styles
│   ├── filters.css        # Filter system styles
│   ├── stepped.css        # Stepped customizer styles
│   ├── script.js          # Main interactions
│   ├── filters.js         # Filter functionality
│   ├── stepped.js         # Watch selector logic
│   └── quantity-price-update.js # Price calculations
└── docs/                   # Documentation
    └── TECHNICAL-DOCS.md   # This file
```

## 🎨 Design System

### Colors (CSS Variables)
```css
--primary-color: #081820;  /* Dark navy */
--secondary-color: #40bec1; /* Tiffany blue */
--secondary-hover: #35a7a9; /* Tiffany hover */
--success-color: #28a745;   /* Green */
--gray-light: #f5f5f5;
--gray-medium: #999;
--gray-dark: #666;
--font-family: 'Montserrat', -apple-system...
```

### Typography
- Font: Montserrat (400, 500, 600, 700)
- Applied globally via CSS variable
- All buttons, inputs use font-family variable

### Layout
- Desktop: 62/38 column split
- Mobile: Single column
- Sticky scroll: WORKING! (right column sticks)
- Full edge-to-edge design
- Padding: 20px consistently

## ✅ CURRENT STATUS (September 25, 2025)

### Working Features
1. **Navigation** 
   - Sticky top nav (60px height)
   - Mobile hamburger menu
   - Active page highlighting
   - Full width alignment

2. **Breadcrumbs**
   - No background (transparent)
   - Padding: 10px 20px 10px 20px
   - Aligned with content width

3. **Sticky Scroll** ✅ FIXED!
   - Removed `overflow-x: hidden` from html/body (was blocking sticky)
   - Right column sticks at top: 60px
   - Works on desktop only
   - Gallery min-height: 900px

4. **Homepage**
   - Header: Tiffany color (#40bec1)
   - Two service cards
   - Footer credits: Claude and @deviflw

### Gallery Layouts

#### Bespoke Edition
- Desktop: 2x3 grid (6 images total)
- Mobile: 1 large + 5 small thumbnails in row

#### Full Customization  
- Desktop: 3x4 grid (12 images)
- Mobile: 12 images in single column

## 🔧 Key Fixes Applied

### Sticky Scroll Fix
```css
/* BEFORE (broken): */
html { overflow-x: hidden; }
body { overflow-x: hidden; }

/* AFTER (working): */
/* Removed overflow-x completely */
```

### Navigation Height
```css
.demo-nav {
    height: 60px; /* Fixed height */
}

.product-details {
    position: sticky;
    top: 60px; /* Matches nav height */
}
```

## 🚀 Deployment Info

### GitHub Pages
- Repository: https://github.com/deviflw/ifl-customization-demo
- Live URL: https://deviflw.github.io/ifl-customization-demo/
- Auto-deploys on push to master
- Cache: Can be aggressive, use Ctrl+Shift+R

### Git Commands
```bash
# Commit locally
git add -A
git commit -m "message"

# Push to GitHub (updates website)
git push

# Force rebuild if stuck
git commit --allow-empty -m "Trigger rebuild"
git push
```

## 📝 Session Recovery Info

### Critical Paths
- Working directory: `C:/Users/mila/Desktop/ifl-customization-demo`
- GitHub: @deviflw (full access)
- Original project: `C:/Users/mila/Desktop/bespoke-customization`

### Current Work Context
- Date: September 25, 2025
- Last push: Sticky scroll fixed
- All features working
- Ready for double gallery discussion

## 🎯 TODO / Discussion Points

### Double Gallery Concept
- Need: Different gallery for desktop vs mobile
- Challenge: Mobile implementation
- Status: Team discussion phase

### Potential Improvements
- [ ] Double gallery system
- [ ] Image lazy loading
- [ ] Zoom functionality
- [ ] Better mobile gallery UX

## 💾 Important Files Content

### Key CSS Variables Location
- `shared/styles.css` lines 5-14

### Sticky Configuration  
- `shared/styles.css` lines 135-149
- `shared/navigation.css` line 8

### Gallery Styles
- Bespoke: `bespoke-edition.html` lines 15-73
- Full: `full-customization.html` lines 13-195

## 🔐 Access & Versions

- Current styles.css: v11
- Navigation added: Sept 25
- Sticky fixed: Sept 25
- Last GitHub push: Working

## 📞 Created with 💕 by Claude and @deviflw

---

Last updated: September 25, 2025, 11:00 AM