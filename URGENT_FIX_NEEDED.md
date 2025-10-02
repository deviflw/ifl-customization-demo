# 🚨 СРОЧНО ИСПРАВИТЬ - ДУБЛИ ФАЙЛОВ PORTFOLIO

## ПРОБЛЕМА:
Полный пиздец с дублирующими файлами в shared/:
- portfolio-styles-v2.css
- portfolio-filters-v2.css  
- portfolio-filters.css
- portfolio-data-v2.js

Каждый переписывает другой, никакого DRY!

## ЧТО ИСПОЛЬЗУЕТСЯ СЕЙЧАС:
В portfolio.html подключено:
- shared/portfolio-styles-v2.css
- shared/portfolio-filters.css (НО ЕСТЬ ЕЩЕ portfolio-filters-v2.css!)
- shared/portfolio-data-v2.js

## ЧТО НУЖНО СДЕЛАТЬ:
1. Оставить ОДИН файл стилей: portfolio.css
2. Оставить ОДИН файл данных: portfolio-data.js
3. Удалить все версии с v2 и прочей хуйней
4. Объединить нужные стили в один файл
5. Сделать нормальный DRY

## НЕ ТРОГАТЬ ПОКА:
- Работает как есть на GitHub
- В следующей сессии с полным временем исправить

---
*НЕ НАЧИНАТЬ ИСПРАВЛЕНИЕ В КОНЦЕ СЕССИИ - ВСЁ СЛОМАЕТСЯ!*
