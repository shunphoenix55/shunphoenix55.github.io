/**
 * Organizations — Unified Data Model
 *
 * Each entry has:
 *   - slug: URL identifier
 *   - card: properties for the listing grid card
 *   - page: properties for the full detail page
 */

const orgsData = [
    {
        slug: "gamedev-society",

        card: {
            coverImage: "assets/covers/gamedev-society.jpg",
            avatar: "GD",
            title: "Game Dev Society",
            role: "President (2023 - Present)",
            description: "Organizing weekly meetups, guest lectures, and semester-long game jams for the university community."
        },

        page: {
            heroIcon: "joystick",
            heroIconColor: "text-orange-500",
            title: "Game Dev Society",
            subtitle: "Student Organization",
            bannerIcon: "users",

            overview: [
                "As President of the Game Development Society, I led a student body of over 150 members, fostering a collaborative environment for aspiring game developers, artists, and designers.",
                "My primary focus was on bridging the gap between academic theory and industry practice by organizing guest lectures, workshops, and large-scale game jams."
            ],

            achievements: [
                {
                    title: "Event Organization",
                    description: "Organized and hosted the 'Winter Game Jam 2023', creating a platform for 20 teams to showcase their prototypes to industry judges."
                },
                {
                    title: "Mentorship Program",
                    description: "Launched a peer-mentorship initiative pairing senior students with freshmen to assist in learning Unity and C#."
                }
            ],

            detailsTitle: "Details",
            details: [
                { label: "Duration", value: "2022 - 2024" },
                { label: "Role", value: "President" }
            ],

            linksBoxStyle: "bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/20",
            links: [
                { icon: "globe", label: "Society Website", url: "#" }
            ]
        }
    },

    {
        slug: "xr-union",

        card: {
            coverImage: "",
            avatar: "XR",
            title: "XR Creators Union",
            role: "Member",
            description: "Active contributor to open-source WebXR tools and libraries."
        },

        page: {
            heroIcon: "glasses",
            heroIconColor: "text-cyan-500",
            title: "XR Student Union",
            subtitle: "University Community",
            bannerIcon: "network",

            overview: [
                "Co-founded a student community dedicated to exploring Extended Reality (XR) technologies. Our mission was to provide students with access to VR/AR hardware that is typically restricted to research labs."
            ],

            achievements: [
                {
                    title: "Equipment Funding",
                    description: "Successfully campaigned for university funding to acquire 5 Meta Quest 2 headsets for student use."
                }
            ],

            detailsTitle: "Details",
            details: [
                { label: "Duration", value: "2021 - 2023" },
                { label: "Role", value: "Co-Founder" }
            ],

            linksBoxStyle: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20",
            links: [
                { icon: "globe", label: "Union Page", url: "#" }
            ]
        }
    }
];

// --- Card Template (uses org.card.*) ---

function orgCardTemplate(org, index) {
    const card = org.card;

    const avatarContent = card.coverImage
        ? `
            <div class="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img src="${card.coverImage}" alt="${card.title} logo"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     loading="lazy">
            </div>
          `
        : `
            <div class="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-500 group-hover:bg-slate-600 transition-colors flex-shrink-0">
                ${card.avatar}
            </div>
          `;

    return `
        <a href="orgs/detail.html?slug=${org.slug}"
           class="block bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} flex items-center gap-6 group">
            ${avatarContent}
            <div>
                <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    ${card.title}</h3>
                <p class="text-indigo-400 font-medium mb-2">${card.role}</p>
                <p class="text-slate-400 text-sm">${card.description}</p>
            </div>
        </a>
    `;
}

registerCards("orgs-grid", orgsData, orgCardTemplate);
