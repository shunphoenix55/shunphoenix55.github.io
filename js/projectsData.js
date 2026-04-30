/**
 * Projects — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const projectsData = [
    {
    slug: "metasoccer",

    card: {
        coverImage: "assets/projects/metasoccer/concept_1.jpg",
        fallbackIcon: "gamepad-2",
        badge: "Game Design",
        badgeStyle: "bg-black/50 backdrop-blur text-cyan-400",
        title: "MetaSoccer",
        description: "Semi-finalist for San Francisco Museum of Modern Art (SFMOMA)'s ArtCade, MetaSoccer is an interactive soccer simulator where players dynamically alter the rules of the game and watch AI-controlled soccer players adapt their strategies in real time.",
        actions: [
            { label: "View Project", style: "text-xs bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full border border-cyan-800" },
            { label: "Read More", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "gamepad",
        heroIconColor: "text-cyan-500",
        title: "MetaSoccer",
        subtitle: "Interactive AI Soccer Sandbox",
        heroAction: { icon: "sparkles", label: "Explore Project", url: "#", style: "bg-cyan-600 hover:bg-cyan-700 text-white" },
        bannerImage: "assets/projects/metasoccer/concept_1.jpg",
        bannerIcon: "gamepad",

        overview: [
            "MetaSoccer is an experimental interactive soccer simulator created for San Francisco Museum of Modern Art (SFMOMA)'s ArtCade. Designed as a playful exploration of systems, simulation, and player agency, the project allows visitors to directly manipulate the underlying rules of a soccer match in real time.",
            "Using a large interactive touchscreen interface, players can modify gameplay variables such as field size, player count, ground friction, ball size, and even the rules of play themselves. As these parameters shift, AI-controlled soccer players dynamically adapt their behavior to continue competing and trying to win under the new conditions.",
            "The experience is designed less as a traditional sports game and more as a sandbox for experimentation. Players are encouraged to push the simulation to absurd or unstable extremes and discover what happens when the familiar structure of a sport begins to break down."
        ],

        features: [
            {
                title: "Dynamic Rule Manipulation",
                description: "Players can adjust core soccer mechanics in real time using sliders, toggles, and buttons, transforming the match as it unfolds."
            },
            {
                title: "Adaptive AI Behavior",
                description: "AI soccer players respond intelligently to rule changes and environmental shifts, adjusting their movement and strategy to pursue victory."
            },
            {
                title: "Interactive Museum Experience",
                description: "Designed for a public exhibition setting, the game emphasizes accessibility, experimentation, and playful discovery through a tactile large-screen interface."
            },
        ],

        techStack: ["Unity", "C#", "AI Simulation", "Touchscreen Interaction", "Interactive Installation"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20",
        stats: [
            { label: "Recognition", value: "SFMOMA ArtCade Semi-finalist" },
            { label: "Platform", value: "Interactive Installation" },
            { label: "Genre", value: "Simulation / Sandbox" },
            { label: "Role", value: "Game Designer" }
        ],

        links: [
            { icon: "external-link", label: "SFMOMA Page", url: "https://www.sfmoma.org/exhibition/artcade/" },
        ],
        gallery: [
            { src: "assets/projects/metasoccer/concept_1.jpg", alt: "MetaSoccer Concept 1" },
            { src: "assets/projects/metasoccer/concept_2.jpg", alt: "MetaSoccer Concept 2" },
            { src: "assets/projects/metasoccer/Untitled_Artwork_9.JPG", alt: "MetaSoccer Concept 3" },
        ]

    }
},
{
    slug: "bhashaxr",

    card: {
        coverImage: "assets/projects/bhashaxr/bhasha-xr.png",
        fallbackIcon: "languages",
        badge: "VR / XR",
        badgeStyle: "bg-black/50 backdrop-blur text-violet-400",
        title: "BhashaXR",
        description: "Winner of Best UI/UX and Best in Education at Yantra '24, BhashaXR is a VR language learning platform designed to make language acquisition more immersive, natural, and personalized—especially for underrepresented Indian languages.",
        actions: [
            { label: "View Project", style: "text-xs bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full border border-violet-800" },
            { label: "Read More", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "languages",
        heroIconColor: "text-violet-500",
        title: "BhashaXR",
        subtitle: "Immersive VR Language Learning Platform",
        heroAction: { icon: "sparkles", label: "Explore Project", url: "#", style: "bg-violet-600 hover:bg-violet-700 text-white" },
        // bannerImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        bannerIcon: "languages",
        youtubeUrl:"https://youtube.com/shorts/fSWe7liTKV8",

        overview: [
            "Winner of Best UI/UX and Best in Education at Yantra '24,",
            "BhashaXR is a VR-based language learning platform built to make language acquisition feel more immersive, contextual, and intuitive than traditional app-based methods. The project focuses especially on Indian languages, which remain heavily underrepresented across mainstream language learning platforms.",
            "Instead of relying solely on flashcards and static exercises, BhashaXR places learners inside interactive virtual environments where they can practice vocabulary, object recognition, and conversational language in a more natural and embodied way.",
            "The platform also integrates AI-powered response analysis to evaluate how users speak and interact, allowing the system to provide tailored feedback and personalized recommendations based on learner performance."
        ],

        features: [
            {
                title: "Immersive Language Learning in VR",
                description: "Learners practice language inside interactive virtual environments, making vocabulary and communication more contextual and memorable."
            },
            {
                title: "Support for Indian Languages",
                description: "The project prioritizes regional Indian languages that are often overlooked by mainstream language learning applications."
            },
            {
                title: "AI-Powered Personalized Learning",
                description: "An AI model analyzes user responses and helps adapt the learning experience to better suit each individual learner."
            },
            {
                title: "Object Learning & Conversation Systems",
                description: "Users can interact with virtual objects and dialogue systems to reinforce vocabulary, understanding, and real-world communication patterns."
            },
            {
                title: "Natural XR Interactions",
                description: "Built with Meta's Interaction SDK, the experience includes intuitive VR interactions and hand tracking gestures for a more seamless learning flow."
            }
        ],

        techStack: ["Unity", "C#", "Meta Quest 3", "Meta Interaction SDK", "XR Interaction Design", "AI Backend Integration", "Voice Analysis"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 border-violet-500/20",
        stats: [
            { label: "Awards", value: "Best UI/UX, Best in Education" },
            { label: "Event", value: "Yantra '24" },
            { label: "Platform", value: "Meta Quest 3" },
            { label: "Role", value: "Unity XR Developer" }
        ],

        gallery: [
            { type: "youtube", url: "https://youtube.com/shorts/fSWe7liTKV8" },
            { type: "youtube", url: "https://youtube.com/shorts/qO1CZKgwxew" },
            {type:"image", src:"assets/projects/bhashaxr/bhasha-xr.png"},
        ]
    }
},

{
    slug: "3ducation",

    card: {
        coverImage: "assets/projects/3ducation/tech.png",
        fallbackIcon: "box",
        badge: "VR / XR",
        badgeStyle: "bg-black/50 backdrop-blur text-emerald-400",
        title: "Drone Assembly - 3Ducation",
        description: "3rd place winner at Yantra '23, 3Ducation is a VR learning platform focused on teaching drone assembly through immersive, hands-on interaction in virtual environments.",
        actions: [
            { label: "View Project", style: "text-xs bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full border border-emerald-800" },
            { label: "Read More", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "box",
        heroIconColor: "text-emerald-500",
        title: "Drone Assembly - 3Ducation",
        subtitle: "VR Drone Assembly Learning Platform",
        heroAction: { icon: "sparkles", label: "Explore Project", url: "#", style: "bg-emerald-600 hover:bg-emerald-700 text-white" },
        // bannerImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        bannerIcon: "box",
        youtubeUrl: "https://youtu.be/j-I2bN3C9w4",

        overview: [
            "3Ducation is a virtual reality learning platform specifically designed to teach users how to assemble drones through immersive, hands-on interaction.",
            "Developed during Yantra '23, where it secured 3rd place, the project focuses on simplifying complex drone assembly processes by breaking them down into interactive, step-by-step tasks within a 3D environment.",
            "By allowing users to physically manipulate drone components such as frames, motors, and propellers in VR, the platform bridges the gap between theoretical understanding and practical hardware skills."
        ],

        features: [
            {
                title: "Drone Assembly Simulation",
                description: "Users can assemble complete drone systems piece by piece, gaining a clear understanding of how each component fits and functions."
            },
            {
                title: "Step-by-Step Guided Workflow",
                description: "The experience guides users through structured assembly sequences, ensuring clarity in both process and component relationships."
            },
            {
                title: "Hands-On VR Interaction",
                description: "Built using Unity's XR Interaction Toolkit, enabling intuitive grabbing, placement, and manipulation of drone parts."
            },
            {
                title: "Practical Skill Development",
                description: "Focuses on real-world applicable skills by simulating authentic drone construction workflows."
            }
        ],

        techStack: ["Unity", "C#", "Meta Quest 2", "XR Interaction Toolkit", "VR Interaction Design"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/20",
        stats: [
            { label: "Award", value: "3rd Place" },
            { label: "Event", value: "Yantra '23" },
            { label: "Platform", value: "Meta Quest 2" },
            { label: "Focus", value: "Drone Assembly Training" },
            { label: "Role", value: "Unity Developer" }
        ],

        gallery: [
            {type:"youtube", src:"https://youtu.be/j-I2bN3C9w4"},
            {type:"image", src: "assets/projects/3ducation/tech.png", alt: "3Ducation Tech" },
            {type:"image", src: "assets/projects/3ducation/drone.png", alt: "3Ducation Assembly" }
        ]
    }
},

{
    slug: "bubbleoidvania",

    card: {
        coverImage: "assets/projects/bubbleoidvania/content.png",
        fallbackIcon: "gamepad-2",
        badge: "Game Jam",
        badgeStyle: "bg-black/50 backdrop-blur text-pink-400",
        title: "Bubbleoidvania",
        description: "Created for Global Game Jam 2025, Bubbleoidvania is a fast-paced 2D platformer inspired by Mega Man and Celeste, where players use a versatile bubble mechanic to shield, glide, and roll through challenging levels.",
        actions: [
            { label: "Play Game", style: "text-xs bg-pink-900/50 text-pink-300 px-3 py-1 rounded-full border border-pink-800" },
            { label: "Source Code", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "gamepad",
        heroIconColor: "text-pink-500",
        title: "Bubbleoidvania",
        subtitle: "2D Platformer with Dynamic Bubble Mechanics",
        heroAction: { icon: "play", label: "Play Now", url: "https://play.unity.com/en/games/ff55b6c0-5ecb-4660-828c-7fc7eee4d6ec/bubbleoidvania", style: "bg-pink-600 hover:bg-pink-700 text-white" },
        bannerIcon: "gamepad",
        youtubeUrl:"https://youtu.be/Xlnstn9KtwA",

        overview: [
            "Bubbleoidvania is a 2D platformer developed during Global Game Jam 2025 at the Bangalore Keywords Studios site, built around the theme 'Bubble'.",
            "Inspired by classic precision platformers like Mega Man and Celeste, the game introduces a unique central mechanic: a controllable bubble that fundamentally changes how players navigate and survive each level.",
            "Players can dynamically use the bubble in multiple ways—encasing themselves as a shield, holding it above to glide across gaps, or placing it beneath them to roll safely through hazards—creating a versatile and expressive movement system."
        ],

        features: [
            {
                title: "Multi-Functional Bubble Mechanic",
                description: "A single core system enables three distinct abilities: shielding, gliding, and rolling, each opening different traversal and survival strategies."
            },
            {
                title: "Precision Platforming",
                description: "Tight controls and carefully designed levels challenge players to master timing, positioning, and ability switching."
            },
            {
                title: "Arcade-Inspired Design",
                description: "Fast-paced gameplay influenced by retro platformers, combined with modern movement mechanics."
            },
            {
                title: "Cross-Platform Availability",
                description: "Playable on Web, Windows, Mac, and Linux, making it easily accessible across devices."
            }
        ],

        techStack: ["Unity", "C#", ".NET", "2D Game Development"],

        statsTitle: "Project Details",
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
            { icon: "github", label: "GitHub Repository", url: "https://github.com/devslayer8/GGJ_2025" }
        ],
        gallery:[
            {type: "youtube", url: "https://youtu.be/Xlnstn9KtwA"}
        ]
    }
},

{
    slug: "clink",

    card: {
        coverImage: "assets/projects/clink/cover.png",
        fallbackIcon: "link",
        badge: "Game Jam",
        badgeStyle: "bg-black/50 backdrop-blur text-yellow-400",
        title: "Clink!",
        description: "Created for the WTFxIGDC Game Jam, Clink! is a puzzle platformer where you control a snake made of chain links, using unique mechanics like link-sacrificing jumps and dual-ended control to solve intricate puzzles.",
        actions: [
            { label: "Play Game", style: "text-xs bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full border border-yellow-800" },
            { label: "View Page", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "link",
        heroIconColor: "text-yellow-500",
        title: "Clink!",
        subtitle: "Chain-Based Puzzle Platformer",
        heroAction: { icon: "play", label: "Play Now", url: "https://dasaniket15.itch.io/clink", style: "bg-yellow-600 hover:bg-yellow-700 text-white" },
        bannerImage: "assets/projects/clink/cover.png",
        bannerIcon: "link",

        overview: [
            "Clink! is a puzzle platformer developed for the WTFxIGDC Game Jam under the theme 'Chain Reaction'. The game centers around a unique playable character—a snake composed entirely of chain links.",
            "Players grow their chain by collecting additional links, but must strategically sacrifice them to perform actions like multi-jumping. This creates a constant trade-off between mobility and survival.",
            "With the ability to control both the head and tail independently, players solve environmental puzzles by grabbing objects, navigating hazards, and leveraging special elemental chains to overcome obstacles."
        ],

        features: [
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

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500/20",
        stats: [
            { label: "Event", value: "WTFxIGDC Game Jam" },
            { label: "Theme", value: "Chain Reaction" },
            { label: "Genre", value: "Puzzle Platformer" },
            { label: "Platform", value: "Web (WebGL)" },
            { label: "Team", value: "Indie Team (Original Art & Music)" }
        ],

        links: [
            { icon: "external-link", label: "Itch.io Page", url: "https://dasaniket15.itch.io/clink" },
            { icon: "download", label: "Download Build", url: "https://dasaniket15.itch.io/clink" }
        ]
    }
},

{
    slug: "spacetime-ar",

    card: {
        coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        fallbackIcon: "orbit",
        badge: "AR",
        badgeStyle: "bg-black/50 backdrop-blur text-indigo-400",
        title: "Spacetime AR",
        description: "An AR application built for a school science exhibition that visualizes Einstein’s theory of relativity by allowing users to spawn planets and observe real-time spacetime distortion.",
        actions: [
            { label: "View Project", style: "text-xs bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800" },
            { label: "Read More", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "orbit",
        heroIconColor: "text-indigo-500",
        title: "Spacetime AR",
        subtitle: "Augmented Reality Relativity Visualizer",
        heroAction: { icon: "sparkles", label: "Explore Project", url: "#", style: "bg-indigo-600 hover:bg-indigo-700 text-white" },
        bannerImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        bannerIcon: "orbit",

        overview: [
            "Spacetime AR is an augmented reality application developed for a high school science exhibition, aimed at making abstract physics concepts more intuitive and interactive.",
            "The app allows users to spawn planets in the real world using AR markers (cards) and observe how their mass influences the surrounding spacetime fabric, inspired by Einstein’s theory of relativity.",
            "By visualizing spacetime as a dynamically deforming surface, the project transforms a complex scientific concept into an engaging, real-time interactive experience."
        ],

        features: [
            {
                title: "AR Planet Spawning",
                description: "Users can place and manipulate planets in the real world using AR cards, creating interactive physics scenarios."
            },
            {
                title: "Real-Time Spacetime Visualization",
                description: "A dynamic surface represents spacetime, deforming in response to the position and mass of nearby planets."
            },
            {
                title: "Custom Shader System",
                description: "Built using Unity Shader Graph, the spacetime surface reacts in real time to objects in world space."
            },
            {
                title: "Educational XR Experience",
                description: "Designed to make complex physics concepts like relativity more accessible through visualization and interaction."
            }
        ],

        techStack: ["Unity", "C#", "AR (Marker-Based)", "Shader Graph", "XR Development"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border-indigo-500/20",
        stats: [
            { label: "Project Type", value: "Augmented Reality" },
            { label: "Date", value: "November 2019" },
            { label: "Location", value: "Dammam, Saudi Arabia" },
            { label: "Context", value: "School Science Exhibition" },
            { label: "Role", value: "Unity Programmer" }
        ],

        links: [
            { icon: "image", label: "Project Screenshot", url: "#" }
        ]
    }
},

{
    slug: "rcade",

    card: {
        coverImage: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        fallbackIcon: "activity",
        badge: "Gamified Health",
        badgeStyle: "bg-black/50 backdrop-blur text-green-400",
        title: "RCade",
        description: "2nd place winner at WomenTechies '23, RCade is a gamified exercise application that provides personalized recommendations to help users manage common body pains while staying engaged through interactive gameplay systems.",
        actions: [
            { label: "View Project", style: "text-xs bg-green-900/50 text-green-300 px-3 py-1 rounded-full border border-green-800" },
            { label: "Read More", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "activity",
        heroIconColor: "text-green-500",
        title: "RCade",
        subtitle: "Gamified Exercise & Body Tracking Platform",
        heroAction: { icon: "sparkles", label: "Explore Project", url: "#", style: "bg-green-600 hover:bg-green-700 text-white" },
        bannerImage: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        bannerIcon: "activity",

        overview: [
            "RCade is a gamified exercise platform designed to help users manage common body pains through guided physical activity and interactive feedback systems.",
            "Developed during WomenTechies '23, where it secured 2nd place, the project focuses on increasing user engagement and consistency by transforming traditional exercise routines into game-like experiences.",
            "By combining body tracking with responsive UI systems and game mechanics, RCade encourages users to stay committed to their routines while ensuring proper form and effectiveness."
        ],

        features: [
            {
                title: "Gamified Exercise Experience",
                description: "Transforms routine exercises into interactive challenges to improve motivation and user retention."
            },
            {
                title: "Body Tracking Integration",
                description: "Uses MediaPipe-based tracking to monitor user movements and provide real-time feedback on exercise performance."
            },
            {
                title: "Personalized Recommendations",
                description: "Suggests exercises targeted at relieving common body pains based on user needs."
            },
            {
                title: "Custom UI/UX Systems",
                description: "Carefully designed interface and interactions to make the experience intuitive, responsive, and engaging."
            }
        ],

        techStack: ["Unity", "C#", "MediaPipe", "Computer Vision", "UI/UX Systems"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20",
        stats: [
            { label: "Award", value: "2nd Place" },
            { label: "Event", value: "WomenTechies '23" },
            { label: "Date", value: "March 2023" },
            { label: "Location", value: "Vellore" },
            { label: "Role", value: "Unity Developer" }
        ],

        links: [
            { icon: "image", label: "Project Screenshots", url: "#" }
        ]
    }
},
{
    slug: "groupiee",

    card: {
        coverImage: "assets/projects/groupiee/groupiee.png",
        fallbackIcon: "users",
        badge: "Web App",
        badgeStyle: "bg-black/50 backdrop-blur text-blue-400",
        title: "Groupiee",
        description: "Finalist at DevJams '21, Groupiee is a travel planning platform that matches users with like-minded people nearby and helps them organize trips together.",
        actions: [
            { label: "View Project", style: "text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full border border-blue-800" },
            { label: "GitHub", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "users",
        heroIconColor: "text-blue-500",
        title: "Groupiee",
        subtitle: "Social Travel Matching Platform",
        heroAction: { icon: "github", label: "View Code", url: "#", style: "bg-blue-600 hover:bg-blue-700 text-white" },
        bannerImage: "assets/projects/groupiee/groupiee.png",
        bannerIcon: "users",

        overview: [
            "Groupiee is a web-based platform designed to connect users with similar interests and nearby locations, enabling them to plan trips together.",
            "Developed during DevJams '21, where it reached the finalist stage, the project focuses on making travel more social, collaborative, and accessible.",
            "By combining user matching with trip planning features, Groupiee helps individuals find compatible travel partners and coordinate their journeys efficiently."
        ],

        features: [
            {
                title: "Interest-Based Matching",
                description: "Matches users based on shared interests and geographical proximity to find ideal travel companions."
            },
            {
                title: "Trip Planning System",
                description: "Provides tools to organize and coordinate trips collaboratively among matched users."
            },
            {
                title: "Backend API with Flask",
                description: "Robust backend system built using Flask to handle user data, matching logic, and application flow."
            },
            {
                title: "Database Integration",
                description: "MongoDB database used to store user profiles, preferences, and trip data efficiently."
            }
        ],

        techStack: ["Python", "Flask", "MongoDB", "REST APIs"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/20",
        stats: [
            { label: "Achievement", value: "Finalist" },
            { label: "Event", value: "DevJams '21" },
            { label: "Date", value: "November 2021" },
            { label: "Mode", value: "Remote" },
            { label: "Role", value: "Backend Developer" }
        ],

        links: [
            { icon: "github", label: "GitHub Repository", url: "#" }
        ]
    }
},
{
    slug: "fruit-ninja-clone",

    card: {
        coverImage: "assets/projects/fruit-ninja/fruit.png",
        fallbackIcon: "slice",
        badge: "Game Dev",
        badgeStyle: "bg-black/50 backdrop-blur text-red-400",
        title: "Fruit Ninja Clone",
        description: "A Unity recreation of Fruit Ninja built as a deep dive into game design and programming patterns, focusing on replicating core gameplay systems efficiently.",
        actions: [
            { label: "View Project", style: "text-xs bg-red-900/50 text-red-300 px-3 py-1 rounded-full border border-red-800" },
            { label: "GitHub", style: "text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full border border-slate-600" }
        ]
    },

    page: {
        heroIcon: "slice",
        heroIconColor: "text-red-500",
        title: "Fruit Ninja Clone",
        subtitle: "Game Systems Recreation in Unity",
        heroAction: { icon: "github", label: "View Code", url: "#", style: "bg-red-600 hover:bg-red-700 text-white" },
        bannerImage: "assets/projects/fruit-ninja/fruit.png",
        bannerIcon: "slice",

        overview: [
            "This project is a recreation of the popular mobile game Fruit Ninja, built in Unity as a focused exercise in game design analysis and system implementation.",
            "The goal was not just to clone the gameplay, but to deeply understand how the original game’s systems work—from spawning logic and slicing mechanics to scoring and feedback systems.",
            "By studying the original game and reimplementing its mechanics, the project served as a hands-on exploration of efficient game architecture and programming patterns."
        ],

        features: [
            {
                title: "Core Gameplay Recreation",
                description: "Implements fruit spawning, slicing mechanics, scoring systems, and feedback loops inspired by the original game."
            },
            {
                title: "System-Level Analysis",
                description: "Breaks down and reconstructs gameplay systems to understand their design and implementation."
            },
            {
                title: "Optimized Game Architecture",
                description: "Applies best practices and programming patterns to ensure clean, maintainable, and efficient code."
            },
            {
                title: "Pattern-Driven Development",
                description: "Built while studying and applying concepts from Game Programming Patterns to structure the project effectively."
            }
        ],

        techStack: ["Unity", "C#", "Game Programming Patterns", "2D Physics"],

        statsTitle: "Project Details",
        statsBoxStyle: "bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/20",
        stats: [
            { label: "Project Type", value: "Game Recreation" },
            { label: "Date", value: "May 2023" },
            { label: "Mode", value: "Remote" },
            { label: "Engine", value: "Unity" },
            { label: "Focus", value: "Game Systems & Design" }
        ],

        links: [
            { icon: "github", label: "GitHub Repository", url: "#" }
        ]
    }
},
];

// --- Card Template (uses project.card.*) ---

function projectCardTemplate(project, index) {
    const card = project.card;
    let heroHTML = "";

    if (card.heroType === "model-viewer") {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden">
                <model-viewer src="${card.modelSrc}" alt="${card.modelAlt}"
                    animation-name="${card.modelAnimation}" autoplay camera-controls interaction-prompt="none" shadow-intensity="1"
                    class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></model-viewer>
            </div>`;
    } else if (card.coverImage) {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0">
                    <img src="${card.coverImage}" alt="${card.title} cover"
                         class="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black/30"></div>
                </div>
                ${card.badge ? `<div class="absolute top-4 right-4 ${card.badgeStyle} px-2 py-1 rounded text-xs font-mono z-10">${card.badge}</div>` : ''}
            </div>`;
    } else {
        heroHTML = `
            <div class="h-card-3d bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <i data-lucide="${card.fallbackIcon}"
                   class="w-20 h-20 text-indigo-500 group-hover:rotate-180 transition-transform duration-700"></i>
            </div>`;
    }

    const actionTags = card.actions.map(a =>
        `<span class="${a.style}">${a.label}</span>`
    ).join("");

    return `
        <a href="projects/detail.html?slug=${project.slug}"
           class="block group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 reveal delay-${(index + 1) * 100}">
            ${heroHTML}
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    ${card.title}
                </h3>
                <p class="text-slate-400 text-sm mb-4">
                    ${card.description}
                </p>
                <div class="flex gap-2">
                    ${actionTags}
                </div>
            </div>
        </a>
    `;
}

registerCards("projects-grid", projectsData, projectCardTemplate);
