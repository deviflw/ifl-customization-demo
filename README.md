# 📁 UI/demo - Рабочие демо для IFL Watches Customization

## ✅ ТЕКУЩАЯ СТРУКТУРА

### Готовые демо:

#### 1. **bespoke-edition.html** ✅
- **Статус:** ПОЛНОСТЬЮ ГОТОВ
- **Что это:** Bespoke Edition - выбор часов + готовый дизайн
- **Цена:** $1,200 + стоимость часов
- **Layout:** 50/50 (галерея/детали)
- **Функционал:**
  - 3-step Watch Selector
  - Фильтры (бренд, размер, цвет, движение)
  - Динамический расчет цены
  - Quantity selector
  - Canvas Display
  - Mobile адаптация

#### 2. **full-customization.html** 🚧
- **Статус:** В РАЗРАБОТКЕ
- **Что это:** Full Customization - полная кастомизация с нуля
- **Цена:** $1,490 + стоимость часов
- **Layout:** 60/40 (галерея больше)
- **План добавления:**
  - Inspiration Gallery ✅ (базово работает)
  - Vision Board упоминание
  - Информационные блоки (How it Works, Timeline, FAQ)
  - Upload функционал

## 📂 СТРУКТУРА ФАЙЛОВ

```
UI/demo/
├── bespoke-edition.html       # ✅ Bespoke Edition демо
├── full-customization.html    # 🚧 Full Customization демо  
├── shared/                    # 📦 Общие файлы для всех демо
│   ├── styles.css            # Базовые стили и layouts
│   ├── filters.css           # Стили фильтров
│   ├── stepped.css           # Стили stepped навигации
│   ├── script.js             # Основная логика
│   ├── filters.js            # Логика фильтров
│   ├── stepped.js            # Логика stepped навигации
│   └── quantity-price-update.js # Пересчёт цен
├── archive/                   # 📦 Архив старых файлов
│   └── old-session-files/    # Файлы от прошлых сбоев
└── README.md                  # Этот файл
```

## 💡 АРХИТЕКТУРА

### Layouts и пропорции колонок:
- **Bespoke Edition:** 50/50 (1fr 1fr) - равные колонки
- **Full Customization:** 60/40 - галерея шире через inline стили

### Принцип DRY:
- Все демо используют ОДНИ И ТЕ ЖЕ файлы из `shared/`
- Специфичные стили добавляются через `<style>` в самом HTML
- НЕ используем product-layout.css (он ломает стили)

### Shared компоненты:
1. **Watch Selector** - 3-шаговый выбор часов
2. **Price Calculator** - динамический расчет цены
3. **Canvas Display** - отображение выбранной конфигурации
4. **Filters** - система фильтрации часов
5. **Quantity** - селектор количества с пересчетом

## 🚀 КАК ТЕСТИРОВАТЬ

### Локально в браузере:
```bash
# Bespoke Edition
Открыть: file:///C:/Users/mila/Desktop/bespoke-customization/UI/demo/bespoke-edition.html

# Full Customization
Открыть: file:///C:/Users/mila/Desktop/bespoke-customization/UI/demo/full-customization.html
```

### Проверить функционал:
1. Открыть кастомайзер
2. Выбрать часы (шаг 1)
3. Выбрать варианты (шаг 2)
4. Проверить итог (шаг 3)
5. Apply и проверить обновление Canvas
6. Изменить quantity - проверить пересчет
7. Проверить mobile версию (F12 → responsive)

## ⚠️ ВАЖНО

- **НЕ использовать product-layout.css** - он ломает все стили!
- **НЕ дублировать код** - используем shared
- **Специфичные стили** - добавляем через `<style>` в HTML
- **Shopify версия** будет переписана на Liquid

## 📝 ТЕКУЩИЕ ЗАДАЧИ

### Full Customization - что нужно доделать:
- [ ] Inspiration Gallery - добавить реальные изображения
- [ ] Информационные блоки под основным контентом
- [ ] Vision Board упоминание
- [ ] FAQ секция
- [ ] Финальная полировка

---
**Обновлено:** 25 сентября 2025
**Автор:** Claude + Mila 💕