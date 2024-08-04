import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Formula1",
    url: "#formula1",
  },
  {
    id: "1",
    title: "projects",
    url: "/projects",
  },
  {
    id: "2",
    title: "Technews",
    url: "/tech",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "twitter",
    url: "#twitter",
   
    onlyMobile: true,
  },
  {
    id: "5",
    title: "contact",
    url: "#twitter",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

// export const brainwaveServicesIcons = [
//   recording03,
//   recording01,
//   disc02,
//   chromecast,
//   sliders04,
// ];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  // {
  //   id: "0",
  //   href: "",
  //   title: "Disney+  Hotstar",
  //   description:
  //     "Disney+ Hotstar is available in India and select other regions. However, the availability of F1 content may vary based on licensing agreements and regional restrictions.",
  //   price: "NA",
  //   features: [
  //     "Subscription Plans: Choose from different subscription plans that offer varying levels of access to sports and other content. ",
  //     "Multiple Devices: Stream on various devices, including smartphones, tablets, smart TVs, and computers.",
  //     // "Ability to explore the app and its features without any cost",
  //   ],
  // },
  {
    id: "1",
    href: "https://www.formula1.com/en-in/subscribe-to-f1-tv?from=us&to=in",
    title: "F1 TV Pro",
    description:
      "The official Formula 1 streaming service offers live races ,qualifying and practice .",
    price: "29.9/yr",
    features: [
      "Install the f1 app on your preferred device or visit the Formula 1 website.",
      "An analytics dashboard to track live races",
      "Highlights and Replays: Access race highlights, replays.",
    ],
  },
  {
    id: "2",
    href: "https://the.streameast.app/f1streams7",
    title: "Watch 🌚",
    description: "Conatct us for more quires (illegal)",
    price: "/Free",
    features: [
      "This is a risky method which ",
      "acces to all races, qulaifying and practice",
      // "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "3",
    href: "https://www.skysports.com/f1",
    title: "Watch on Live Televisions",
    description: "Cable and Satellite TV, dedicated channels",
    price: "Free",
    features: [
      "Sky Sports F1: In the UK, live F1 coverage is available on the Sky Sports F1 channel.",
      "ESPN: In the US, ESPN broadcasts F1 races live.",
      "TSN: In Canada, TSN provides live F1 coverage , its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    href: "https://avikkk19.github.io/FitfinityWeb/",
    title: "Fitfinity",
    text: "Created a Fitness website with real-time updates and user interactions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    href: "https://avikkk19.github.io/pokemon-search/",
    title: "Pokemon API",
    text: "Developed full-featured pokemon search web.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    href: "https://avikkk19.github.io/portfolio/",
    title: "Portfolio",
    text: "Designed and built a personal portfolio website to showcase my projects and skills.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    href: "https://github.com/avikkk19",
    title: "My github",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/messages/1717949583177744384-1717949583177744384?text=",
  },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
