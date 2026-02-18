/**
 * Work Experience — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const workExperience = [
    {
        slug: "anomaly-shooter",

        card: {
            coverImage: "assets/covers/immersive-tech.jpg",
            fallbackIcon: "briefcase",
            duration: "Feb 2025 - Present",
            durationStyle: "bg-cyan-900/50 text-cyan-300",
            title: "PvP Arena Shooter VR",
            company: "Anomaly Labs",
            description: "Battle it out with your friends in a multiplayer shooter in VR! Set in a futuristic sci-fi world, you gather powerups and use them strategically to gain the upper hand in matches!",
            tech: ["Unity", "Photon Fusion", "Oculus SDK"]
        },

        page: {
            heroIcon: "briefcase",
            heroIconColor: "text-cyan-500",
            duration: "Feb 2025 - Present",
            badgeStyle: "bg-cyan-900/30 border-cyan-500/30 text-cyan-400",
            title: "PvP Arena Shooter VR",
            company: "Anomaly Labs",

            overview: [
                "Battle it out with your friends in a multiplayer shooter in VR! Set in a futuristic sci-fi world, you gather powerups and use them strategically to gain the upper hand in matches!"
            ],

            contributions: [
                {
                    title: "Multiplayer Networking Architecture",
                    description: "Engineered a multiplayer system using Unity NGO that supports both peer-to-peer and server-based connections."
                },
                {
                    title: "FPS System",
                    description: "Built an FPS system with haptics and VR-specific visuals"
                },
                {
                    title: "Avatar System",
                    description: "Created an avatar system that allows you to take any rigged humanoid and convert it to a VR Rig that follows your head and hand movements."
                },
                {
                    title: "Performance Optimization",
                    description: "Optimized the game for the Meta Quest 2 and 3, achieving a stable 72fps."
                },
                {
                    title: "Graphics & Visuals",
                    description: "Created custom shaders to create visuals that enhance the sci-fi aesthetic"
                }
            ],

            techStack: ["Unity 2022 LTS", "C#", "Photon Fusion", "Oculus SDK", "Git / GitHub GUI", "Jira"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border-cyan-500/20",
            stats: [
                { label: "Team Size", value: "12 Devs/Artists" },
                { label: "Platform", value: "Meta Quest 2/3" },
                { label: "Status", value: "Live / In-Dev", valueColor: "text-green-400" }
            ],

            gallery: [
                { type: "placeholder", label: "Screenshot 1" },
                { type: "placeholder", label: "Screenshot 2" }
            ]
        }
    },

    {
        slug: "indie-game",

        card: {
            coverImage: "assets/covers/indie-game.jpg",
            fallbackIcon: "gamepad-2",
            duration: "2022 - 2023",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Gameplay Programmer",
            company: "Indie Game Collective",
            description: "Implemented core gameplay mechanics for a narrative-driven platformer. Collaborated with artists to integrate animations.",
            tech: ["Unreal Engine 5", "C++", "Blueprints"]
        },

        page: {
            heroIcon: "gamepad-2",
            heroIconColor: "text-purple-500",
            duration: "2022 - 2023",
            badgeStyle: "bg-purple-900/30 border-purple-500/30 text-purple-400",
            title: "Gameplay Programmer",
            company: "Indie Game Collective",

            overview: [
                "As a core team member at the Indie Game Collective, I was responsible for architecting and implementing the primary gameplay loop of \"Neon Drift\", a physics-based vehicle platformer.",
                "I bridged the gap between game design and technical implementation, often creating custom tools in the Unreal Editor to allow level designers to iterate faster. My role also involved significant work with C++ to extend the engine's capability for our specific vehicle physics needs."
            ],

            contributions: [
                {
                    title: "Custom Physics Engine Extension",
                    description: "Wrote custom C++ movement components to handle non-euclidean gravity surfaces, allowing the car to drive on walls and ceilings without camera jitter."
                },
                {
                    title: "Animation State Machine",
                    description: "Designed a complex animation state machine in Unreal, blending procedural Inverse Kinematics (IK) with baked animations to make the vehicle suspension react realistically to terrain."
                }
            ],

            techStack: ["Unreal Engine 5", "C++", "Blueprints", "Perforce"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20",
            stats: [
                { label: "Team Size", value: "5 Members" },
                { label: "Platform", value: "PC (Steam)" },
                { label: "Status", value: "Shipped", valueColor: "text-yellow-400" }
            ],

            gallery: [
                { type: "placeholder", label: "Gameplay Clip 1" }
            ]
        }
    },

    {
        slug: "tech-giant",

        card: {
            coverImage: "assets/covers/tech-giant.jpg",
            fallbackIcon: "code-2",
            duration: "2021 (Intern)",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Software Engineer Intern",
            company: "Tech giant Corp",
            description: "Worked on backend services for cloud gaming infrastructure. Reduced latency by optimizing data packets.",
            tech: ["Python", "AWS", "Docker"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "2021 (Intern)",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "Software Engineer Intern",
            company: "Tech Giant Corp",

            overview: [
                "During my summer internship at Tech Giant Corp, I worked with the Cloud Gaming Infrastructure team. My project focused on optimizing the backend microservices that handle session initiation and matchmaking for cloud-streamed games.",
                "This experience gave me deep insight into large-scale distributed systems and the specific challenges of low-latency networking required for real-time interactive media."
            ],

            contributions: [
                {
                    title: "Latency Analysis Tool",
                    description: "Developed a Python-based analysis tool that visualized packet loss and jitter across different global regions, helping the team identify 3 critical bottleneck nodes."
                },
                {
                    title: "Container Optimization",
                    description: "Refactored the Docker container build process for the matchmaking service, reducing image size by 40% and deploying it to AWS EKS."
                }
            ],

            techStack: ["Python", "AWS (EC2, EKS)", "Docker", "Linux"],

            statsTitle: "Internship Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "12 Weeks" },
                { label: "Team", value: "Cloud Infrastructure" }
            ],

            gallery: []
        }
    }
];

// --- Card Template (uses job.card.*) ---

function workCardTemplate(job, index) {
    const card = job.card;

    const techTags = card.tech.map(t =>
        `<span class="text-xs bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-400">${t}</span>`
    ).join("");

    const headerContent = card.coverImage
        ? `
            <div class="absolute inset-0">
                <img src="${card.coverImage}"
                     alt="${card.company} cover"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy">
                <div class="absolute inset-0 bg-black/40"></div>
            </div>
          `
        : `
            <div class="flex items-center justify-center w-full h-full">
                <i data-lucide="${card.fallbackIcon}"
                   class="w-16 h-16 text-cyan-500 group-hover:scale-110 transition-transform"></i>
            </div>
          `;

    return `
        <a href="work/detail.html?slug=${job.slug}"
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 reveal delay-${(index + 1) * 100}">
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                ${headerContent}
                <div class="absolute top-4 right-4 ${card.durationStyle} backdrop-blur px-2 py-1 rounded text-xs font-mono z-10">
                    ${card.duration}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                    ${card.title}
                </h3>
                <p class="text-indigo-400 font-medium mb-3">
                    ${card.company}
                </p>
                <p class="text-slate-400 text-sm mb-4">
                    ${card.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${techTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("work-grid", workExperience, workCardTemplate);
