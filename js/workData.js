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
            coverImage: "assets/covers/doom-town.png",
            fallbackIcon: "briefcase",
            duration: "Feb 2025 - Present",
            durationStyle: "bg-cyan-900/50 text-cyan-300",
            title: "PvP Arena Shooter VR",
            company: "Gameplay Programmer - Anomaly Labs",
            description: "Battle it out with your friends in a multiplayer shooter in VR! Set in a futuristic sci-fi world, you gather powerups and use them strategically to gain the upper hand in matches!",
            tech: ["Unity", "Photon Fusion", "Meta XR SDK"]
        },

        page: {
            heroIcon: "briefcase",
            heroIconColor: "text-cyan-500",
            duration: "Feb 2025 - Present",
            badgeStyle: "bg-cyan-900/30 border-cyan-500/30 text-cyan-400",
            title: "PvP Arena Shooter VR",
            company: "Gameplay Programmer - Anomaly Labs",
            bannerImage: "assets/covers/doom-town.png",

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

            techStack: ["Unity 6.2 LTS", "C#", "Unity NGO", "Meta XR SDK"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border-cyan-500/20",
            stats: [
                { label: "Team Size", value: "4" },
                { label: "Platform", value: "Meta Quest 2/3" },
                { label: "Status", value: "Live", valueColor: "text-green-400" }
            ],

            gallery: [
                { type: "placeholder", label: "Screenshot 1" },
                { type: "placeholder", label: "Screenshot 2" }
            ]
        }
    },

    {
        slug: "vr-dnd",

        card: {
            coverImage: "https://t4.ftcdn.net/jpg/06/33/56/55/360_F_633565587_BmoYccbwbhjZcRKL9kWSwKU0WiSgeIhP.jpg",
            fallbackIcon: "gamepad-2",
            duration: "Feb 2025 - May 2025",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Dungeons and Dragons VR",
            company: "Gameplay Programmer - Anomaly Labs",
            description: "A narrative driven RPG based on Dungeons and Dragons. Experience a unique system of turn-based VR combat. The story changes depending on your choices. Perform various skill checks using VR dice.",
            tech: ["Unity ", "C#", "Meta XR SDK"]
        },

        page: {
            heroIcon: "gamepad-2",
            heroIconColor: "text-purple-500",
            duration: "Feb 2025 - May 2025",
            badgeStyle: "bg-purple-900/30 border-purple-500/30 text-purple-400",
            title: "Dungeons and Dragons VR",
            company: "Gameplay Programmer - Anomaly Labs",
            bannerImage: "https://t4.ftcdn.net/jpg/06/33/56/55/360_F_633565587_BmoYccbwbhjZcRKL9kWSwKU0WiSgeIhP.jpg",

            overview: ["A narrative driven RPG based on Dungeons and Dragons. Experience a unique system of turn-based VR combat. The story changes depending on your choices. Perform various skill checks using VR dice."
            ],

            contributions: [
                {
                    title: "DnD Character System",

                },
                {
                    title: "Dialogue System",
                    description: "Created a dialogue system with editor tools to make it easy for designers to put their script into Unity"
                },
                {
                    title: "Combat System",
                    description: "Programmed a unique turn-based combat system in VR with unique weapon interactions and combos"
                }
            ],

            techStack: ["Unity", "C#", "Meta XR SDK"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20",
            stats: [
                { label: "Team Size", value: "5 Members" },
                { label: "Platform", value: "Meta Quest 2/3" },
                { label: "Status", value: "Shipped", valueColor: "text-yellow-400" }
            ],

            gallery: [
                { type: "placeholder", label: "Gameplay Clip 1" }
            ]
        }
    },

    {
        slug: "white-rabbit",

        card: {
            coverImage: "assets/covers/white-rabbit.jpg",
            fallbackIcon: "code-2",
            duration: "November 2023 - June 2024",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "White Rabbit",
            company: "C++ Programmer - Dissent Studio",
            description: "White Rabbit unfolds within the abandoned remnants of an amusement theme park, concealing a clandestine research facility. This once-thriving park, now overgrown with nature, serves as the backdrop for a narrative of intrigue and exploration.",
            tech: ["Unreal Engine", "C++", "Blueprints"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "November 2023 - June 2024",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "White Rabbit",
            company: "C++ Programmer - Dissent Studio",
            bannerImage: "assets/covers/white-rabbit.jpg",

            overview: ["White Rabbit unfolds within the abandoned remnants of an amusement theme park, concealing a clandestine research facility. This once-thriving park, now overgrown with nature, serves as the backdrop for a narrative of intrigue and exploration."
            ],

            contributions: [
                {
                    title: "FPS Combat System",
                    description: "Developed a PvE combat system"
                },
                {
                    title: "Sanity System",
                    description: "Created a unique sanity element that influences the gameplay"
                },
                {
                    title: "Inventory System",
                    description: "Programmed the inventory system for the game"
                },
                {
                    title: "Quest System ",
                    description: "Made the progression and quest system"
                }
            ],

            techStack: ["Unreal Engine", "C++", "Blueprints"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "1 year" },
                { label: "Team Size", value: "15" }
            ],

            gallery: []
        }
    },

    {
        slug: "iva-plus",

        card: {
            coverImage: "assets/covers/iva-plus.png",
            fallbackIcon: "code-2",
            duration: "August 2023 - December 2023 (Internship)",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Intelligent Vision Analyzer Plus",
            company: "C# Programmer - Alfaleus Technology",
            description: "iVA+ is a VR application that is used to perform eye testing. It is primarily used to detect glaucoma, beating out the Goldmann machine in terms of accuracy and price.",
            tech: ["Unity", "C#", "PICO SDK", "XR Interaction Toolkit"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "August 2023 - December 2023 (Internship)",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "Intelligent Vision Analyzer Plus",
            company: "C# Programmer - Alfaleus Technology",
            bannerImage: "assets/covers/iva-plus.png",

            overview: ["iVA+ is a VR application that is used to perform eye testing. It is primarily used to detect glaucoma, beating out the Goldmann machine in terms of accuracy and price.",
                "It also features tests for visual acuity, contrast and colorblindness"
            ],

            contributions: [
                {
                    title: "Eye Tests",
                    description: "Implemented the Contrast Sensitivity, Visual Acuity and Colorblindness tests from scratch"
                },
                {
                    title: "Interactive Tutorial",
                    description: "I created an interactive tutorial for the Visual Field test and Contrast Sensitivity test, supporting multiple languages."
                },
                {
                    title: "Optimization and Performance",
                    description: "I optimized the application, reducing build time from 10 minutes to 1.5 minutes, 500 MB to 80 MB, loading time from 40 seconds to 5 seconds."
                },
                {
                    title: "Codebase Refactoring ",
                    description: "Rewrote and refactored the codebase to make it more readable and scalable"
                },
                {
                    title: "UI Rework",
                    description:"Completely overhauled and reworked the UI to make it fluid, added smooth animations."
                    
                }
            ],

            techStack: ["Unity", "C#", "PICO SDK", "XR Interaction Toolkit"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "4 months" },
                { label: "Team Size", value: "6" }
            ],

            gallery: []
        }
    },
    {
        slug: "halara",

        card: {
            coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRl60qBjkRyGatST-J2sRm1smr7O9uTHR48w&s",
            fallbackIcon: "code-2",
            duration: "July 2022 - November 2022 (Internship)",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Halara",
            company: "Unity Programmer",
            description: "Halara is a Virtual Reality platform to help train and develop children with Autism through providing immersive environments that simulate daily essential activities and learn while playing games in 3D.",
            tech: ["Unity", "C#", "PICO SDK", "XR Interaction Toolkit"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "July 2022 - November 2022 (Internship)",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "Halara",
            company: "Unity Programmer",
            bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRl60qBjkRyGatST-J2sRm1smr7O9uTHR48w&s",

            overview: ["Halara is a Virtual Reality platform to help train and develop children with Autism through providing immersive environments that simulate daily essential activities and learn while playing games in 3D.",
            ],

            contributions: [
                {
                    title: "3D Asset modeling and Animation",
                    description: "I modeled 3D art assets for 3 modules in the application, and animated them using Unity's animation system."
                },
                {
                    title: "Therapy Module Development",
                    description: "Worked on the development of 3 therapy modules: Socialization, Attention and Multitasking. These modules are designed to help children with autism learn essential life skills through interactive VR experiences."
                },
                {
                    title: "Optimization and Performance",
                    description: "Optimized the application to run smoothly on the PICO 2 Neo, reducing loading times and improving frame rates."
                },
            ],

            techStack: ["Unity", "C#", "PICO SDK", "XR Interaction Toolkit"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "4 months" },
                { label: "Team Size", value: "10" }
            ],

            gallery: []
        }
    },
    {
        slug: "virtual-bride",

        card: {
            coverImage: "https://sulakshanamonga.com/cdn/shop/products/2_ce6969ce-cd85-4d51-a7b7-bd9c54e4df88.jpg?v=1663138104&width=1200",
            fallbackIcon: "code-2",
            duration: "April 2023 - June 2023 (Freelance)",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Virtual Bride",
            company: "Unity Programmer - Sulakshana Monga",
            description: "Virtual Bride is a shopping app which lets you try out Bridal Wear in Augmented Reality. It is designed to help brides-to-be visualize how different outfits will look on them before making a purchase.",
            tech: ["Unity", "C#", "AR Foundation", "AR Kit", "iOS"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "April 2023 - June 2023 (Freelance)",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "Virtual Bride",
            company: "Unity Programmer - Sulakshana Monga",
            bannerImage: "https://sulakshanamonga.com/cdn/shop/products/2_ce6969ce-cd85-4d51-a7b7-bd9c54e4df88.jpg?v=1663138104&width=1200",

            overview: ["Virtual Bride is a shopping app which lets you try out Bridal Wear in Augmented Reality for iOS devices. It is designed to help brides-to-be visualize how different outfits will look on them before making a purchase.",
            ],

            contributions: [
                {
                    title: "Augmented Reality",
                    description: "Used Unity MARS to overlay clothing on the user in Augmented Reality, with features such as changing the size of the clothes"
                },
                {
                    title:"Customization System",
                    description: "Implemented a customization system that allows users to change the color and pattern of the clothes, providing a personalized shopping experience."
                },
                {
                    title: "UI Programming and Animations",
                    description: "I made the UI and made sure it scaled properly for all iOS devices. Created smooth animations for the user interface to enhance the overall user experience."
                },
            ],

            techStack: ["Unity", "C#", "PICO SDK", "XR Interaction Toolkit"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "4 months" },
                { label: "Team Size", value: "10" }
            ],

            gallery: []
        }
    },
    {
        slug: "ation-studios",

        card: {
            coverImage: "assets/covers/immersive-tech.png",
            fallbackIcon: "code-2",
            duration: "February 2022 - May 2022 (Internship)",
            durationStyle: "bg-slate-700/50 text-slate-300",
            title: "Ation Studios",
            company: "Blender Animator",
            description: "Ation Studios is a creative agency that specializes in 3D modeling and animation. It is designed to help clients visualize their ideas in a dynamic and engaging way.",
            tech: ["Blender", "Python", "Substance Painter"]
        },

        page: {
            heroIcon: "code-2",
            heroIconColor: "text-pink-500",
            duration: "February 2022 - May 2022 (Internship)",
            badgeStyle: "bg-pink-900/30 border-pink-500/30 text-pink-400",
            title: "Ation Studios",
            company: "Blender Animator",
            bannerImage: "assets/covers/immersive-tech.png",

            overview: ["Ation Studios is a creative agency that specializes in 3D modeling and animation. It is designed to help clients visualize their ideas in a dynamic and engaging way.",
            ],

            contributions: [
                {
                    title: "3D Modeling",
                    description: "Created detailed 3D models for various client projects using Blender."
                },
                {
                    title:"3D Animation",
                    description: "Developed smooth animations for 3D models, enhancing the visual appeal and storytelling."
                },

            ],

            techStack: ["Blender", "Python", "Substance Painter"],

            statsTitle: "Project Stats",
            statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20",
            stats: [
                { label: "Duration", value: "3 months" },
                { label: "Team Size", value: "6" }
            ],

            gallery: []
        }
    },
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
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
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
