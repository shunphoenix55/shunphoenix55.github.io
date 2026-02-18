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

    // Render slug-based work detail page
    renderWorkDetail();

    // Initialize Lucide icons for the page body (runs before components load)
    lucide.createIcons();

    // Scroll reveal
    window.addEventListener("scroll", reveal);
    reveal();
});

// --- Slug-Based Work Detail Renderer ---
function renderWorkDetail() {
    const root = document.getElementById("work-detail-root");
    if (!root) return;
    if (typeof workExperience === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    const job = workExperience.find(j => j.slug === slug);
    if (!job) {
        root.innerHTML = `
            <div class="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Not Found</h1>
                <p class="text-slate-400 mb-8">No work entry matches this URL.</p>
                <a href="../work-experience.html" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                    &larr; Back to Work Experience
                </a>
            </div>
        `;
        return;
    }

    const pg = job.page;

    // Update page title
    document.getElementById("page-title").textContent =
        `${pg.title} - ${pg.company} | NEXUS XR`;

    // --- Build overview paragraphs ---
    const overviewHTML = pg.overview.map(p => `<p>${p}</p>`).join("");

    // --- Build contributions list ---
    const contribHTML = pg.contributions.map(c => `
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1"></i>
            <div>
                <h4 class="font-bold text-white">${c.title}</h4>
                <p class="text-slate-400 text-sm mt-1">${c.description}</p>
            </div>
        </li>
    `).join("");

    // --- Build tech stack tags ---
    const techHTML = pg.techStack.map(t =>
        `<span class="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700">${t}</span>`
    ).join("");

    // --- Build stats list ---
    const statsHTML = pg.stats.map(s => `
        <li class="flex justify-between">
            <span class="text-slate-400">${s.label}</span>
            <span class="${s.valueColor || 'text-white'} font-mono">${s.value}</span>
        </li>
    `).join("");

    // --- Build gallery ---
    let gallerySection = "";
    if (pg.gallery && pg.gallery.length > 0) {
        const galleryItems = pg.gallery.map(item => {
            if (item.type === "image") {
                return `
                    <div class="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                        <img src="${item.src}" alt="${item.alt || ''}"
                             class="w-full h-full object-cover" loading="lazy">
                    </div>`;
            } else if (item.type === "video") {
                return `
                    <div class="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                        <video src="${item.src}" controls class="w-full h-full object-cover"></video>
                    </div>`;
            } else {
                // placeholder
                return `
                    <div class="aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                        <span class="text-slate-500 text-sm flex flex-col items-center gap-2">
                            <i data-lucide="image" class="w-8 h-8"></i> ${item.label || 'Screenshot'}
                        </span>
                    </div>`;
            }
        }).join("");

        gallerySection = `
            <section>
                <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <i data-lucide="image" class="w-6 h-6 text-purple-500"></i> Gallery
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${galleryItems}
                </div>
            </section>
        `;
    }

    // --- Render full page ---
    root.innerHTML = `
        <!-- Hero Section -->
        <header class="pt-32 pb-12 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <a href="../work-experience.html"
                    class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Work Experience
                </a>
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <span class="inline-block px-3 py-1 ${pg.badgeStyle} rounded-full text-sm font-mono mb-4 border">
                            ${pg.duration}
                        </span>
                        <h1 class="text-4xl md:text-6xl font-bold mb-2">${pg.title}</h1>
                        <h2 class="text-2xl md:text-3xl text-slate-400 font-display">${pg.company}</h2>
                    </div>
                </div>
            </div>
        </header>

        <!-- Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

                <!-- Main Details -->
                <div class="lg:col-span-2 space-y-12">

                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="file-text" class="w-6 h-6 text-cyan-500"></i> Overview
                        </h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">
                            ${overviewHTML}
                        </div>
                    </section>

                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="zap" class="w-6 h-6 text-yellow-500"></i> Key Contributions
                        </h3>
                        <ul class="space-y-4">
                            ${contribHTML}
                        </ul>
                    </section>

                    ${gallerySection}

                </div>

                <!-- Sidebar -->
                <aside class="space-y-8">

                    <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 class="text-xl font-bold mb-4 text-white">Tech Stack</h3>
                        <div class="flex flex-wrap gap-2">
                            ${techHTML}
                        </div>
                    </div>

                    <div class="${pg.statsBoxStyle} rounded-2xl p-6 border">
                        <h3 class="text-xl font-bold mb-4 text-white">${pg.statsTitle}</h3>
                        <ul class="space-y-3 text-sm">
                            ${statsHTML}
                        </ul>
                    </div>

                </aside>
            </div>
        </main>
    `;
}
