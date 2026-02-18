/**
 * Card Renderer — Generic card factory utility
 * 
 * Pages register their grid + data + template via window.cardRegistrations.
 * global.js calls renderAllCards() after DOMContentLoaded.
 */

window.cardRegistrations = window.cardRegistrations || [];

/**
 * Register a card grid for rendering.
 * @param {string} gridId   - ID of the container element (e.g. "work-grid")
 * @param {Array}  data     - Array of data objects
 * @param {Function} templateFn - (item, index) => HTML string
 */
function registerCards(gridId, data, templateFn) {
    window.cardRegistrations.push({ gridId, data, templateFn });
}

/**
 * Render all registered card grids that exist on the current page.
 */
function renderAllCards() {
    let rendered = false;

    window.cardRegistrations.forEach(({ gridId, data, templateFn }) => {
        const grid = document.getElementById(gridId);
        if (!grid || !data) return;

        const html = data.map((item, index) => templateFn(item, index)).join("");
        grid.innerHTML = html;
        rendered = true;
    });

    if (rendered && typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}
