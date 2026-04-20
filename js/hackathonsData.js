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
    "slug": "metasoccer",

    "card": {
        "coverImage": "",
        "fallbackIcon": "gamepad-2",
        "fallbackIconColor": "text-cyan-500",
        "hasOverlay": true,
        "overlayColor": "bg-cyan-500/10",
        "title": "ArtCade (SFMOMA)",
        "award": "Semi-Finalist",
        "awardStyle": "text-cyan-400 font-mono text-sm bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30",
        "projectName": "Project: \"MetaSoccer\"",
        "description": "Designed an interactive soccer simulation concept where players dynamically modify game rules and observe emergent AI-driven behaviors.",
        "actions": [
            {
                "icon": "image",
                "label": "View Concept",
                "style": "flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "gamepad-2",
        "heroIconColor": "text-cyan-500",
        "title": "MetaSoccer",
        "subtitle": "Interactive Game Design Concept",
        "award": "SFMOMA ArtCade - Semi-Finalist",
        "awardStyle": "px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg font-bold",
        "bannerIcon": "sliders",

        "overview": [
            "MetaSoccer is an interactive soccer simulation concept designed for large touch-screen installations, where players can modify game rules in real time.",
            "The experience explores emergent gameplay by allowing users to tweak parameters such as field size, player count, ball physics, and rule sets.",
            "AI-driven players dynamically adapt their strategies based on the changing conditions, creating unpredictable and evolving outcomes.",
            "The project was proposed as part of SFMOMA’s ArtCade, which showcases interactive games in a museum setting.",
            "This work focused purely on game design, systems thinking, and interaction design, without implementation or programming."
        ],

        "achievements": [
            {
                "title": "ArtCade Recognition",
                "description": "Selected as a semi-finalist for SFMOMA’s ArtCade, highlighting the project's innovation in interactive game design."
            },
            {
                "title": "Systems-Driven Design",
                "description": "Designed a rule-modification framework enabling players to explore and break conventional limits of sports simulations."
            },
            {
                "title": "Interactive Experience Design",
                "description": "Conceptualized intuitive UI interactions using sliders, toggles, and buttons for real-time control over simulation parameters."
            }
        ],

        "techStack": ["Game Design", "Systems Design", "Interaction Design"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-cyan-900/20 to-sky-900/20 border-cyan-500/20",
        "stats": [
            { "label": "Event", "value": "SFMOMA ArtCade" },
            { "label": "Location", "value": "Vellore, Tamil Nadu" },
            { "label": "Project Type", "value": "Game Design" },
            { "label": "Role", "value": "Game Designer" }
        ],

        "links": [
            { "icon": "image", "label": "SFMOMA Website", "url": "https://www.sfmoma.org/exhibition/artcade/" }
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
},
{
    "slug": "drone-assembly-xr",

    "card": {
        "coverImage": "",
        "fallbackIcon": "cpu",
        "fallbackIconColor": "text-blue-500",
        "hasOverlay": true,
        "overlayColor": "bg-blue-500/10",
        "title": "Yantra '23",
        "award": "3rd Place Winner",
        "awardStyle": "text-blue-400 font-mono text-sm bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30",
        "projectName": "Project: \"3Ducation - Drone Assembly\"",
        "description": "Developed a VR-based educational application teaching users how to assemble drones and mechanical components through interactive 3D guidance.",
        "actions": [
            {
                "icon": "play-circle",
                "label": "View Project",
                "style": "flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            },
            {
                "icon": "github",
                "label": "Source Code",
                "style": "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "cpu",
        "heroIconColor": "text-blue-500",
        "title": "Drone Assembly - 3Ducation",
        "subtitle": "XR-Based Hardware Learning Experience",
        "award": "Yantra '23 - 3rd Place",
        "awardStyle": "px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg font-bold",
        "bannerIcon": "box",

        "overview": [
            "3Ducation is a virtual reality application designed to teach users how to assemble complex hardware systems such as drones and mechanical components.",
            "The project leverages immersive XR environments to guide users step-by-step through assembly processes, improving comprehension and engagement.",
            "Developed during Yantra '23 in Vellore, focusing on practical learning through interactive 3D visualization.",
            "Built for Meta Quest 2 using Unity, emphasizing intuitive interaction and real-time feedback."
        ],

        "achievements": [
            {
                "title": "Competition Recognition",
                "description": "Secured 3rd place at Yantra '23 for innovation in educational XR applications."
            },
            {
                "title": "Interactive Learning System",
                "description": "Designed a guided assembly workflow enabling users to understand complex hardware structures in VR."
            },
            {
                "title": "XR Implementation",
                "description": "Developed core VR interactions using Unity XR Interaction Toolkit for seamless object manipulation and user input."
            }
        ],

        "techStack": ["Unity", "C#", "XR Development", "XR Interaction Toolkit", "VR"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
        "stats": [
            { "label": "Event", "value": "Yantra '23" },
            { "label": "Location", "value": "Vellore, India" },
            { "label": "Platform", "value": "Meta Quest 2" },
            { "label": "Role", "value": "Unity XR Developer" }
        ],

        "links": [
            { "icon": "play", "label": "View Project", "url": "" },
            { "icon": "image", "label": "Project Page", "url": "" },
            { "icon": "github", "label": "GitHub Repository", "url": "" }
        ]
    }
},
{
    "slug": "devsoc-2023",

    "card": {
        "coverImage": "",
        "fallbackIcon": "users",
        "fallbackIconColor": "text-orange-500",
        "hasOverlay": true,
        "overlayColor": "bg-orange-500/10",
        "title": "DEVSOC '23",
        "award": "Coordinator",
        "awardStyle": "text-orange-400 font-mono text-sm bg-orange-900/30 px-3 py-1 rounded-full border border-orange-500/30",
        "projectName": "Role: \"XR & Game Dev Mentor\"",
        "description": "Served as a coordinator and mentor for XR and Game Development tracks at one of South Asia’s largest student-run hackathons.",
        "actions": [
            {
                "icon": "users",
                "label": "View Event",
                "style": "flex items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "users",
        "heroIconColor": "text-orange-500",
        "title": "DEVSOC '23",
        "subtitle": "South Asia’s Largest Student-Run Hackathon",
        "award": "Coordinator & Mentor",
        "awardStyle": "px-4 py-2 bg-orange-500/20 text-orange-400 border border-orange-500/50 rounded-lg font-bold",
        "bannerIcon": "trophy",

        "overview": [
            "DEVSOC '23 is CodeChef-VIT’s flagship hackathon and one of South Asia’s largest student-run technical events, with over 1300 participants.",
            "Participants competed across multiple tracks including AR/VR, Blockchain, Open Innovation, Social Good, Automation Tools, Health & Welfare, and 5G.",
            "The event featured a prize pool of ₹3,00,000 and attracted diverse projects from across the region.",
            "Served as a coordinator, focusing on XR and Game Development domains."
        ],

        "achievements": [
            {
                "title": "Mentorship & Evaluation",
                "description": "Reviewed and mentored XR and Game Development projects, providing technical guidance and feedback to participants."
            },
            {
                "title": "Event Coordination",
                "description": "Contributed to organizing and managing one of the largest student-run hackathons in South Asia."
            },
            {
                "title": "Technical Leadership",
                "description": "Supported participants in problem-solving, design decisions, and implementation strategies in XR and game development."
            }
        ],

        "techStack": ["XR Development", "Game Development", "Mentorship", "Technical Review"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-orange-900/20 to-amber-900/20 border-orange-500/20",
        "stats": [
            { "label": "Event", "value": "DEVSOC '23" },
            { "label": "Location", "value": "Vellore, Tamil Nadu" },
            { "label": "Participants", "value": "1300+" },
            { "label": "Role", "value": "Coordinator & Mentor" }
        ],

        "links": [
            { "icon": "users", "label": "View Event", "url": "https://www.devsoc.codechefvit.com" }
        ]
    }
},
{
    "slug": "rcade",

    "card": {
        "coverImage": "",
        "fallbackIcon": "activity",
        "fallbackIconColor": "text-green-500",
        "hasOverlay": true,
        "overlayColor": "bg-green-500/10",
        "title": "WomenTechies '23",
        "award": "2nd Place Winner",
        "awardStyle": "text-green-400 font-mono text-sm bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30",
        "projectName": "Project: \"RCade\"",
        "description": "Developed a gamified fitness application that recommends exercises to manage body pain, integrating real-time body tracking for interactive engagement.",
        "actions": [
            {
                "icon": "play-circle",
                "label": "View Project",
                "style": "flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            },
            {
                "icon": "github",
                "label": "Source Code",
                "style": "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "activity",
        "heroIconColor": "text-green-500",
        "title": "RCade",
        "subtitle": "Gamified Exercise & Rehabilitation Application",
        "award": "WomenTechies '23 - 2nd Place",
        "awardStyle": "px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg font-bold",
        "bannerIcon": "heart-pulse",

        "overview": [
            "RCade is a Unity-based application designed to recommend exercises for managing common body pains through an engaging, gamified experience.",
            "The platform enhances user motivation by incorporating game mechanics into exercise routines, encouraging consistency and adherence.",
            "Built during WomenTechies '23 in Vellore, focusing on accessible and interactive health solutions.",
            "Integrated real-time body tracking to provide feedback and ensure correct exercise execution."
        ],

        "achievements": [
            {
                "title": "Competition Recognition",
                "description": "Secured 2nd place at WomenTechies '23 for innovation in gamified health applications."
            },
            {
                "title": "Body Tracking Integration",
                "description": "Implemented real-time body tracking using MediaPipe to monitor user movements and provide feedback."
            },
            {
                "title": "Game Systems & UI",
                "description": "Designed core gameplay systems and programmed UI/UX interactions to enhance usability and engagement."
            }
        ],

        "techStack": ["Unity", "C#", "MediaPipe", "Game Development", "UI/UX"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20",
        "stats": [
            { "label": "Event", "value": "WomenTechies '23" },
            { "label": "Location", "value": "Vellore, India" },
            { "label": "Project Type", "value": "Programming" },
            { "label": "Role", "value": "Unity Developer" }
        ],

        "links": [
            { "icon": "play", "label": "View Project", "url": "" },
            { "icon": "image", "label": "Project Page", "url": "" },
            { "icon": "github", "label": "GitHub Repository", "url": "" }
        ]
    }
},
{
    "slug": "groupiee",

    "card": {
        "coverImage": "",
        "fallbackIcon": "users",
        "fallbackIconColor": "text-purple-500",
        "hasOverlay": true,
        "overlayColor": "bg-purple-500/10",
        "title": "DevJams '21",
        "award": "Finalist",
        "awardStyle": "text-purple-400 font-mono text-sm bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30",
        "projectName": "Project: \"Groupiee\"",
        "description": "Built a travel matchmaking platform that connects users with similar interests and locations to collaboratively plan trips.",
        "actions": [
            {
                "icon": "github",
                "label": "Source Code",
                "style": "flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
            }
        ]
    },

    "page": {
        "heroIcon": "users",
        "heroIconColor": "text-purple-500",
        "title": "Groupiee",
        "subtitle": "Social Travel Planning Platform",
        "award": "DevJams '21 - Finalist",
        "awardStyle": "px-4 py-2 bg-purple-500/20 text-purple-400 border border-purple-500/50 rounded-lg font-bold",
        "bannerIcon": "map",

        "overview": [
            "Groupiee is a web platform that connects users with similar interests and geographic proximity to collaboratively plan trips.",
            "The platform streamlines group travel by matching compatible users and enabling coordinated trip planning.",
            "Developed during DevJams '21 as a remote hackathon project, focusing on social discovery and travel organization."
        ],

        "achievements": [
            {
                "title": "Hackathon Recognition",
                "description": "Selected as a finalist at DevJams '21."
            },
            {
                "title": "Backend Architecture",
                "description": "Designed and implemented the complete backend using Flask, enabling scalable API development."
            },
            {
                "title": "Database Integration",
                "description": "Built and integrated a MongoDB database to manage user data, matching logic, and trip information."
            }
        ],

        "techStack": ["Python", "Flask", "MongoDB", "Backend Development"],

        "statsTitle": "Stats",
        "statsBoxStyle": "bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border-purple-500/20",
        "stats": [
            { "label": "Event", "value": "DevJams '21" },
            { "label": "Location", "value": "Remote" },
            { "label": "Project Type", "value": "Web Development" },
            { "label": "Role", "value": "Backend Developer" }
        ],

        "links": [
            { "icon": "github", "label": "GitHub Repository", "url": "https://github.com/shunphoenix55/Groupiee-DevJams21-GDSC" }
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
