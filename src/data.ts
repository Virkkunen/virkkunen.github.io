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
      "title": "GitHub",
      "icon": faGithub,
      "link": "https://github.com/Virkkunen",
      "color": "grey",
      "tooltip": "@Virkkunen"
    },
    {
      "title": "Matrix",
      "icon": faComments,
      "link": "https://matrix.to/#/@vrkknn:vrkknn.net",
      "color": "green",
      "tooltip": "@vrkknn:vrkknn.net"
    },
    {
      "title": "Telegram",
      "icon": faTelegram,
      "link": "https://t.me/vrkknn",
      "color": "blue",
      "tooltip": "@vrkknn"
    },
    {
      "title": "LinkedIn",
      "icon": faLinkedin,
      "link": "https://www.linkedin.com/in/fredalmeida-/",
      "color": "sapphire",
      "tooltip": "fredalmeida-"
    },
    {
      "title": "Email",
      "icon": faEnvelope,
      "link": "mailto:fred@vrkknn.net",
      "color": "mauve",
      "tooltip": "fred@vrkknn.net"
    },
    {
      "title": "Mastodon",
      "icon": faMastodon,
      "link": "https://mastodon.social/@Virkkunen",
      "color": "lavender",
      "tooltip": "@Virkkunen@mastodon.social"
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