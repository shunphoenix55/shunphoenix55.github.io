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

    // Render slug-based detail pages
    renderWorkDetail();
    renderHackathonDetail();
    renderProjectDetail();
    renderWorkshopDetail();
    renderOrgDetail();

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
            ${pg.heroImage
            ? `<div class="absolute inset-0">
                       <img src="${pg.heroImage}" alt="${pg.title} hero"
                            class="w-full h-full object-cover" loading="lazy">
                       <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
                   </div>`
            : `<div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                       <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
                   </div>`
        }
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

// --- Slug-Based Hackathon Detail Renderer ---
function renderHackathonDetail() {
    const root = document.getElementById("hackathon-detail-root");
    if (!root) return;
    if (typeof hackathonsData === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    const hack = hackathonsData.find(h => h.slug === slug);
    if (!hack) {
        root.innerHTML = `
            <div class="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Not Found</h1>
                <p class="text-slate-400 mb-8">No hackathon entry matches this URL.</p>
                <a href="../hackathons.html" class="text-cyan-400 hover:text-cyan-300 transition-colors">&larr; Back to Hackathons</a>
            </div>`;
        return;
    }

    const pg = hack.page;
    document.getElementById("page-title").textContent = `${pg.title} | NEXUS XR`;

    const overviewHTML = pg.overview.map(p => `<p>${p}</p>`).join("");

    const achieveHTML = pg.achievements.map(a => `
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1"></i>
            <div>
                <h4 class="font-bold text-white">${a.title}</h4>
                <p class="text-slate-400 text-sm mt-1">${a.description}</p>
            </div>
        </li>
    `).join("");

    const techHTML = pg.techStack.map(t =>
        `<span class="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700">${t}</span>`
    ).join("");

    const statsHTML = pg.stats.map(s => `
        <li class="flex justify-between">
            <span class="text-slate-400">${s.label}</span>
            <span class="${s.valueColor || 'text-white'} font-mono">${s.value}</span>
        </li>
    `).join("");

    const linksHTML = pg.links && pg.links.length > 0 ? `
        <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 class="text-xl font-bold mb-4 text-white">Links</h3>
            <div class="space-y-2">
                ${pg.links.map(l => `
                    <a href="${l.url}" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                        <i data-lucide="${l.icon}" class="w-4 h-4"></i> ${l.label}
                    </a>`).join("")}
            </div>
        </div>` : "";

    const awardHTML = pg.award ? `
        <div class="flex flex-col items-end gap-2">
            <span class="${pg.awardStyle} flex items-center gap-2">
                <i data-lucide="award" class="w-5 h-5"></i> ${pg.award}
            </span>
        </div>` : "";

    root.innerHTML = `
        <header class="pt-32 pb-12 relative overflow-hidden">
            ${pg.heroImage
            ? `<div class="absolute inset-0">
                       <img src="${pg.heroImage}" alt="${pg.title} hero" class="w-full h-full object-cover" loading="lazy">
                       <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
                   </div>`
            : `<div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                       <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
                   </div>`
        }
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <a href="../hackathons.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Hackathons
                </a>
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h1 class="text-4xl md:text-6xl font-bold mb-2">${pg.title}</h1>
                        <h2 class="text-2xl md:text-3xl text-slate-400 font-display">${pg.subtitle}</h2>
                    </div>
                    ${awardHTML}
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <div class="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                        <i data-lucide="${pg.bannerIcon}" class="w-32 h-32 text-slate-600"></i>
                    </div>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="info" class="w-6 h-6 text-cyan-500"></i> Project Overview
                        </h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">${overviewHTML}</div>
                    </section>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="layers" class="w-6 h-6 text-yellow-500"></i> Key Achievements
                        </h3>
                        <ul class="space-y-4">${achieveHTML}</ul>
                    </section>
                </div>
                <aside class="space-y-8">
                    <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 class="text-xl font-bold mb-4 text-white">Tech Stack</h3>
                        <div class="flex flex-wrap gap-2">${techHTML}</div>
                    </div>
                    <div class="${pg.statsBoxStyle} rounded-2xl p-6 border">
                        <h3 class="text-xl font-bold mb-4 text-white">${pg.statsTitle}</h3>
                        <ul class="space-y-3 text-sm">${statsHTML}</ul>
                    </div>
                    ${linksHTML}
                </aside>
            </div>
        </main>
    `;
}

// --- Slug-Based Project Detail Renderer ---
function renderProjectDetail() {
    const root = document.getElementById("project-detail-root");
    if (!root) return;
    if (typeof projectsData === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    const project = projectsData.find(p => p.slug === slug);
    if (!project) {
        root.innerHTML = `
            <div class="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Not Found</h1>
                <p class="text-slate-400 mb-8">No project entry matches this URL.</p>
                <a href="../projects.html" class="text-cyan-400 hover:text-cyan-300 transition-colors">&larr; Back to Projects</a>
            </div>`;
        return;
    }

    const pg = project.page;
    document.getElementById("page-title").textContent = `${pg.title} | NEXUS XR`;

    const overviewHTML = pg.overview.map(p => `<p>${p}</p>`).join("");

    const featuresHTML = pg.features.map(f => `
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1"></i>
            <div>
                <h4 class="font-bold text-white">${f.title}</h4>
                <p class="text-slate-400 text-sm mt-1">${f.description}</p>
            </div>
        </li>
    `).join("");

    const techHTML = pg.techStack.map(t =>
        `<span class="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700">${t}</span>`
    ).join("");

    const statsHTML = pg.stats.map(s => `
        <li class="flex justify-between">
            <span class="text-slate-400">${s.label}</span>
            <span class="${s.valueColor || 'text-white'} font-mono">${s.value}</span>
        </li>
    `).join("");

    const linksHTML = pg.links && pg.links.length > 0 ? `
        <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 class="text-xl font-bold mb-4 text-white">Links</h3>
            <div class="space-y-2">
                ${pg.links.map(l => `
                    <a href="${l.url}" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                        <i data-lucide="${l.icon}" class="w-4 h-4"></i> ${l.label}
                    </a>`).join("")}
            </div>
        </div>` : "";

    const heroActionHTML = pg.heroAction ? `
        <a href="${pg.heroAction.url}" class="${pg.heroAction.style} px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105">
            <i data-lucide="${pg.heroAction.icon}" class="w-5 h-5"></i> ${pg.heroAction.label}
        </a>` : "";

    const bannerContent = pg.bannerImage
        ? `<img src="${pg.bannerImage}" alt="${pg.title}" class="w-full h-full object-cover">`
        : `<i data-lucide="${pg.bannerIcon}" class="w-32 h-32 text-slate-600"></i>`;

    root.innerHTML = `
        <header class="pt-32 pb-12 relative overflow-hidden">
            ${pg.heroImage
            ? `<div class="absolute inset-0">
                       <img src="${pg.heroImage}" alt="${pg.title} hero" class="w-full h-full object-cover" loading="lazy">
                       <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
                   </div>`
            : `<div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                       <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
                   </div>`
        }
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <a href="../projects.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Projects
                </a>
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h1 class="text-4xl md:text-6xl font-bold mb-2">${pg.title}</h1>
                        <h2 class="text-2xl md:text-3xl text-slate-400 font-display">${pg.subtitle}</h2>
                    </div>
                    ${heroActionHTML}
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <div class="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                        ${bannerContent}
                    </div>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="info" class="w-6 h-6 text-cyan-500"></i> Project Description
                        </h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">${overviewHTML}</div>
                    </section>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="layers" class="w-6 h-6 text-yellow-500"></i> Key Features
                        </h3>
                        <ul class="space-y-4">${featuresHTML}</ul>
                    </section>
                </div>
                <aside class="space-y-8">
                    <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 class="text-xl font-bold mb-4 text-white">Tech Stack</h3>
                        <div class="flex flex-wrap gap-2">${techHTML}</div>
                    </div>
                    <div class="${pg.statsBoxStyle} rounded-2xl p-6 border">
                        <h3 class="text-xl font-bold mb-4 text-white">${pg.statsTitle}</h3>
                        <ul class="space-y-3 text-sm">${statsHTML}</ul>
                    </div>
                    ${linksHTML}
                </aside>
            </div>
        </main>
    `;
}

// --- Slug-Based Workshop Detail Renderer ---
function renderWorkshopDetail() {
    const root = document.getElementById("workshop-detail-root");
    if (!root) return;
    if (typeof workshopsData === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    const ws = workshopsData.find(w => w.slug === slug);
    if (!ws) {
        root.innerHTML = `
            <div class="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Not Found</h1>
                <p class="text-slate-400 mb-8">No workshop entry matches this URL.</p>
                <a href="../workshops.html" class="text-cyan-400 hover:text-cyan-300 transition-colors">&larr; Back to Workshops</a>
            </div>`;
        return;
    }

    const pg = ws.page;
    document.getElementById("page-title").textContent = `${pg.title} | NEXUS XR`;

    const overviewHTML = pg.overview.map(p => `<p>${p}</p>`).join("");

    const highlightsHTML = pg.highlights.map(h => `
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1"></i>
            <div>
                <h4 class="font-bold text-white">${h.title}</h4>
                <p class="text-slate-400 text-sm mt-1">${h.description}</p>
            </div>
        </li>
    `).join("");

    const detailsHTML = pg.details.map(d => `
        <li class="flex justify-between">
            <span class="text-slate-400">${d.label}</span>
            <span class="text-white font-mono">${d.value}</span>
        </li>
    `).join("");

    const resourcesHTML = pg.resources && pg.resources.length > 0 ? `
        <div class="${pg.resourcesBoxStyle} rounded-2xl p-6 border">
            <h3 class="text-xl font-bold mb-4 text-white">Resources</h3>
            <div class="space-y-2">
                ${pg.resources.map(r => `
                    <a href="${r.url}" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                        <i data-lucide="${r.icon}" class="w-4 h-4"></i> ${r.label}
                    </a>`).join("")}
            </div>
        </div>` : "";

    root.innerHTML = `
        <header class="pt-32 pb-12 relative overflow-hidden">
            ${pg.heroImage
            ? `<div class="absolute inset-0">
                       <img src="${pg.heroImage}" alt="${pg.title} hero" class="w-full h-full object-cover" loading="lazy">
                       <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
                   </div>`
            : `<div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                       <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
                   </div>`
        }
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <a href="../workshops.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Workshops
                </a>
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h1 class="text-4xl md:text-6xl font-bold mb-2">${pg.title}</h1>
                        <h2 class="text-2xl md:text-3xl text-slate-400 font-display">${pg.subtitle}</h2>
                    </div>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <div class="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                        <i data-lucide="${pg.bannerIcon}" class="w-32 h-32 text-slate-600"></i>
                    </div>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="info" class="w-6 h-6 text-cyan-500"></i> Workshop Overview
                        </h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">${overviewHTML}</div>
                    </section>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="layers" class="w-6 h-6 text-yellow-500"></i> Curriculum Highlights
                        </h3>
                        <ul class="space-y-4">${highlightsHTML}</ul>
                    </section>
                </div>
                <aside class="space-y-8">
                    <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 class="text-xl font-bold mb-4 text-white">${pg.detailsTitle}</h3>
                        <ul class="space-y-3 text-sm">${detailsHTML}</ul>
                    </div>
                    ${resourcesHTML}
                </aside>
            </div>
        </main>
    `;
}

// --- Slug-Based Organization Detail Renderer ---
function renderOrgDetail() {
    const root = document.getElementById("org-detail-root");
    if (!root) return;
    if (typeof orgsData === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (!slug) return;

    const org = orgsData.find(o => o.slug === slug);
    if (!org) {
        root.innerHTML = `
            <div class="pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-bold mb-4">Not Found</h1>
                <p class="text-slate-400 mb-8">No organization entry matches this URL.</p>
                <a href="../organizations.html" class="text-cyan-400 hover:text-cyan-300 transition-colors">&larr; Back to Organizations</a>
            </div>`;
        return;
    }

    const pg = org.page;
    document.getElementById("page-title").textContent = `${pg.title} | NEXUS XR`;

    const overviewHTML = pg.overview.map(p => `<p>${p}</p>`).join("");

    const achieveHTML = pg.achievements.map(a => `
        <li class="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1"></i>
            <div>
                <h4 class="font-bold text-white">${a.title}</h4>
                <p class="text-slate-400 text-sm mt-1">${a.description}</p>
            </div>
        </li>
    `).join("");

    const detailsHTML = pg.details.map(d => `
        <li class="flex justify-between">
            <span class="text-slate-400">${d.label}</span>
            <span class="text-white font-mono">${d.value}</span>
        </li>
    `).join("");

    const linksHTML = pg.links && pg.links.length > 0 ? `
        <div class="${pg.linksBoxStyle} rounded-2xl p-6 border">
            <h3 class="text-xl font-bold mb-4 text-white">Links</h3>
            <div class="space-y-2">
                ${pg.links.map(l => `
                    <a href="${l.url}" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                        <i data-lucide="${l.icon}" class="w-4 h-4"></i> ${l.label}
                    </a>`).join("")}
            </div>
        </div>` : "";

    root.innerHTML = `
        <header class="pt-32 pb-12 relative overflow-hidden">
            ${pg.heroImage
            ? `<div class="absolute inset-0">
                       <img src="${pg.heroImage}" alt="${pg.title} hero" class="w-full h-full object-cover" loading="lazy">
                       <div class="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
                   </div>`
            : `<div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                       <i data-lucide="${pg.heroIcon}" class="w-96 h-96 ${pg.heroIconColor}"></i>
                   </div>`
        }
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <a href="../organizations.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Organizations
                </a>
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h1 class="text-4xl md:text-6xl font-bold mb-2">${pg.title}</h1>
                        <h2 class="text-2xl md:text-3xl text-slate-400 font-display">${pg.subtitle}</h2>
                    </div>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-12">
                    <div class="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                        <i data-lucide="${pg.bannerIcon}" class="w-32 h-32 text-slate-600"></i>
                    </div>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="info" class="w-6 h-6 text-cyan-500"></i> Role Description
                        </h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed">${overviewHTML}</div>
                    </section>
                    <section>
                        <h3 class="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <i data-lucide="layers" class="w-6 h-6 text-yellow-500"></i> Key Achievements
                        </h3>
                        <ul class="space-y-4">${achieveHTML}</ul>
                    </section>
                </div>
                <aside class="space-y-8">
                    <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 class="text-xl font-bold mb-4 text-white">${pg.detailsTitle}</h3>
                        <ul class="space-y-3 text-sm">${detailsHTML}</ul>
                    </div>
                    ${linksHTML}
                </aside>
            </div>
        </main>
    `;
}
