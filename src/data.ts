import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBehance, faGithub, faLinkedin, faMastodon, faReact, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBowlFood, faClock, faCloudMoon, faDiceD20, faEnvelope, faStore } from '@fortawesome/free-solid-svg-icons';

interface Data {
  contact: Button[];
  portfolio: Button[];
  languages: Test[];
}

interface Button {
  title: string;
  icon: IconProp;
  color: string;
  link: string;
}

interface Test {
  [key: string]: string;
}

const data: Data = {
  "contact": [
    {
      "title": "Virkkunen",
      "icon": faGithub,
      "link": "https://github.com/Virkkunen",
      "color": "grey"
    },
    {
      "title": "@vrkknn",
      "icon": faTelegram,
      "link": "https://t.me/vrkknn",
      "color": "blue"
    },
    {
      "title": "fredalmeida-",
      "icon": faLinkedin,
      "link": "https://www.linkedin.com/in/fredalmeida-/",
      "color": "sapphire"
    },
    {
      "title": "fred@vrkknn.net",
      "icon": faEnvelope,
      "link": "mailto:vrkknn@vrkknn.net",
      "color": "mauve"
    },


    {
      "title": "WhatsApp",
      "icon": faWhatsapp,
      "link": "https://wa.link/t1uuz0",
      "color": "green"
    },
    {
      "title": "@Virkkunen@mastodon.social",
      "icon": faMastodon,
      "link": "https://mastodon.social/@Virkkunen",
      "color": "lavender"
    }
  ],
  "portfolio": [
    {
      "title": "Art portfolio",
      "icon": faBehance,
      "link": "https://www.behance.net/vrkknn",
      "color": "blue"
    },
    {
      "title": "Trybe Projects",
      "icon": faReact,
      "link": "https://github.com/Virkkunen/trybe/tree/master/projetos",
      "color": "green"
    },
    {
      "title": "Timer",
      "icon": faClock,
      "link": "/timer",
      "color": "red"
    },
    {
      "title": "Dice",
      "icon": faDiceD20,
      "link": "/dice",
      "color": "green"
    },
    {
      "title": "Recipes",
      "icon": faBowlFood,
      "link": "https://tryberecipes.vercel.app",
      "color": "mauve"
    },
    {
      "title": "Store Manager",
      "icon": faStore,
      "link": "https://github.com/Virkkunen/store-manager/",
      "color": "teal"
    },
    {
      "title": "Weather",
      "icon": faCloudMoon,
      "link": "/weather",
      "color": "peach"
    }
  ],
  "languages": [
    {
      "title": "android",
      "iconStyle": "plain"
    },
    {
      "title": "apple",
      "iconStyle": "original"
    },
    {
      "title": "bash",
      "iconStyle": "plain"
    },
    {
      "title": "bootstrap",
      "iconStyle": "plain"
    },
    {
      "title": "css3",
      "iconStyle": "plain"
    },
    {
      "title": "dart",
      "iconStyle": "original"
    },
    {
      "title": "django",
      "iconStyle": "plain",
      "svgStyle": "plain"
    },
    {
      "title": "docker",
      "iconStyle": "plain"
    },
    {
      "title": "express",
      "iconStyle": "original"
    },
    {
      "title": "flutter",
      "iconStyle": "original"
    },
    {
      "title": "git",
      "iconStyle": "plain"
    },
    {
      "title": "github",
      "iconStyle": "original"
    },
    {
      "title": "html5",
      "iconStyle": "plain"
    },
    {
      "title": "javascript",
      "iconStyle": "plain"
    },
    {
      "title": "jira",
      "iconStyle": "plain"
    },
    {
      "title": "linux",
      "iconStyle": "plain"
    },
    {
      "title": "materialui",
      "iconStyle": "plain",
      "svgStyle": "original"
    },
    {
      "title": "markdown",
      "iconStyle": "original"
    },
    {
      "title": "mysql",
      "iconStyle": "plain",
      "svgStyle": "original"
    },
    {
      "title": "nodejs",
      "iconStyle": "plain",
      "svgStyle": "original"
    },
    {
      "title": "python",
      "iconStyle": "plain"
    },
    {
      "title": "raspberrypi",
      "iconStyle": "line"
    },
    {
      "title": "react",
      "iconStyle": "original"
    },
    {
      "title": "redux",
      "iconStyle": "original"
    },
    {
      "title": "sass",
      "iconStyle": "original",
      "svgStyle": "original"
    },
    {
      "title": "tailwindcss",
      "iconStyle": "plain",
      "svgStyle": "plain"
    },
    {
      "title": "trello",
      "iconStyle": "plain",
      "svgStyle": "plain"
    },
    {
      "title": "typescript",
      "iconStyle": "plain",
      "svgStyle": "plain"
    },
    {
      "title": "vscode",
      "iconStyle": "plain"
    },
    {
      "title": "windows8",
      "iconStyle": "original"
    }
  ]
}

export default data;