// Quantity controls с пересчётом цены
function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    const value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
        updatePriceDisplay(); // Добавляем пересчёт
    }
}

function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    const value = parseInt(input.value);
    input.value = value + 1;
    updatePriceDisplay(); // Добавляем пересчёт
}

// Новая функция для обновления цен
function updatePriceDisplay() {
    const quantity = parseInt(document.getElementById('quantity-input').value) || 1;
    
    // Базовые цены
    const servicePrice = 1200;
    const watchPriceElement = document.getElementById('selected-watch-price');
    const watchPriceText = watchPriceElement ? watchPriceElement.textContent : '$850.00';
    const watchPrice = parseFloat(watchPriceText.replace(/[^0-9.]/g, ''));
    
    // Пересчитываем
    const totalService = servicePrice * quantity;
    const totalWatch = watchPrice * quantity;
    const total = totalService + totalWatch;
    
    // Обновляем Service Price
    const serviceLine = document.querySelector('.price-summary-line:first-child');
    if (serviceLine) {
        const label = serviceLine.querySelector('.price-label');
        const value = serviceLine.querySelector('.price-value');
        if (quantity > 1) {
            label.innerHTML = `Custom Design Service <span style="color: #666;">× ${quantity}</span>`;
        } else {
            label.innerHTML = 'Custom Design Service';
        }
        value.textContent = `$${totalService.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
    
    // Обновляем Watch Price
    const watchLine = document.getElementById('watch-price-summary');
    if (watchLine) {
        const label = watchLine.querySelector('.price-label');
        const value = watchLine.querySelector('.price-value');
        const watchName = document.getElementById('selected-watch-name').textContent;
        if (quantity > 1) {
            label.innerHTML = `<span id="selected-watch-name">${watchName}</span> <span style="color: #666;">× ${quantity}</span>`;
        } else {
            label.innerHTML = `<span id="selected-watch-name">${watchName}</span>`;
        }
        value.innerHTML = `<span id="selected-watch-price">$${totalWatch.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>`;
    }
    
    // Обновляем Total
    const totalElement = document.getElementById('total-price-summary');
    if (totalElement) {
        totalElement.textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
}

// Добавляем в конец файла для автоматической инициализации
document.addEventListener('DOMContentLoaded', function() {
    // Привязываем обновление цены к изменению количества через input
    const quantityInput = document.getElementById('quantity-input');
    if (quantityInput) {
        quantityInput.addEventListener('change', updatePriceDisplay);
        quantityInput.addEventListener('input', updatePriceDisplay);
    }
});