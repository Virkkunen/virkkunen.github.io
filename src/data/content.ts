export interface Button {
  title: string;
  icon: string;
  colour: string;
  link: string;
  tooltip: string;
}

export interface Badge {
  title: string;
  image: string;
  link?: string;
  alt?: string;
}

export interface SiteData {
  contact: Button[];
  projects: Button[];
  services: Button[];
  badges: Badge[];
}

export const siteData: SiteData = {
  contact: [
    {
      title: "Matrix",
      icon: "fa-comments",
      link: "matrix:u/vrkknn:vrkknn.net?action=chat",
      colour: "var(--color-ctp-green)",
      tooltip: "@vrkknn:vrkknn.net",
    },
    {
      title: "Signal",
      icon: "fa-brands fa-signal-messenger",
      link:
        "https://signal.me/#eu/70VOPP1AR3AlkpY-Il97_FWnBIZO6-iD_mkGYLmnfpB4KfLGDOpD5rp1CVNmqLR8",
      colour: "var(--color-ctp-blue)",
      tooltip: "Virkkunen.119",
    },
    {
      title: "Email",
      icon: "fa-envelope",
      link: "mailto:vrkknn@vrkknn.net",
      colour: "var(--color-ctp-mauve)",
      tooltip: "vrkknn@vrkknn.net",
    },
    {
      title: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/Virkkunen",
      colour: "var(--color-ctp-overlay2)",
      tooltip: "@Virkkunen",
    },
  ],
  projects: [
    {
      title: "Itch.io",
      icon: "fa-gamepad",
      link: "https://virkkunen.itch.io/",
      colour: "var(--color-ctp-lavender)",
      tooltip: "My games",
    },
    {
      title: "twentyone",
      icon: "fa-diamond",
      link: "https://virkkunen.itch.io/twentyone",
      colour: "var(--color-ctp-sapphire)",
      tooltip: "A Blackjack game for Android and Web",
    },
    {
      title: "Kessleroids",
      icon: "fa-rocket",
      link: "https://virkkunen.itch.io/kessleroids",
      colour: "var(--color-ctp-green)",
      tooltip: "An Asteroids-like made in Godot",
    },
    {
      title: "Timer",
      icon: "fa-clock",
      link: "/timer",
      colour: "var(--color-ctp-red)",
      tooltip: "A timer app with sound alerts",
    },
    {
      title: "Dice",
      icon: "fa-dice",
      link: "/dice",
      colour: "var(--color-ctp-teal)",
      tooltip: "A simple dice roller with dice notation (2d20+3)",
    },
    {
      title: "Weather",
      icon: "fa-cloud-moon",
      link: "/weather",
      colour: "var(--color-ctp-peach)",
      tooltip: "A weather forecast app",
    },
  ],
  services: [
    {
      title: "Uptime",
      icon: "fa-server",
      link: "https://up.vrkknn.net/status/all",
      colour: "var(--color-ctp-red)",
      tooltip: "Check status for all services",
    },
    {
      title: "Cinny",
      icon: "fa-kiwi-bird",
      link: "https://cinny.vrkknn.net/",
      colour: "var(--color-ctp-overlay2)",
      tooltip: "Web based Matrix client",
    },
    {
      title: "OpenGist",
      icon: "fa-code-commit",
      link: "https://gist.vrkknn.net/",
      colour: "var(--color-ctp-lavender)",
      tooltip: "FOSS pastebin powered by Git",
    },
  ],
  badges: [
    {
      title: "This is where you are now",
      image: "/assets/88x31.png",
    },
    {
      title: "cpluspatch.com",
      image: "https://cpluspatch.com/images/icons/88x31.png",
      link: "https://cpluspatch.com",
      alt:
        "The text 'Jesse' overlaid on a dark rectangle with rainbow stripes on the top left. A small drawn character is present on the left.",
    },
    {
      title: "codestorm.net",
      image: "https://codestorm.net/buttons/sky.gif",
      link: "https://codestorm.net",
    },
    {
      title: "austinhuang.me",
      image: "https://austinhuang.me/assets/88x31.svg",
      link: "https://austinhuang.me",
    },
    {
      title: "timedout.uk",
      image: "https://timedout.uk/88x31s/nexy7574-new.gif",
      link: "https://timedout.uk",
    },
    {
      title: "squarebowl.club",
      image: "https://squarebowl.club/images/88x31/plate.gif",
      link: "https://squarebowl.club/",
    },
    {
      title: "gingershaped.computer",
      image: "https://gingershaped.computer/8831/button.png",
      link: "https://gingershaped.computer/",
      alt: "ginger's 88x31 button"
    },
    {
      title: "neoshadow.co",
      image: "https://neoshadow.co/88x31.gif",
      link: "https://neoshadow.co/",
    },
    {
      title: "seija-amanojaku",
      image: "https://seija-amanojaku.github.io/media/8831.gif",
      link: "https://seija-amanojaku.github.io/",
    },
    {
      title: "Trans ally!",
      image: "https://badge.les.bi/88x31/trans/trans/half.png",
    },
    {
      title: "Pride!",
      image: "https://badge.les.bi/88x31/rainbow/rainbow/half.png",
    },
    {
      title: "Pan!",
      image: "https://badge.les.bi/88x31/pan/pan/half.png",
    },
    {
      title: "Internet privacy now!",
      image: "/assets/badges/privacy.webp",
      link: "https://www.privacyguides.org/en/basics/why-privacy-matters/",
    },
    {
      title: "Down with AI!",
      image: "/assets/badges/dont-feed-ai.gif",
    },
    {
      title: "If buying isn't owning, piracy isn't stealing",
      image: "/assets/badges/pirate.webp",
    },
  ],
};
