/**
 * Projects — Data + Card Template
 *
 * Each project supports:
 *   - coverImage: optional full-width header photo (replaces heroImage for "image" type)
 *   - heroType "model-viewer": 3D model embed
 *   - fallbackIcon: Lucide icon shown when no coverImage and heroType is "icon" or missing
 */

const projectsData = [
    {
        link: "projects/neon-nights.html",
        coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        fallbackIcon: "gamepad-2",
        badge: "Unity 6",
        badgeStyle: "bg-black/50 backdrop-blur text-cyan-400",
        title: "Neon Nights",
        description: "A fast-paced endless runner set in a procedural cyberpunk city. Features dynamic lighting and synthwave soundtrack.",
        actions: [
            { label: "Play Demo", style: "text-xs bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800" },
            { label: "Source Code", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },
    {
        link: "projects/ai-behavior.html",
        heroType: "model-viewer",
        modelSrc: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
        modelAlt: "Robot",
        modelAnimation: "Idle",
        fallbackIcon: "cpu",
        title: "AI Behavior Suite",
        description: "Modular AI system for Unity. Includes behavior trees, pathfinding, and sensory systems for NPCs.",
        actions: [
            { label: "GitHub", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" },
            { label: "C#", style: "text-xs border border-slate-700 px-2 py-1 rounded text-slate-500" }
        ]
    },
    {
        link: "projects/dungeon-gen.html",
        fallbackIcon: "layers",
        title: "Procedural Dungeon Gen",
        description: "Algorithm for generating infinite dungeon layouts with room templates and corridor logic.",
        actions: [
            { label: "Read Paper", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    }
];

function projectCardTemplate(project, index) {
    let heroHTML = "";

    if (project.heroType === "model-viewer") {
        // 3D model embed — no cover image fallback here
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden">
                <model-viewer src="${project.modelSrc}" alt="${project.modelAlt}"
                    animation-name="${project.modelAnimation}" autoplay camera-controls interaction-prompt="none" shadow-intensity="1"
                    class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></model-viewer>
            </div>`;
    } else if (project.coverImage) {
        // Cover image with optional badge
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0">
                    <img src="${project.coverImage}" alt="${project.title} cover"
                         class="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black/30"></div>
                </div>
                ${project.badge ? `<div class="absolute top-4 right-4 ${project.badgeStyle} px-2 py-1 rounded text-xs font-mono z-10">${project.badge}</div>` : ''}
            </div>`;
    } else {
        // Fallback Lucide icon
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <i data-lucide="${project.fallbackIcon}"
                   class="w-20 h-20 text-indigo-500 group-hover:rotate-180 transition-transform duration-700"></i>
            </div>`;
    }

    const actionTags = project.actions.map(a =>
        `<span class="${a.style}">${a.label}</span>`
    ).join("");

    return `
        <a href="${project.link}"
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 reveal delay-${(index + 1) * 100}">
            ${heroHTML}
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    ${project.title}
                </h3>
                <p class="text-slate-400 text-sm mb-4">
                    ${project.description}
                </p>
                <div class="flex gap-2">
                    ${actionTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("projects-grid", projectsData, projectCardTemplate);
