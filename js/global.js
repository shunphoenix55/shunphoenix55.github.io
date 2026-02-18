/**
 * Global JS
 * Handles shared logic: Lucide icons, mobile menu toggle, scroll reveal, and
 * per-page active-state highlighting in the nav.
 */

// --- Active Nav Highlighting ---
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    // Determine which nav section is active based on the current page or its parent folder
    let activeSection = '';

    if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
        activeSection = 'home';
    } else if (currentPage === 'work-experience.html' || currentPath.includes('/work/')) {
        activeSection = 'work-experience';
    } else if (currentPage === 'projects.html' || currentPath.includes('/projects/')) {
        activeSection = 'projects';
    } else if (currentPage === 'hackathons.html' || currentPath.includes('/hackathons/')) {
        activeSection = 'hackathons';
    } else if (currentPage === 'workshops.html' || currentPath.includes('/workshops/')) {
        activeSection = 'workshops';
    } else if (currentPage === 'organizations.html' || currentPath.includes('/orgs/')) {
        activeSection = 'organizations';
    }

    if (!activeSection) return;

    // Highlight dropdown links (desktop + mobile)
    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
        if (link.getAttribute('data-nav-link') === activeSection) {
            // Desktop dropdown active style
            link.classList.remove('text-gray-300', 'hover:bg-slate-800', 'hover:text-white', 'text-gray-400');
            link.classList.add('text-cyan-400', 'bg-slate-700/50');
        }
    });

    // If we're on a portfolio sub-section, highlight the Portfolio dropdown button
    if (activeSection !== 'home') {
        const dropdownBtn = document.querySelector('.group button');
        if (dropdownBtn) {
            dropdownBtn.classList.remove('text-gray-300');
            dropdownBtn.classList.add('text-cyan-400');
        }
    }
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// --- Scroll Reveal Animation ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// --- Initialize after components are loaded ---
document.addEventListener("components-loaded", () => {
    // Re-initialize Lucide icons (renders icons inside dynamically loaded nav/footer)
    lucide.createIcons();

    // Set up mobile menu
    initMobileMenu();

    // Highlight the active page in the nav
    highlightActiveNav();
});

// --- Initialize page-body logic on DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", () => {
    // Render any registered card grids (from data files)
    if (typeof renderAllCards === "function") {
        renderAllCards();
    }

    // Initialize Lucide icons for the page body (runs before components load)
    lucide.createIcons();

    // Scroll reveal
    window.addEventListener("scroll", reveal);
    reveal();
});
