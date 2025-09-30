// Preview Slider functionality for Step 3
let currentSlide = 0;
let sliderImages = [];

// Update preview slider when Step 3 is shown  
function updatePreviewSlider() {
    // Get concept for current page (Bespoke or Full)
    const isBespoke = window.location.pathname.includes('bespoke');
    const conceptId = isBespoke ? 'galaxy-concept' : null; // For demo, using galaxy concept
    
    // Get gallery images for selected watch
    if (selectedWatch && conceptId) {
        sliderImages = getConceptGallery(conceptId, selectedWatch.id) || [];
    } else if (!isBespoke) {
        // For Full Customization, show portfolio examples
        sliderImages = fullCustomizationExamples['abstract'] || [];
    } else {
        sliderImages = [];
    }
    
    // Build slider HTML
    const sliderElement = document.getElementById('preview-slider');
    if (!sliderElement) return;
    
    if (sliderImages.length > 0) {
        sliderElement.classList.add('has-images');
        sliderElement.innerHTML = `
            <div class="slider-container ${sliderImages.length === 1 ? 'single-image' : ''}">
                <button class="slider-arrow prev" onclick="prevSlide()">‹</button>
                <div class="slider-images">
                    ${sliderImages.map((img, i) => `
                        <div class="slider-image ${i === 0 ? 'active' : ''}" data-slide="${i}">
                            ${img}
                        </div>
                    `).join('')}
                </div>
                <button class="slider-arrow next" onclick="nextSlide()">›</button>
            </div>
            ${sliderImages.length > 1 ? `
                <div class="slider-dots">
                    ${sliderImages.map((_, i) => `
                        <div class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        currentSlide = 0;
    } else {
        // No images - hide slider
        sliderElement.classList.remove('has-images');
        sliderElement.innerHTML = '';
    }
}

// Slider navigation functions
function nextSlide() {
    if (sliderImages.length <= 1) return;
    
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
}

function prevSlide() {
    if (sliderImages.length <= 1) return;
    
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function showSlide(index) {
    // Update images
    const images = document.querySelectorAll('.slider-image');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    
    // Update dots
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const sliderVisible = document.querySelector('.preview-slider.has-images');
    if (!sliderVisible) return;
    
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left
        } else {
            prevSlide(); // Swipe right
        }
    }
}

// Add touch listeners when slider is created
document.addEventListener('DOMContentLoaded', function() {
    const sliderElement = document.getElementById('preview-slider');
    if (sliderElement) {
        sliderElement.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderElement.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});