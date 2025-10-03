# СРОЧНО ДОБАВИТЬ В portfolio-behance.html

## Перед закрывающим </script> добавить:

```javascript
// Populate filters on load
window.addEventListener('load', () => {
    // Theme filters
    const themeContainer = document.getElementById('themeFilters');
    if (themeContainer && portfolioMetaobjects) {
        portfolioMetaobjects.themes.forEach(theme => {
            themeContainer.innerHTML += `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${theme.id}" onchange="updateFilters()">
                    <span>${theme.name}</span>
                </label>
            `;
        });
    }

    // Style filters  
    const styleContainer = document.getElementById('styleFilters');
    if (styleContainer && portfolioMetaobjects) {
        portfolioMetaobjects.styles.forEach(style => {
            styleContainer.innerHTML += `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${style.id}" onchange="updateFilters()">
                    <span>${style.name}</span>
                </label>
            `;
        });
    }

    // Watch Model filters
    const watchContainer = document.getElementById('watchFilters');
    if (watchContainer && portfolioMetaobjects) {
        const watchModels = [...new Set(portfolioMetaobjects.items
            .map(item => item.watch_product?.vendor)
            .filter(Boolean))];
        
        watchModels.forEach(model => {
            watchContainer.innerHTML += `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${model}" onchange="updateFilters()">
                    <span>${model}</span>
                </label>
            `;
        });
    }
});
```

## Для активных фильтров добавить:

В HTML после кнопки фильтров но перед панелью:
```html
<!-- Active filters display -->
<div class="active-filters" id="activeFilters" style="display: none;">
    <span>Active filters:</span>
    <div class="active-filter-tags"></div>
    <button onclick="clearAllFilters()">Clear All</button>
</div>
```

Стили как в кастомайзере!
