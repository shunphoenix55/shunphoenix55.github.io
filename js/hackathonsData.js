/**
 * Hackathons — Data + Card Template
 */

const hackathonsData = [
    {
        link: "hackathons/global-game-jam.html",
        icon: "trophy",
        iconColor: "text-yellow-500",
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
    {
        link: "hackathons/ludum-dare.html",
        icon: "code",
        iconColor: "text-purple-500",
        hasOverlay: false,
        title: "Ludum Dare 53",
        award: "Top 100 Graphics",
        awardStyle: "text-slate-400 font-mono text-sm bg-slate-700/50 px-3 py-1 rounded-full",
        projectName: 'Project: "Delivery Boi"',
        description: "A wacky physics delivery game. Responsible for chaotic vehicle physics and cel-shaded art direction.",
        actions: [
            { icon: "globe", label: "Itch.io Page", style: "flex items-center gap-2 text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors" }
        ]
    }
];

function hackathonCardTemplate(hack, index) {
    const overlayHTML = hack.hasOverlay
        ? `<div class="absolute inset-0 ${hack.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity"></div>`
        : "";

    const actionTags = hack.actions.map(a =>
        `<span class="${a.style}">
            <i data-lucide="${a.icon}" class="w-4 h-4"></i> ${a.label}
        </span>`
    ).join("");

    return `
        <a href="${hack.link}"
           class="block bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} flex flex-col md:flex-row gap-6 items-center group">
            <div class="w-full md:w-1/3 aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center relative">
                <i data-lucide="${hack.icon}" class="w-16 h-16 ${hack.iconColor}"></i>
                ${overlayHTML}
            </div>
            <div class="flex-1 text-center md:text-left">
                <div class="flex flex-col md:flex-row justify-between items-center mb-2">
                    <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        ${hack.title}</h3>
                    <span class="${hack.awardStyle}">${hack.award}</span>
                </div>
                <h4 class="text-lg text-indigo-400 mb-4">${hack.projectName}</h4>
                <p class="text-slate-400 mb-6">${hack.description}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4">
                    ${actionTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("hackathons-grid", hackathonsData, hackathonCardTemplate);
