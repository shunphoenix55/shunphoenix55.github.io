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
    slug: "devsoc-23",

    card: {
        coverImage: "",
        fallbackIcon: "trophy",
        iconBg: "bg-yellow-900/30",
        iconColor: "text-yellow-400",
        title: "DEVSOC '23",
        date: "May 2023",
        role: "Coordinator",
        description: "Reviewed and mentored XR and Game Development projects at South Asia’s largest student-run hackathon with 1300+ participants."
    },

    page: {
        heroIcon: "trophy",
        heroIconColor: "text-yellow-500",
        title: "DEVSOC '23",
        subtitle: "Hackathon",
        bannerIcon: "users",

        overview: [
            "Served as a coordinator for DEVSOC '23, CodeChef-VIT’s flagship hackathon and one of the largest student-run hackathons in South Asia.",
            "Contributed to the evaluation and mentorship of projects in the XR and Game Development tracks, supporting participants in building and refining their solutions."
        ],

        highlights: [
            {
                title: "Project Review & Mentorship",
                description: "Evaluated XR and Game Development submissions, providing technical guidance and feedback to participants."
            },
            {
                title: "Large-Scale Event Execution",
                description: "Helped manage and support a hackathon with 1300+ participants across multiple domains and a prize pool of ₹3 lakhs."
            },
            {
                title: "Multi-Domain Exposure",
                description: "Engaged with projects across diverse tracks including AR/VR, Blockchain, Social Good, Automation, Health, and 5G."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Date", value: "May 2023" },
            { label: "Role", value: "Coordinator" },
            { label: "Location", value: "Vellore, Tamil Nadu" },
            { label: "Participants", value: "1300+" }
        ],

        resourcesBoxStyle: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20",
        resources: [
            { icon: "globe", label: "Event Page", url: "https://www.devsoc.codechefvit.com" }
        ]
    }
},

    {
    slug: "beyond-reality-xr",

    card: {
        coverImage: "",
        fallbackIcon: "video",
        iconBg: "bg-indigo-900/30",
        iconColor: "text-indigo-400",
        title: "Beyond Reality: Exploring the World of XR",
        date: "May 2023",
        role: "Speaker",
        description: "Delivered a webinar introducing AR, VR, and MR concepts, covering fundamentals and real-world applications of immersive technologies."
    },

    page: {
        heroIcon: "video",
        heroIconColor: "text-indigo-500",
        title: "Beyond Reality: Exploring the World of XR",
        subtitle: "Webinar",
        bannerIcon: "globe",

        overview: [
            "Conducted an introductory webinar focused on Extended Reality (XR), covering the fundamentals of Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).",
            "Designed for beginners, the session provided clear conceptual explanations and explored how immersive technologies are applied across industries."
        ],

        highlights: [
            {
                title: "XR Fundamentals",
                description: "Explained the core differences and characteristics of AR, VR, and MR in a structured and accessible format."
            },
            {
                title: "Industry Applications",
                description: "Showcased real-world use cases of XR across domains such as gaming, healthcare, education, and simulation."
            },
            {
                title: "Beginner-Friendly Delivery",
                description: "Simplified complex concepts to make immersive technologies approachable for newcomers."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Date", value: "May 2023" },
            { label: "Format", value: "Webinar" },
            { label: "Platform", value: "YouTube" },
            { label: "Role", value: "Speaker" }
        ],

        resourcesBoxStyle: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20",
        resources: [
            { icon: "video", label: "Watch Recording", url: "https://www.youtube.com/watch?v=66vHCPDkxh0" }
        ]
    }
},
{
    slug: "blender-intro-workshop",

    card: {
        coverImage: "",
        fallbackIcon: "cube",
        iconBg: "bg-orange-900/30",
        iconColor: "text-orange-400",
        title: "Introduction to 3D Modelling using Blender",
        date: "Dec 2022",
        role: "Instructor",
        description: "Created and delivered a beginner-friendly workshop series teaching 3D asset creation and environment design in Blender."
    },

    page: {
        heroIcon: "cube",
        heroIconColor: "text-orange-500",
        title: "Introduction to 3D Modelling using Blender",
        subtitle: "Workshop",
        bannerIcon: "video",

        overview: [
            "Designed and delivered a structured video workshop series introducing beginners to 3D modelling for games using Blender.",
            "Focused on practical, hands-on learning by guiding participants through the complete creation of a game-ready indoor environment."
        ],

        highlights: [
            {
                title: "End-to-End Asset Creation",
                description: "Demonstrated how to model, arrange, and decorate a complete 3D game environment from scratch."
            },
            {
                title: "Game-Oriented Workflow",
                description: "Focused on creating assets and scenes suitable for integration into game engines."
            },
            {
                title: "Beginner-Friendly Approach",
                description: "Structured content to help newcomers build confidence and foundational skills in 3D modelling."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Date", value: "December 2022" },
            { label: "Format", value: "Workshop Series" },
            { label: "Platform", value: "YouTube" },
            { label: "Role", value: "Instructor" }
        ],

        resourcesBoxStyle: "bg-gradient-to-br from-orange-900/20 to-amber-900/20 border-orange-500/20",
        resources: [
            { icon: "video", label: "Watch Video", url: "https://www.youtube.com/live/ECxKsiI0mWc" }
        ]
    }
},
{
    slug: "fruit-ninja-unity-workshop",

    card: {
        coverImage: "",
        fallbackIcon: "smartphone",
        iconBg: "bg-green-900/30",
        iconColor: "text-green-400",
        title: "Going Mobile: Creating Fruit Ninja in Unity",
        date: "May 2023",
        role: "Instructor",
        description: "Conducted a hands-on workshop teaching mobile game development in Unity by recreating Fruit Ninja and deploying it to devices."
    },

    page: {
        heroIcon: "smartphone",
        heroIconColor: "text-green-500",
        title: "Going Mobile: Creating Fruit Ninja in Unity",
        subtitle: "Workshop",
        bannerIcon: "gamepad-2",

        overview: [
            "Delivered a hands-on workshop focused on mobile game development using Unity, centered around recreating the core mechanics of a Fruit Ninja-style game.",
            "Guided participants through the full development pipeline, from project setup to implementing gameplay systems and deploying to mobile devices."
        ],

        highlights: [
            {
                title: "Core Gameplay Systems",
                description: "Implemented slicing mechanics, touch input handling, collision detection, and scoring systems."
            },
            {
                title: "Mobile Development Workflow",
                description: "Covered Unity’s mobile toolchain, optimization basics, and deployment to Android/iOS devices."
            },
            {
                title: "End-to-End Learning",
                description: "Enabled participants to build, test, and ship a complete mobile game prototype."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Date", value: "May 2023" },
            { label: "Format", value: "Workshop" },
            { label: "Platform", value: "YouTube" },
            { label: "Role", value: "Instructor" }
        ],

        resourcesBoxStyle: "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20",
        resources: [
            { icon: "video", label: "Watch Workshop", url: "https://www.youtube.com/live/Ad7H5l7yu38" }
        ]
    }
},
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
