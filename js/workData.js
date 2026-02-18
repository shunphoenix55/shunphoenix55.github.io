/**
 * Work Experience — Data + Card Template
 */

const workExperience = [
    {
        link: "work/immersive-tech.html",
        icon: "briefcase",
        iconColor: "text-cyan-500",
        duration: "2023 - Present",
        durationStyle: "bg-cyan-900/50 text-cyan-300",
        title: "VR Developer",
        company: "Immersive Tech Studios",
        description: "Leading the development of a multiplayer VR training simulation for healthcare professionals. Optimizing for Quest 2/3.",
        tech: ["Unity", "Photon Fusion", "Oculus SDK"]
    },
    {
        link: "work/indie-game.html",
        icon: "gamepad-2",
        iconColor: "text-purple-500",
        duration: "2022 - 2023",
        durationStyle: "bg-slate-700/50 text-slate-300",
        title: "Gameplay Programmer",
        company: "Indie Game Collective",
        description: "Implemented core gameplay mechanics for a narrative-driven platformer. Collaborated with artists to integrate animations.",
        tech: ["Unreal Engine 5", "C++", "Blueprints"]
    },
    {
        link: "work/tech-giant.html",
        icon: "code-2",
        iconColor: "text-pink-500",
        duration: "2021 (Intern)",
        durationStyle: "bg-slate-700/50 text-slate-300",
        title: "Software Engineer Intern",
        company: "Tech giant Corp",
        description: "Worked on backend services for cloud gaming infrastructure. Reduced latency by optimizing data packets.",
        tech: ["Python", "AWS", "Docker"]
    }
];

function workCardTemplate(job, index) {
    const techTags = job.tech.map(t =>
        `<span class="text-xs bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-400">${t}</span>`
    ).join("");

    return `
        <a href="${job.link}"
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 reveal delay-${(index + 1) * 100}">
            <div class="h-card-3d bg-slate-900 relative flex items-center justify-center p-8">
                <i data-lucide="${job.icon}"
                   class="w-16 h-16 ${job.iconColor} group-hover:scale-110 transition-transform"></i>
                <div class="absolute top-4 right-4 ${job.durationStyle} backdrop-blur px-2 py-1 rounded text-xs font-mono">
                    ${job.duration}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                    ${job.title}
                </h3>
                <p class="text-indigo-400 font-medium mb-3">
                    ${job.company}
                </p>
                <p class="text-slate-400 text-sm mb-4">
                    ${job.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${techTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("work-grid", workExperience, workCardTemplate);
