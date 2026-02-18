/**
 * Projects — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const projectsData = [
    {
        slug: "neon-nights",

        card: {
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

        page: {
            heroIcon: "gamepad",
            heroIconColor: "text-cyan-500",
            title: "Neon Nights",
            subtitle: "Cyberpunk Endless Runner",
            heroAction: { icon: "play", label: "Play Demo", url: "#", style: "bg-cyan-600 hover:bg-cyan-700 text-white" },
            bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            bannerIcon: "gamepad",

            overview: [
                "Neon Nights is a high-octane endless runner that puts player reflexes to the test. Set in a procedurally generated synthwave city, players must dodge obstacles, collect data shards, and outrun the firewall.",
                "The project was built to explore Unity's Universal Render Pipeline (URP) and performant procedural generation techniques. Every run offers a unique city layout, constructed from modular building blocks at runtime."
            ],

            features: [
                {
                    title: "Procedural City Generation",
                    description: "A robust object pooling system that spawns and recycles building modules, ensuring infinite variety with zero garbage collection spikes."
                },
                {
                    title: "Rhythm-Based Gameplay",
                    description: "Obstacles spawn in sync with the BPM of the soundtrack, creating a flow state experience for the player."
                },
                {
                    title: "Global Leaderboard",
                    description: "Integrated with LootLocker to provide cross-platform high scores."
                }
            ],

            techStack: ["Unity 6", "C#", "URP", "WebGL"],

            statsTitle: "Stats",
            statsBoxStyle: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20",
            stats: [
                { label: "Duration", value: "3 Weeks" },
                { label: "Platform", value: "Web / PC" },
                { label: "Role", value: "Solo Dev" }
            ],

            links: [
                { icon: "github", label: "GitHub Repository", url: "#" },
                { icon: "youtube", label: "Devlog Video", url: "#" }
            ]
        }
    },

    {
        slug: "ai-behavior",

        card: {
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

        page: {
            heroIcon: "brain-circuit",
            heroIconColor: "text-purple-500",
            title: "AI Behavior Library",
            subtitle: "Modular Utility AI System",
            heroAction: { icon: "github", label: "View Source", url: "#", style: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-500" },
            bannerIcon: "git-branch",

            overview: [
                "A decoupled, reusable Utility AI library designed for Unity, allowing for the creation of complex NPC behaviors without spaghetti code. Unlike standard Finite State Machines (FSMs), this system evaluates multiple considerations to score and select the best action dynamically.",
                "Best suited for simulation games or RPGs where NPCs need to weigh their needs (hunger, safety, social) against environmental factors."
            ],

            features: [
                {
                    title: "Visual Debugger",
                    description: "Includes a custom Unity Editor window to visualize the decision-making process in real-time, showing which considerations are driving the current behavior."
                },
                {
                    title: "Curve-Based Scoring",
                    description: "Designers can use Animation Curves to define how a raw value (e.g., 'Health') maps to a utility score, enabling non-linear decision logic."
                }
            ],

            techStack: ["Unity", "C#", "ScriptableObjects"],

            statsTitle: "Stats",
            statsBoxStyle: "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20",
            stats: [
                { label: "Duration", value: "2 Months" },
                { label: "Type", value: "Open Source Tool" }
            ],

            links: []
        }
    },

    {
        slug: "dungeon-gen",

        card: {
            fallbackIcon: "layers",
            title: "Procedural Dungeon Gen",
            description: "Algorithm for generating infinite dungeon layouts with room templates and corridor logic.",
            actions: [
                { label: "Read Paper", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
            ]
        },

        page: {
            heroIcon: "grid",
            heroIconColor: "text-pink-500",
            title: "3D Dungeon Generator",
            subtitle: "Wave Function Collapse",
            heroAction: { icon: "eye", label: "View Results", url: "#", style: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600" },
            bannerIcon: "box",

            overview: [
                "A 3D implementation of the Wave Function Collapse (WFC) algorithm, used to generate coherent dungeon layouts from a set of modular prefabs.",
                "The algorithm operates by superimposing all possible states for each grid cell and iteratively collapsing them based on adjacency rules (constraints) until a single stable state remains. This ensures that corridors always connect to corridors, and doors never open into solid walls."
            ],

            features: [
                {
                    title: "Backtracking Support",
                    description: "Implemented a backtracking mechanism to resolve contradictions during the collapse process, ensuring 100% completion rate for generated levels."
                },
                {
                    title: "Constraint Editor",
                    description: "A user-friendly editor interface to define adjacency rules between different tile types (e.g., Corner, Hallway, T-Junction)."
                }
            ],

            techStack: ["C#", "Unity", "Algorithmic"],

            statsTitle: "Stats",
            statsBoxStyle: "bg-gradient-to-br from-pink-900/20 to-red-900/20 border-pink-500/20",
            stats: [
                { label: "Duration", value: "1 Month" },
                { label: "Type", value: "Algorithm Demo" }
            ],

            links: []
        }
    }
];

// --- Card Template (uses project.card.*) ---

function projectCardTemplate(project, index) {
    const card = project.card;
    let heroHTML = "";

    if (card.heroType === "model-viewer") {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden">
                <model-viewer src="${card.modelSrc}" alt="${card.modelAlt}"
                    animation-name="${card.modelAnimation}" autoplay camera-controls interaction-prompt="none" shadow-intensity="1"
                    class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></model-viewer>
            </div>`;
    } else if (card.coverImage) {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0">
                    <img src="${card.coverImage}" alt="${card.title} cover"
                         class="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black/30"></div>
                </div>
                ${card.badge ? `<div class="absolute top-4 right-4 ${card.badgeStyle} px-2 py-1 rounded text-xs font-mono z-10">${card.badge}</div>` : ''}
            </div>`;
    } else {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <i data-lucide="${card.fallbackIcon}"
                   class="w-20 h-20 text-indigo-500 group-hover:rotate-180 transition-transform duration-700"></i>
            </div>`;
    }

    const actionTags = card.actions.map(a =>
        `<span class="${a.style}">${a.label}</span>`
    ).join("");

    return `
        <a href="projects/detail.html?slug=${project.slug}"
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 reveal delay-${(index + 1) * 100}">
            ${heroHTML}
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    ${card.title}
                </h3>
                <p class="text-slate-400 text-sm mb-4">
                    ${card.description}
                </p>
                <div class="flex gap-2">
                    ${actionTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("projects-grid", projectsData, projectCardTemplate);
