// Shared Navigation Component
// Вставляет единую навигацию на все страницы

function insertNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navigationHTML = `
        <nav class="demo-nav">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <span style="color: #40bec1;">IFL</span> Customization Demo
                </a>
                <button class="nav-toggle" onclick="toggleMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="nav-menu" id="navMenu">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="bespoke-edition.html" class="nav-link ${currentPage === 'bespoke-edition.html' ? 'active' : ''}">Bespoke Edition</a>
                        </li>
                        <li class="nav-item">
                            <a href="full-customization.html" class="nav-link ${currentPage === 'full-customization.html' ? 'active' : ''}">Full Customization</a>
                        </li>
                        <li class="nav-item">
                            <a href="portfolio.html" class="nav-link ${currentPage === 'portfolio.html' ? 'active' : ''}">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    // Вставляем в начало body
    document.body.insertAdjacentHTML('afterbegin', navigationHTML);
}

// Toggle menu function
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.demo-nav');
    const menu = document.getElementById('navMenu');
    
    if (nav && menu && !nav.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Вставляем навигацию при загрузке
document.addEventListener('DOMContentLoaded', insertNavigation);