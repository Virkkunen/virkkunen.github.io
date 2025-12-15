export interface Button {
  title: string
  icon: string
  colour: string
  link: string
  tooltip?: string
}

export interface Badge {
  title: string
  image: string
  link?: string
  alt?: string
}

export interface SiteData {
  contact: Button[]
  projects: Button[]
  services: Button[]
  badges: Badge[]
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
      link: "https://signal.me/#eu/70VOPP1AR3AlkpY-Il97_FWnBIZO6-iD_mkGYLmnfpB4KfLGDOpD5rp1CVNmqLR8",
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
    }
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
    }
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
      title: "NextCloud",
      icon: "fa-cloud",
      link: "https://next.vrkknn.net/",
      colour: "var(--color-ctp-sapphire)",
      tooltip: "Self hosted productivity platform",
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
    {
      title: "Home Assistant",
      icon: "fa-house",
      link: "https://home.vrkknn.net/",
      colour: "var(--color-ctp-blue)",
      tooltip: "Home automation platform",
    }
  ],
  badges: [
    {
      title: "This is where you are now",
      image: "/assets/88x31.png",
    },
    {
      title: "cpluspatch.com",
      image: "/assets/badges/jesse88x31.png",
      link: "https://cpluspatch.com",
      alt: "The text 'Jesse' overlaid on a dark rectangle with rainbow stripes on the top left. A small drawn character is present on the left.",

    },
    {
      title: "codestorm.net",
      image: "/assets/badges/sky88x31.webp",
      link: "https://codestorm.net",
    },
    {
      title: "austinhuang.me",
      image: "/assets/badges/austin88x31.svg",
      link: "https://austinhuang.me",
    },
    {
      title: "timedout.uk",
      image: "/assets/badges/nexy88x31.webp",
      link: "https://timedout.uk",
    },
    {
      title: "ip-logger.com",
      image: "/assets/badges/nyx88x31.webp",
      link: "https://ip-logger.com",
    },
    {
      title: "Internet privacy now!",
      image: "/assets/badges/privacy.webp",
      link: "https://www.privacyguides.org/en/basics/why-privacy-matters/"
    },
    {
      title: "Trans ally!",
      image: "/assets/badges/trans.png",
    },
    {
      title: "Pride!",
      image: "/assets/badges/pride.png",
    },
    {
      title: "Pan!",
      image: "/assets/badges/pan.png",
    },
    {
      title: "Down with AI!",
      image: "/assets/badges/dont-feed-ai.gif",
    },
    {
      title: "If buying isn't owning, piracy isn't stealing",
      image: "/assets/badges/pirate.webp",
    }
  ]
}