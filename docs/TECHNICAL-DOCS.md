# IFL Customization Demo - Technical Documentation

## 📁 Project Structure

```
ifl-customization-demo/
├── index.html              # Homepage with service cards
├── bespoke-edition.html    # Bespoke Edition demo ($1,200)
├── full-customization.html # Full Customization demo ($1,490)
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
```

## 🎨 Design System

### Colors
- Primary: `#081820` (Dark navy)
- Secondary: `#40bec1` (Tiffany blue)
- Secondary Hover: `#35a7a9`
- Success: `#28a745`
- Grays: `#f5f5f5`, `#999`, `#666`

### Typography
- Font: Montserrat (400, 500, 600, 700)
- Applied to all elements via CSS variable: `--font-family`

### Layout
- Desktop: 62/38 column split
- Mobile: Single column, details first on Full Customization
- Sticky scroll on desktop (right column)
- Full edge-to-edge design

## 🔧 Key Features

### Navigation
- Sticky top navigation
- Mobile hamburger menu
- Active page highlighting
- Breadcrumbs on product pages

### Bespoke Edition
1. 3-step watch selector
   - Brand selection
   - Model selection  
   - Confirmation
2. Filter system (Price, Brand, Features)
3. Dynamic price calculation
4. Gallery: 2x3 grid desktop, 1 main + 5 thumbs mobile

### Full Customization
1. Inspiration gallery
2. Vision board concept
3. Upload functionality (UI only)
4. Process steps visualization
5. FAQ accordion

### Shared Components
- Quantity selector
- Add to cart button
- Price summary box
- Trust badges
- Product description

## 🚀 Deployment

### GitHub Pages
- Repository: https://github.com/deviflw/ifl-customization-demo
- Live URL: https://deviflw.github.io/ifl-customization-demo/
- Auto-deploys on push to master

### Local Development
```bash
# Clone repository
git clone https://github.com/deviflw/ifl-customization-demo.git
cd ifl-customization-demo

# Make changes
# Test locally by opening HTML files

# Commit and push
git add -A
git commit -m "Your message"
git push
```

## 🐛 Known Issues

### Sticky Scroll
- Desktop: Right column should stick while scrolling
- Current status: Partially working
- Fix: Ensure left column height > right column
- Top offset: 80px (60px nav + 20px gap)

### Mobile Responsiveness
- Gallery: 1 large + 5 small thumbnails
- Trust badges: 2 columns on mobile
- Navigation: Hamburger menu

## 💾 Session Recovery

If session is lost, this documentation contains all critical info:
1. Project location: `C:/Users/mila/Desktop/ifl-customization-demo`
2. GitHub repo: `deviflw/ifl-customization-demo`
3. Key files and their purposes listed above
4. Design decisions documented

## 📝 Version History

### v11 (Current)
- Added navigation menu
- Added breadcrumbs
- Fixed Montserrat font for buttons
- Gallery: 6 images (2x3 desktop)
- Sticky scroll improvements

### Previous Sessions
- Initial UI creation in `bespoke-customization` folder
- Migration to hosted demo
- Multiple style iterations

## 🔐 Access Info

- GitHub: @deviflw (full access)
- Working directory: `C:/Users/mila/Desktop/ifl-customization-demo`
- Original project: `C:/Users/mila/Desktop/bespoke-customization`

## 📞 Support

Created with 💕 by Claude and @deviflw

---

Last updated: January 2025