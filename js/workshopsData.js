/**
 * Workshops — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const workshopsData = [
    {
        slug: "shader-intro",

        card: {
            coverImage: "assets/covers/shader-intro.jpg",
            fallbackIcon: "presentation",
            iconBg: "bg-cyan-900/30",
            iconColor: "text-cyan-400",
            title: "Introduction to Shaders in Unity",
            date: "March 2024",
            role: "Speaker @ GameDev University Club",
            description: "Conducted a 2-hour hands-on workshop teaching 50+ students how to write basic HLSL shaders and use Shader Graph to create dissolve effects."
        },

        page: {
            heroIcon: "presentation",
            heroIconColor: "text-indigo-500",
            title: "Intro to Shader Graph",
            subtitle: "Technical Art Workshop",
            bannerIcon: "palette",

            overview: [
                "A comprehensive 2-hour interactive workshop designed to demystify shader development for students and beginner game developers. The session focused on using Unity's Shader Graph to create visually stunning effects without writing a single line of HLSL code.",
                "Attendees learned core concepts like UV manipulation, vertex displacement, and PBR properties by building a \"Holographic Shield\" effect from scratch."
            ],

            highlights: [
                {
                    title: "Visual Scripting Logic",
                    description: "Explained the math behind common nodes (Sine, Lerp, Step) using visual analogies."
                },
                {
                    title: "Hands-on Lab",
                    description: "Guided 30+ participants through creating their own custom dissolve shader."
                }
            ],

            detailsTitle: "Details",
            details: [
                { label: "Date", value: "Oct 2023" },
                { label: "Audience", value: "University Game Dev Club" },
                { label: "Role", value: "Speaker / Instructor" }
            ],

            resourcesBoxStyle: "bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border-indigo-500/20",
            resources: [
                { icon: "file-text", label: "Presentation Slides", url: "#" },
                { icon: "github", label: "Sample Project Repo", url: "#" }
            ]
        }
    },

    {
        slug: "webxr",

        card: {
            coverImage: "",
            fallbackIcon: "users",
            iconBg: "bg-purple-900/30",
            iconColor: "text-purple-400",
            title: "The Future of WebXR",
            date: "November 2023",
            role: "Attendee @ XR Summit",
            description: "Participated in deep-dive sessions regarding WebGPU and upcoming browser standards for high-performance graphics on the web."
        },

        page: {
            heroIcon: "presentation",
            heroIconColor: "text-cyan-500",
            title: "WebXR Development",
            subtitle: "Building for the Immersive Web",
            bannerIcon: "globe",

            overview: [
                "A seminar exploring the capabilities of the WebXR Device API. This talk covered the current state of browser-based VR/AR, optimizing 3D assets for the web using glTF, and deploying experiences using Three.js and A-Frame."
            ],

            highlights: [
                {
                    title: "Framework Comparison",
                    description: "Three.js vs A-Frame vs Babylon.js - choosing the right tool for the job."
                },
                {
                    title: "Performance Optimization",
                    description: "Techniques for maintaining 90fps in the browser, including geometry instancing and texture compression."
                }
            ],

            detailsTitle: "Details",
            details: [
                { label: "Date", value: "March 2023" },
                { label: "Audience", value: "Web Dev Meetup" },
                { label: "Role", value: "Guest Speaker" }
            ],

            resourcesBoxStyle: "bg-gradient-to-br from-cyan-900/20 to-teal-900/20 border-cyan-500/20",
            resources: [
                { icon: "file-text", label: "Presentation Slides", url: "#" }
            ]
        }
    }
];

// --- Card Template (uses ws.card.*) ---

function workshopCardTemplate(ws, index) {
    const card = ws.card;

    const sidebarContent = card.coverImage
        ? `
            <div class="w-16 h-16 rounded-lg overflow-hidden hidden sm:block flex-shrink-0">
                <img src="${card.coverImage}" alt="${card.title} cover"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy">
            </div>
          `
        : `
            <div class="${card.iconBg} p-3 rounded-lg ${card.iconColor} hidden sm:block">
                <i data-lucide="${card.fallbackIcon}" class="w-8 h-8 group-hover:scale-110 transition-transform"></i>
            </div>
          `;

    return `
        <a href="workshops/detail.html?slug=${ws.slug}"
           class="block bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} items-start flex gap-4 group">
            ${sidebarContent}
            <div class="w-full">
                <div class="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        ${card.title}</h3>
                    <span class="text-slate-500 text-sm">${card.date}</span>
                </div>
                <p class="text-indigo-400 text-sm mb-2">${card.role}</p>
                <p class="text-slate-400 mb-3">${card.description}</p>
                <div class="text-cyan-500 group-hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
                    View Details <i data-lucide="arrow-right"
                        class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i></div>
            </div>
        </a>
    `;
}

registerCards("workshops-grid", workshopsData, workshopCardTemplate);
