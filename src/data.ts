import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBehance, faGithub, faLinkedin, faMastodon, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCloudMoon, faComments, faDiceD20, faEnvelope, faPaste } from '@fortawesome/free-solid-svg-icons';

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
  tooltip?: string;
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
      "color": "grey",
      "tooltip": "Check out my GitHub"
    },
    {
      "title": "@vrkknn:vrkknn.net",
      "icon": faComments,
      "link": "https://matrix.to/#/@vrkknn:vrkknn.net",
      "color": "green",
      "tooltip": "Chat with me via Matrix"
    },
    {
      "title": "@vrkknn",
      "icon": faTelegram,
      "link": "https://t.me/vrkknn",
      "color": "blue",
      "tooltip": "Chat with me via Telegram"
    },
    {
      "title": "fredalmeida-",
      "icon": faLinkedin,
      "link": "https://www.linkedin.com/in/fredalmeida-/",
      "color": "sapphire",
      "tooltip": "Find me on LinkedIn"
    },
    {
      "title": "fred@vrkknn.net",
      "icon": faEnvelope,
      "link": "mailto:fred@vrkknn.net",
      "color": "mauve",
      "tooltip": "Send me an email"
    },
    {
      "title": "@Virkkunen@mastodon.social",
      "icon": faMastodon,
      "link": "https://mastodon.social/@Virkkunen",
      "color": "lavender",
      "tooltip": "Find me on Mastodon"
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
      "title": "Timer",
      "icon": faClock,
      "link": "/timer",
      "color": "red",
      "tooltip": "A timer app with sound alerts"
    },
    {
      "title": "Dice",
      "icon": faDiceD20,
      "link": "/dice",
      "color": "green",
      "tooltip": "A simple dice roller with dice notation (2d20+3)"
    },
    {
      "title": "Weather",
      "icon": faCloudMoon,
      "link": "/weather",
      "color": "peach",
      "tooltip": "A weather forecast app"
    },
    {
      "title": "Microbin",
      "icon": faPaste,
      "link": "https://microbin.vrkknn.net",
      "color": "sapphire",
      "tooltip": "A secure text and file sharing web application"
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