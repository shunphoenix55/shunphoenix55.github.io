/**
 * Organizations — Data + Card Template
 */

const orgsData = [
    {
        link: "orgs/gamedev-society.html",
        avatar: "GD",
        title: "Game Dev Society",
        role: "President (2023 - Present)",
        description: "Organizing weekly meetups, guest lectures, and semester-long game jams for the university community."
    },
    {
        link: "orgs/xr-union.html",
        avatar: "XR",
        title: "XR Creators Union",
        role: "Member",
        description: "Active contributor to open-source WebXR tools and libraries."
    }
];

function orgCardTemplate(org, index) {
    return `
        <a href="${org.link}"
           class="block bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all reveal delay-${index * 100} flex items-center gap-6 group">
            <div class="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-500 group-hover:bg-slate-600 transition-colors">
                ${org.avatar}
            </div>
            <div>
                <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    ${org.title}</h3>
                <p class="text-indigo-400 font-medium mb-2">${org.role}</p>
                <p class="text-slate-400 text-sm">${org.description}</p>
            </div>
        </a>
    `;
}

registerCards("orgs-grid", orgsData, orgCardTemplate);
