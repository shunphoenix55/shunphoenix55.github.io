/**
 * Workshops — Data + Card Template
 *
 * Each workshop supports an optional `coverImage` for the icon sidebar area.
 * Falls back to `fallbackIcon` (Lucide icon) when missing.
 */

const workshopsData = [
    {
        link: "workshops/shader-intro.html",
        coverImage: "assets/covers/shader-intro.jpg",
        fallbackIcon: "presentation",
        iconBg: "bg-cyan-900/30",
        iconColor: "text-cyan-400",
        title: "Introduction to Shaders in Unity",
        date: "March 2024",
        role: "Speaker @ GameDev University Club",
        description: "Conducted a 2-hour hands-on workshop teaching 50+ students how to write basic HLSL shaders and use Shader Graph to create dissolve effects."
    },
    {
        link: "workshops/webxr.html",
        coverImage: "",
        fallbackIcon: "users",
        iconBg: "bg-purple-900/30",
        iconColor: "text-purple-400",
        title: "The Future of WebXR",
        date: "November 2023",
        role: "Attendee @ XR Summit",
        description: "Participated in deep-dive sessions regarding WebGPU and upcoming browser standards for high-performance graphics on the web."
    }
];

function workshopCardTemplate(ws, index) {
    const sidebarContent = ws.coverImage
        ? `
            <div class="w-16 h-16 rounded-lg overflow-hidden hidden sm:block flex-shrink-0">
                <img src="${ws.coverImage}" alt="${ws.title} cover"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy">
            </div>
          `
        : `
            <div class="${ws.iconBg} p-3 rounded-lg ${ws.iconColor} hidden sm:block">
                <i data-lucide="${ws.fallbackIcon}" class="w-8 h-8 group-hover:scale-110 transition-transform"></i>
            </div>
          `;

    return `
        <a href="${ws.link}"
           class="block bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} items-start flex gap-4 group">
            ${sidebarContent}
            <div class="w-full">
                <div class="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        ${ws.title}</h3>
                    <span class="text-slate-500 text-sm">${ws.date}</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">${ws.role}</p>
                <p class="text-slate-400 mb-3">${ws.description}</p>
                <div class="text-cyan-500 group-hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
                    View Details <i data-lucide="arrow-right"
                        class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i></div>
            </div>
        </a>
    `;
}

registerCards("workshops-grid", workshopsData, workshopCardTemplate);
