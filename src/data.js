import {
    faCheck,
    faCode,
    faInfinity,
    faWandMagicSparkles,
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";
  
  import {
    ClickUp,
    Basedash,
    Beeper,
    Bento,
    Cal,
    Campsite,
    Convy,
    Cron,
    Cursor,
    Grain,
    Kitemaker,
    Linear,
    Moises,
    Morgen,
    NotionCalender,
    Rise,
    Sunsama,
    Typefully,
    Unbounce,
    VoiceFlow,
    Webstudio,
    LifeAt,
    Conjure,
    nativeNotification,
    autoUpdates,
    plugins,
    apis,
    lookAndFeel,
    installers,
    CustomerAvatar,
    CustomerPic,
    BasedashAvatar,
    BasedashPic,
    LifeAtAvatar,
    LifeAtPic,
    blogUser1,
    blog1,
    blog2,
    blog3,
    blog4,
  } from "./assets";
  
  export const items = [
    { id: 1, name: "LifeAt", img: LifeAt },
    { id: 2, name: "Convy", img: Convy },
    { id: 3, name: "Morgen", img: Morgen },
    { id: 4, name: "Campsite", img: Campsite },
    { id: 5, name: "Rise", img: Rise },
    { id: 6, name: "ClickUp", img: ClickUp },
    { id: 7, name: "NotionCalender", img: NotionCalender },
    { id: 8, name: "Sunsama", img: Sunsama },
    { id: 9, name: "Beeper", img: Beeper },
    { id: 10, name: "Cal", img: Cal },
    { id: 11, name: "Webstudio", img: Webstudio },
    { id: 12, name: "Typefully", img: Typefully },
    { id: 13, name: "Unbounce", img: Unbounce },
    { id: 14, name: "Moises", img: Moises },
    { id: 14, name: "Basedash", img: Basedash },
    { id: 15, name: "Cursor", img: Cursor },
    { id: 16, name: "Linear", img: Linear },
    { id: 17, name: "Voiceflow", img: VoiceFlow },
    { id: 18, name: "Kitemaker", img: Kitemaker },
    { id: 19, name: "Cron", img: Cron },
    { id: 20, name: "Bento", img: Bento },
    { id: 21, name: "Grain", img: Grain },
  ];
  export const line2ItemsLg = [
    { id: 1, name: "Unbounce", img: Unbounce },
    { id: 2, name: "Moises", img: Moises },
    { id: 3, name: "Basedash", img: Basedash },
    { id: 4, name: "Cursor", img: Cursor },
    { id: 5, name: "Linear", img: Linear },
    { id: 6, name: "Voiceflow", img: VoiceFlow },
    { id: 7, name: "Kitemaker", img: Kitemaker },
    { id: 8, name: "Cron", img: Cron },
    { id: 9, name: "Bento", img: Bento },
    { id: 10, name: "Grain", img: Grain },
    { id: 11, name: "Conjure", img: Conjure },
  ];
  
  // Ensure unique subsets
  export const line1Items = items.slice(0, 7); // First 7 items
  export const line2Items = items.slice(7, 14); // Next 7 items
  export const line3Items = items.slice(14); // Remaining items
  export const line1ItemsLg = items.slice(0, 14);
  
  // console.log(line2ItemsLg);
  
  export const stepsItem = [
    {
      id: 1,
      name: "Multiple windows",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 2,
      name: "Customizable menus",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 3,
      name: "Menubar/tray menus",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 4,
      name: "Launch on startup",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 5,
      name: "Offline support",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 6,
      name: "Tabs (Mac only)",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
  ];
  
  export const steps2Item = [
    {
      id: 1,
      name: "Native notifications",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 2,
      name: "Global keyboard shortcuts",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 3,
      name: "Application menu",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 4,
      name: "Context menu",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 5,
      name: "Dock/Icon",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 6,
      name: "Isolated browser views",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 7,
      name: "File system access",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 8,
      name: "…plus more APIs in our docs",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
  ];
  
  export const steps3Item = [
    {
      id: 1,
      name: "Multiple windows",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 2,
      name: "Customizable menus",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 3,
      name: "Menubar/tray menus",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 4,
      name: "Launch on startup",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 5,
      name: "Offline support",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
    {
      id: 6,
      name: "Tabs (Mac only)",
      href: "https://www.todesktop.com/docs/tutorials/multi-window-todomvc",
    },
  ];
  
  export const details = [
    { id: 1, name: "Native Notifications", img: nativeNotification },
    {
      id: 2,
      name: "Auto Updates",
      img: autoUpdates,
      text: "We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.",
    },
    { id: 3, name: "Plugins", img: plugins },
    {
      id: 4,
      name: "Access to Native APIs",
      img: apis,
      text: "ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.",
    },
    { id: 5, name: "Customizable look and feel", img: lookAndFeel },
    {
      id: 6,
      name: "Native Installers",
      img: installers,
      text: "We even provide a magic link which will detect your users operating system & download the most up to date version of your app.",
    },
  ];
  
  // testimonials ClickUp tags
  export const ClickUpTags = [
    { name: "Chromeless UI" },
    { name: "Native spellcheck" },
    { name: "Task time in menubar" },
    { name: "Notification count in the dock" },
    { name: "Global hotkey to create task" },
  ];
  
  export const testimonials = [
    {
      icon: faCode,
      title: "Native APIs",
      text: "What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.",
      pic1: CustomerAvatar,
      pic2: CustomerPic,
      name: "Rick Pastoor",
      company: "Rise",
    },
    {
      icon: faWandMagicSparkles,
      title: "Cleaner, less cluttered UI",
      text: "Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop.",
      pic1: BasedashAvatar,
      pic2: BasedashPic,
      name: "Max Musing",
      company: "Basedash",
    },
    {
      icon: faInfinity,
      title: "Code optional",
      text: "It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries.",
      pic1: LifeAtAvatar,
      pic2: LifeAtAvatar,
      name: "Pouya Rad",
      company: "LifeAt",
    },
  ];
  
  export const pricingDetails = [
    {
      id: 1,
      title: "Free",
      text: "For personal use or testing your app before deploying to customers.",
      subTitle: "",
      features: [
        { icon: faCheck, text: "Free for personal use" },
        { icon: faCheck, text: "Run app locally" },
        { icon: faXmark, text: "No Code Signing" },
        { icon: faXmark, text: "No Native Installers" },
      ],
    },
    {
      id: 2,
      title: "Essential",
      text: "For simple desktop apps.",
      price: "$100/month",
      subTitle: "Key Features",
      features: [
        { icon: faCheck, text: "Windows, Mac & Linux" },
        { icon: faCheck, text: "Code Signing" },
        { icon: faCheck, text: "Native Installers" },
        { icon: faCheck, text: "Email/chat support" },
      ],
    },
    {
      id: 3,
      title: "Professional",
      text: "For sophisticated desktop apps.",
      price: "$240/month",
      subTitle: "Everything in Essential Plus",
      features: [
        { icon: faCheck, text: "Branded Download links" },
        { icon: faCheck, text: "Analytics" },
        { icon: faCheck, text: "Access to Plugins" },
        { icon: faCheck, text: "Access to restricted API" },
      ],
    },
  ];
  
  export const Faqs= [
    {
      id: 1,
      title: "Is ToDesktop For Me?",
      text: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you. If you want to make a desktop app of a website for your personal use, ToDesktop is overkill. What’s the difference? There are extra considerations when creating a desktop app for distribution to customers, such as Installer, Code Signing, and Auto-update.",
    },
    {
      id: 2,
      title: 'Can I try ToDesktop without buying?',
      text: 'Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the “Run” button. Should you decide to distribute your application to a wider audience—complete with code signing and a native installer—you’ll need to purchase a subscription.'
    },
    {
      id: 3,
      title: 'Do you collect or store data about my customers?',
      text: 'No. When a ToDesktop app opens it contacts our servers to check if an update is available. We do not collect or store any user data from these requests.'
    },
    {
      id: 4,
      title: 'Does ToDesktop work with sites built with ___?',
      text: 'ToDesktop works with sites built with any technology stack. If it works in your browser, it will work as a ToDesktop app.'
    },
    {
      id: 5,
      title: 'What features are on the product roadmap?',
      text: 'If you have any suggestions, we’d love to hear! Please send us an email at support@todesktop.com or send us a message.'
    },
    {
      id: 6,
      title: 'How does ToDesktop work under the hood?',
      text: 'It can help to think of ToDesktop as a custom web browser dedicated to your web app or website. It shows a live version of your site or web app at all times, just like a web browser. There is no toolbar or address bar or refresh buttons but it behaves and functions just like a web browser. This means you don’t need to do anything to your existing site, it will just work. If your site works in Google Chrome then it is compatible with ToDesktop.\n ToDesktop uses a technology called Electron. You don’t need Electron (or even coding) experience to create a desktop app with ToDesktop. Rest assured, the underlying “browser” engine is updated regularly through auto-updates. So the desktop version of your app will always have the latest web features available.'
    }
  ];
  
  export const blogHeader = {
    title: "ToDesktop Blog",
    subtitle: "We cover topics related to Electron, desktop apps, and the ToDesktop platform.",
  };
  
  export const blogData = [
    {
      id: 1,
      date: "Jan 18, 2024",
      tags: ["Electron", "Tauri", "macOS", "Windows", "Linux", "Design"],
      title: "Designing desktop apps for cross-platform UX",
      text: "Designing and converting web apps into desktop apps can be challenging due to differences in conventions between the two platforms. To help with this, we’ve compiled guidelines to follow when using cross-platform technologies like Electron and Tauri to build desktop apps.",
      author: {
        name: "Isaac Aderogba",
        role: "Developer",
        image: blogUser1,
      },
      image: blog1,
    },
    {
      id: 2,
      date: "Jan 4, 2024",
      tags: ["ToDesktop Builder", "Tailwind", "CSS", "Electron"],
      title: "Using Tailwind for styling with ToDesktop Builder",
      text: "We're thrilled to announce a significant enhancement for developers using ToDesktop for their desktop app creation: Tailwind CSS support! This new feature stems from a simple yet powerful idea—integrating ToDesktop-specific Tailwind modifiers like todesktop:hidden and mac:rounded-lg. This integration streamlines the styling process, enabling developers to apply platform-specific styles effortlessly, without the need for a separate global.css file.",
      author: {
        name: "John Doe",
        role: "Frontend Developer",
        image: "https://cdn.sanity.io/images/3nkwxp2d/production/1e9ee67e55553fbdd9f210abbe33b6419bf0b2e1-1665x1665.jpg?w=50&h=50",
      },
      image: blog2,
    },
    {
      id: 3,
      date: "Feb 10, 2024",
      tags: ["Cross-platform", "UI/UX", "Best Practices"],
      title: "Top 5 tips for designing cross-platform apps",
      text: "Discover the best practices for creating seamless experiences across different platforms. From consistent UI components to responsive design principles, these tips will elevate your app's user experience.",
      author: {
        name: "Jane Smith",
        role: "UI/UX Designer",
        image: "https://cdn.sanity.io/images/3nkwxp2d/production/1e9ee67e55553fbdd9f210abbe33b6419bf0b2e1-1665x1665.jpg?w=50&h=50",
      },
      image: "https://cdn.sanity.io/images/3nkwxp2d/production/796ce0ee84c240d9de2d191fcbcc7f1ee193d00f-1024x1024.png?rect=63,0,898,1024&w=320&h=365",
    },
    {
      id: 4,
      date: "Oct 27, 2023",
      tags: ["Cross-platform", "Electron", "Debugging"],
      title: "Decompile an Electron App: A Step-by-Step Guide",
      text: "In this article, we will guide you through the process of decompiling a production Electron app on Mac or Windows. I've found this useful for debugging issues that only seem to appear in the production app but not in development. It's also a neat trick if you want to look into the source of any Electron Application.",
      author: {
        name: "Dave Jeffery",
        role: "Founder of ToDesktop",
        image: "https://cdn.sanity.io/images/3nkwxp2d/production/1e9ee67e55553fbdd9f210abbe33b6419bf0b2e1-1665x1665.jpg?w=50&h=50",
      },
      image: blog4,
    },
  ];