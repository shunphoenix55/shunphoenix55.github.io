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
        slug: "global-game-jam",

        card: {
            coverImage: "assets/covers/global-game-jam.jpg",
            fallbackIcon: "trophy",
            fallbackIconColor: "text-yellow-500",
            hasOverlay: true,
            overlayColor: "bg-yellow-500/10",
            title: "Global Game Jam 2024",
            award: "1st Place - Innovation",
            awardStyle: "text-cyan-400 font-mono text-sm bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30",
            projectName: 'Project: "Echoes of Time"',
            description: "Built a VR puzzle game where players manipulate time to solve physics-based challenges. Used Unity's new Input System and XR Interaction Toolkit.",
            actions: [
                { icon: "github", label: "Repo", style: "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors" },
                { icon: "play-circle", label: "Watch Gameplay", style: "flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors" }
            ]
        },

        page: {
            heroIcon: "trophy",
            heroIconColor: "text-yellow-500",
            title: "Global Game Jam 2024",
            subtitle: 'Theme: "Make Me Laugh"',
            award: "Best Visuals Award",
            awardStyle: "px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-lg font-bold",
            bannerIcon: "gamepad-2",

            overview: [
                "\"Clown Chaos\" is a physics-based party game created in 48 hours for the Global Game Jam 2024. Players control unicycle-riding clowns attempting to perform circus acts while dodging tomatoes thrown by the audience.",
                "My role was lead programmer, responsible for the character controller and the tomato-throwing AI. The game's ragdoll physics and vibrant art style earned us the \"Best Visuals\" award at our local jamming site."
            ],

            achievements: [
                {
                    title: "48-Hour Turnaround",
                    description: "Delivered a fully playable, bug-free build within the strict time limit."
                },
                {
                    title: "Ragdoll Physics",
                    description: "Implemented active ragdoll physics that blended animation with simulated physics for hilarious results."
                }
            ],

            techStack: ["Unity", "C#"],

            statsTitle: "Stats",
            statsBoxStyle: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20",
            stats: [
                { label: "Team Size", value: "4 People" },
                { label: "Result", value: "Best Visuals" }
            ],

            links: [
                { icon: "external-link", label: "Playing Itch.io", url: "#" }
            ]
        }
    },

    {
        slug: "ludum-dare",

        card: {
            coverImage: "",
            fallbackIcon: "code",
            fallbackIconColor: "text-purple-500",
            hasOverlay: false,
            title: "Ludum Dare 53",
            award: "Top 100 Graphics",
            awardStyle: "text-slate-400 font-mono text-sm bg-slate-700/50 px-3 py-1 rounded-full",
            projectName: 'Project: "Delivery Boi"',
            description: "A wacky physics delivery game. Responsible for chaotic vehicle physics and cel-shaded art direction.",
            actions: [
                { icon: "globe", label: "Itch.io Page", style: "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors" }
            ]
        },

        page: {
            heroIcon: "clock",
            heroIconColor: "text-orange-500",
            title: "Ludum Dare 53",
            subtitle: 'Theme: "Delivery"',
            award: "",
            bannerIcon: "box",

            overview: [
                "\"Pizza Panzer\" is a chaotic arcade game where you drive a tank to deliver pizzas across a war-torn battlefield. This project was developed solo in 72 hours for the \"Compo\" category of Ludum Dare 53.",
                "The core mechanic involves balancing speed with the structural integrity of the pizza tower on your roof. Driving too fast over bumpy terrain causes pizzas to fly off!"
            ],

            achievements: [
                {
                    title: "Custom Vehicle Physics",
                    description: "Wrote a raycast-based suspension system from scratch to give the tank a \"bouncy\" arcade feel compared to standard Unity wheel colliders."
                }
            ],

            techStack: ["Unity", "Aseprite"],

            statsTitle: "Stats",
            statsBoxStyle: "bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/20",
            stats: [
                { label: "Team Size", value: "Solo" },
                { label: "Result", value: "Top 100 Humor" }
            ],

            links: [
                { icon: "external-link", label: "Ludum Dare Page", url: "#" }
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
