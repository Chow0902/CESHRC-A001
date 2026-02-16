// config.ts

type T = {
  [key: string]: any;
};

export const homepageTitle = "Chow's Homepage";

// Profile
export const profile: T = {
  name: "SkyChow",
  role: "SC",
  location: "Anchorage, Alaska",
  avatars: [
    "https://blog.chongxi.us/images/xi.webp",
    "https://blog.chongxi.us/images/xi.webp"
  ],
  slogan: [
    { text: "Exploring digital frontiers through " },
    { text: "code", highlighted: true },
    { text: ". An " },
    { text: "individual developer", highlighted: true },
    { text: "." }
  ],
  orcid: {
    id: "0009-0007-9348-1534",
    url: "https://orcid.org/0009-0007-9348-1534",
  },
};

// Social
export const connectLinks: T[] = [
  {
    platform: "GitHub",
    username: "@Chow0902",
    url: "https://github.com/Chow0902",
    icon: "code",
    color: "primary",
  },
  {
    platform: "Telegram",
    username: "@chowunive",
    url: "https://t.me/chowunive",
    icon: "send",
    color: "tertiary",
  },
  {
    platform: "Bilibili",
    username: "@Sky-Chow",
    url: "https://m.bilibili.com/space/361409645",
    icon: "play_circle",
    color: "pink",
  },
  {
    platform: "Email",
    username: "skychow1109@outlook.com",
    url: "mailto:skychow1109@outlook.com",
    icon: "mail",
    color: "surface",
  },
];

// Personal
export const personalLinks: T[] = [
  {
    platform: "Disk",
    description: "Personal file storage.",
    url: "https://disk.skychow.top",
    icon: "cloud",
  },
  {
    platform: "Spotify",
    description: "ChongXi’s Live listening activity.",
    url: "https://spot.chongxi.us",
    icon: "music_note",
    live: true, 
  }
];


// Section
export const sections: T = {
  uplink: "Network Uplink",
  personalNodes: "Personal Nodes",
  repositories: "Repositories",
  logs: "Afterworld Logs",
  dashboard: "Network Status",
};

// Project
export const projects: T[] = [
  {
    title: "MD3 THEME",
    description: "Material You 3 Style Personal Homepage Website.",
    status: "building...",
    tech: ["Tailwind", "React", "Vite"],
    link: "https://github.com/ChongxiSama/CESHRC-A001",
    featured: true,
  },
];

// Dashboard
export const dashboard: T = {
  servers: [
    { name: "main", url: "https://skychow.top", connected: true },
    { name: "blog", url: "https://blog.chongxi.us", connected: true },
    { name: "spot", url: "https://spot.chongxi.us", connected: true },
    { name: "NAS", url: "https://disk.skychow.top", connected: true },
  ],
  skills: [
    "JavaScript", "C#", "Go", "Rust", "HTML5", "Astro", "Node.js", 
    "React", "MySQL", "TypeScript", "Hysteria2", "Netlify", "Vercel", "Tailwind"
  ],
};

// Footer
export const footer: T = {
  line1: `© ${new Date().getFullYear()} All Rights Reserved.`,
  line2: "MoeICP-20250591 // BEYOND YOURSELF ",
};
