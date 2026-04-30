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
    slug: "codechef-vit",

    card: {
        coverImage: "assets/orgs/codechef.png",
        avatar: "CC",
        title: "CodeChef VIT",
        role: "XR Lead (2022 - 2024)",
        description: "Worked on AR/VR initiatives, event organization, and mentorship within one of VIT’s leading technical clubs."
    },

    page: {
        heroIcon: "code",
        heroIconColor: "text-yellow-500",
        title: "CodeChef VIT",
        subtitle: "Volunteer Organization",
        bannerIcon: "users",

        overview: [
            "Contributed as an XR Developer at CodeChef-VIT, one of VIT’s premier technical clubs, focusing on augmented reality and immersive technology initiatives.",
            "Actively supported large-scale technical events, mentorship programs, and community learning through workshops and hackathons."
        ],

        achievements: [
            {
                title: "Event Coordination",
                description: "Organized and conducted Cook Off, India’s largest student-run competitive coding event, and coordinated efforts for DEVSOC hackathon."
            },
            {
                title: "XR Development",
                description: "Developed AR filters and 3D assets, and built augmented reality experiences using Unity and SparkAR for marketing and engagement."
            },
            {
                title: "Community & Mentorship",
                description: "Led technical sessions on AR/VR, mentored participants in XR and Game Development, and reviewed projects during DEVSOC."
            },
            {
                title: "Speaker Outreach",
                description: "Managed speaker outreach for Tech Talks, a flagship event focused on emerging technologies."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Duration", value: "March 2022 - January 2024" },
            { label: "Role", value: "XR Developer" },
            { label: "Location", value: "Vellore, Tamil Nadu" }
        ],

        linksBoxStyle: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20",
        links: [
            { icon: "globe", label: "Organization Page", url: "https://www.codechefvit.com/events" }
        ]
    }
},

   {
    slug: "tag-club-vit",

    card: {
        coverImage: "assets/orgs/tag.png",
        avatar: "TAG",
        title: "TAG Club VIT",
        role: "Projects Lead (2022 - 2024)",
        description: "Led game development initiatives, organized flagship events, and mentored students in game creation and design."
    },

    page: {
        heroIcon: "gamepad-2",
        heroIconColor: "text-purple-500",
        title: "TAG Club VIT",
        subtitle: "Volunteer Organization",
        bannerIcon: "users",

        overview: [
            "Served as Projects Lead at TAG Club, VIT’s official Game Development and Gaming Club, focusing on fostering a strong game development community.",
            "Played a key role in organizing major game development and eSports events while mentoring students and conducting technical sessions."
        ],

        achievements: [
            {
                title: "Event Leadership",
                description: "Coordinated 'Studio 2 Stage', the club’s flagship game jam, and managed operations for 'Gameathon', a large-scale eSports event."
            },
            {
                title: "Technical Workshops",
                description: "Conducted sessions on Unity and Blender, helping students build foundational and advanced game development skills."
            },
            {
                title: "Mentorship",
                description: "Guided junior members in game development, providing hands-on support throughout their project lifecycles."
            }
        ],

        detailsTitle: "Details",
        details: [
            { label: "Duration", value: "March 2022 - January 2024" },
            { label: "Role", value: "Projects Lead" },
            { label: "Location", value: "Vellore, Tamil Nadu" }
        ],

        linksBoxStyle: "bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border-purple-500/20",
        links: [
            { icon: "globe", label: "Club Page", url: "https://www.instagram.com/tagclub.vit/" }
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
