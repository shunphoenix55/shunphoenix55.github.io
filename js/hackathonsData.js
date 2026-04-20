/**
 * Hackathons — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const hackathonsData = [
    {
    slug: "global-game-jam-2025",

    card: {
        coverImage: "assets/covers/global-game-jam.jpg",
        fallbackIcon: "trophy",
        fallbackIconColor: "text-yellow-500",
        hasOverlay: true,
        overlayColor: "bg-yellow-500/10",
        title: "Global Game Jam 2025",
        award: "Game Jam Project",
        awardStyle: "text-pink-400 font-mono text-sm bg-pink-900/30 px-3 py-1 rounded-full border border-pink-500/30",
        projectName: 'Project: "Bubbleoidvania"',
        description: "Developed a 2D platformer with a versatile bubble mechanic during Global Game Jam 2025, enabling players to shield, glide, and roll through challenging levels.",
        actions: [
            { icon: "play-circle", label: "Play Game", style: "flex items-center gap-2 text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors" },
            { icon: "github", label: "Source Code", style: "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors" }
        ]
    },

    page: {
        heroIcon: "trophy",
        heroIconColor: "text-pink-500",
        title: "Global Game Jam 2025",
        subtitle: "48-Hour International Game Development Event",
        award: "Featured Project: Bubbleoidvania",
        awardStyle: "px-4 py-2 bg-pink-500/20 text-pink-400 border border-pink-500/50 rounded-lg font-bold",
        bannerIcon: "gamepad-2",

        overview: [
            "Global Game Jam is the world’s largest game creation event, where developers across the globe collaborate to build games within a strict 48-hour timeframe based on a shared theme.",
            "As part of Global Game Jam 2025, developed \"Bubbleoidvania\", a fast-paced 2D platformer centered around a dynamic bubble mechanic that enhances movement and survival.",
            "The project was built at the Bangalore Keywords Studios site, emphasizing rapid prototyping, teamwork, and creative problem-solving under time constraints."
        ],

        achievements: [
            {
                title: "Innovative Core Mechanic",
                description: "Designed a multi-functional bubble system enabling shielding, gliding, and rolling, forming the foundation of gameplay."
            },
            {
                title: "48-Hour Delivery",
                description: "Successfully developed a complete and playable game within the limited jam duration."
            },
            {
                title: "Cross-Platform Deployment",
                description: "Delivered a build playable across Web, Windows, Mac, and Linux platforms."
            }
        ],

        techStack: ["Unity", "C#", ".NET", "2D Game Development"],

        statsTitle: "Stats",
        statsBoxStyle: "bg-gradient-to-br from-pink-900/20 to-rose-900/20 border-pink-500/20",
        stats: [
            { label: "Event", value: "Global Game Jam 2025" },
            { label: "Location", value: "Bangalore Keywords Studios" },
            { label: "Team Size", value: "5 Developers" },
            { label: "Genre", value: "2D Platformer" },
            { label: "Platform", value: "Web / PC / Mac / Linux" }
        ],

        links: [
            { icon: "play", label: "Play Online", url: "https://play.unity.com/en/games/ff55b6c0-5ecb-4660-828c-7fc7eee4d6ec/bubbleoidvania" },
            { icon: "image", label: "Project Page", url: "/projects/detail.html?slug=bubbleoidvania" },
            { icon: "github", label: "GitHub Repository", url: "https://github.com/devslayer8/GGJ_2025" }
        ]
    }
},
    {
    slug: "wtfxigdc-2024",

    card: {
        coverImage: "assets/covers/clink.jpg",
        fallbackIcon: "code",
        fallbackIconColor: "text-yellow-500",
        hasOverlay: false,
        title: "WTFxIGDC Game Jam 2024",
        award: "Game Jam Project",
        awardStyle: "text-slate-400 font-mono text-sm bg-slate-700/50 px-3 py-1 rounded-full",
        projectName: 'Project: "Clink!"',
        description: "A puzzle platformer featuring a chain-based character with resource-driven movement and dual-ended control mechanics.",
        actions: [
            { icon: "globe", label: "Itch.io Page", style: "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors" }
        ]
    },

    page: {
        heroIcon: "link",
        heroIconColor: "text-yellow-500",
        title: "WTFxIGDC Game Jam 2024",
        subtitle: 'Theme: "Chain Reaction"',
        award: "",
        bannerIcon: "link",

        overview: [
            "Participated in the WTFxIGDC Game Jam 2024, a rapid game development event focused on building innovative games around a central theme within a limited timeframe.",
            "Developed 'Clink!', a puzzle platformer centered on a snake made of chain links, introducing a unique mechanic where movement consumes resources.",
            "The game emphasizes strategic decision-making, physics-based interaction, and creative puzzle-solving using dual-ended control."
        ],

        achievements: [
            {
                title: "Chain-Based Movement System",
                description: "Each jump consumes a chain link, forcing players to balance progression with resource management."
            },
            {
                title: "Dual-End Control Mechanic",
                description: "Switch control between the snake’s head and tail to approach puzzles from different perspectives and interactions."
            },
            {
                title: "Physics-Based Grabbing",
                description: "Latch onto hooks, crates, and environmental elements using either end of the chain to navigate levels."
            },
            {
                title: "Elemental Chain Abilities",
                description: "Special chain types interact with specific obstacles, adding variety and depth to puzzle-solving."
            },
            {
                title: "Hazard Interaction",
                description: "Environmental dangers like spikes can break your chain, dynamically altering your state and strategy."
            }
        ],

        techStack: ["Unity", "C#", "2D Physics", "Game Design Systems"],

        statsTitle: "Stats",
        statsBoxStyle: "bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500/20",
        stats: [
            { label: "Event", value: "WTFxIGDC Game Jam 2024" },
            { label: "Theme", value: "Chain Reaction" },
            { label: "Project", value: "Clink!" },
            { label: "Genre", value: "Puzzle Platformer" },
            { label: "Platform", value: "Web (WebGL)" }
        ],

        links: [
            {icon: "image", label: "Project Page", url: "/projects/detail.html?slug=clink" },
            { icon: "external-link", label: "Itch.io Page", url: "https://dasaniket15.itch.io/clink" },
        ]
    }
},
{
    "slug": "bhasha-xr",

    "card": {
        "coverImage": "",
        "fallbackIcon": "award",
        "fallbackIconColor": "text-yellow-500",
        "hasOverlay": true,
        "overlayColor": "bg-yellow-500/10",
        "title": "Yantra '24",
        "award": "Best UI/UX & Best in Education",
        "awardStyle": "text-yellow-400 font-mono text-sm bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-500/30",
        "projectName": "Project: \"BhashaXR\"",
        "description": "Developed a VR-based language learning platform focused on Indian languages, featuring AI-driven personalization and immersive interaction systems.",
        "actions": [
            {
                "icon": "play-circle",
                "label": "View Project",
                "style": "flex items-center gap-2 text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition-colors"
            },
            {
                "icon": "github",
                "label": "Source Code",
                "style": "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "award",
        "heroIconColor": "text-yellow-500",
        "title": "Yantra '24 Winning Project",
        "subtitle": "VR Language Learning Platform",
        "award": "Winner: Best UI/UX & Best in Education",
        "awardStyle": "px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-lg font-bold",
        "bannerIcon": "languages",

        "overview": [
            "BhashaXR is a virtual reality language learning platform designed to provide an immersive and natural approach to acquiring new languages.",
            "The project focuses on Indian languages, addressing their underrepresentation in mainstream language learning applications.",
            "An AI-driven system analyzes user responses and adapts learning recommendations, enabling a personalized learning experience.",
            "Developed for Meta Quest 3, emphasizing intuitive interaction and real-time feedback within a VR environment."
        ],

        "achievements": [
            {
                "title": "Award-Winning Design",
                "description": "Recognized at Yantra '24 with awards for Best UI/UX and Best in Education."
            },
            {
                "title": "AI-Powered Personalization",
                "description": "Integrated backend AI models to analyze voice input and tailor learning recommendations dynamically."
            },
            {
                "title": "Advanced XR Interaction",
                "description": "Implemented hand tracking and gesture-based interactions using Meta Interaction SDK for immersive user experience."
            }
        ],

        "techStack": ["Unity", "C#", "XR Development", "Meta Interaction SDK", "AI Integration"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500/20",
        "stats": [
            { "label": "Event", "value": "Yantra '24" },
            { "label": "Category", "value": "Education / XR" },
            { "label": "Platform", "value": "Meta Quest 3" },
            { "label": "Role", "value": "Unity XR Developer" }
        ],

        "links": [
            { "icon": "image", "label": "Project Page", "url": "/projects/detail.html?slug=bhashaxr" },
        ]
    }
}
];

// --- Card Template (uses hack.card.*) ---

function hackathonCardTemplate(hack, index) {
    const card = hack.card;

    const overlayHTML = card.hasOverlay
        ? `<div class="absolute inset-0 ${card.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity"></div>`
        : "";

    const mediaContent = card.coverImage
        ? `
            <img src="${card.coverImage}" alt="${card.title} cover"
                 class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 loading="lazy">
            <div class="absolute inset-0 bg-black/40"></div>
          `
        : `
            <i data-lucide="${card.fallbackIcon}" class="w-16 h-16 ${card.fallbackIconColor}"></i>
            ${overlayHTML}
          `;

    const actionTags = card.actions.map(a =>
        `<span class="${a.style}">
            <i data-lucide="${a.icon}" class="w-4 h-4"></i> ${a.label}
        </span>`
    ).join("");

    return `
        <a href="hackathons/detail.html?slug=${hack.slug}"
           class="block bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} flex flex-col md:flex-row gap-6 items-center group">
            <div class="w-full md:w-1/3 aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center relative">
                ${mediaContent}
            </div>
            <div class="flex-1 text-center md:text-left">
                <div class="flex flex-col md:flex-row justify-between items-center mb-2">
                    <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        ${card.title}</h3>
                    <span class="${card.awardStyle}">${card.award}</span>
                </div>
                <h4 class="text-lg text-indigo-400 mb-4">${card.projectName}</h4>
                <p class="text-slate-400 mb-6">${card.description}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4">
                    ${actionTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("hackathons-grid", hackathonsData, hackathonCardTemplate);
