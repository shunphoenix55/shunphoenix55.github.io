/**
 * Component Loader
 * Dynamically loads shared HTML components (nav, footer) into placeholder divs.
 * Automatically detects if the page is in a subdirectory and adjusts paths accordingly.
 */

// Detect if the current page is inside a subdirectory (e.g., work/, projects/)
const pathSegments = window.location.pathname.split('/').filter(Boolean);
const pageName = pathSegments[pathSegments.length - 1] || 'index.html';

// Check if we're in a subdirectory by looking at the path depth
// Pages in subdirectories like /work/immersive-tech.html will have the components
// folder at ../components/ relative to them
const isSubdirectory = pathSegments.length > 1 && !pageName.includes('index.html') &&
    (window.location.pathname.includes('/work/') ||
        window.location.pathname.includes('/projects/') ||
        window.location.pathname.includes('/hackathons/') ||
        window.location.pathname.includes('/workshops/') ||
        window.location.pathname.includes('/orgs/'));

const basePath = isSubdirectory ? '../' : '';

async function loadComponent(id, file) {
    try {
        const response = await fetch(basePath + file);
        if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
        let html = await response.text();

        // For subdirectory pages, prefix all relative href/src attributes with ../
        if (isSubdirectory) {
            // Prefix href attributes that point to root-level pages
            html = html.replace(/href="((?!https?:\/\/|#|mailto:)[\w\-]+\.html[^"]*)"/g, 'href="' + basePath + '$1"');
            // Prefix href attributes with index.html references
            html = html.replace(/href="\.\.\/index\.html/g, 'href="../index.html');
        }

        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${file}:`, error);
    }
}

// Load shared components
document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent("nav-placeholder", "components/nav.html"),
        loadComponent("footer-placeholder", "components/footer.html")
    ]);

    // Dispatch event so global.js knows components are loaded
    document.dispatchEvent(new CustomEvent("components-loaded"));
});
