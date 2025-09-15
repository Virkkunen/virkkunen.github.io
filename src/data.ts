import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faCloud,
  faCloudMoon,
  faCodeCommit,
  faComments,
  faDiamond,
  faDiceD20,
  faEnvelope,
  faGamepad,
  faHouse,
  faKiwiBird,
  faRocket,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import vrkknn88x31 from './assets/88x31.png'
import jesse88x31 from './assets/jesse88x31.png'
import austinhuang88x31 from './assets/austin88x31.svg'
import nexy88x31 from './assets/nexy88x31.webp'
import sky88x31 from './assets/sky88x31.webp'
import nyx88x31 from './assets/nyx88x31.webp'
import ai88x31 from './assets/dont-feed-ai.gif'
import pan88x31 from './assets/pan.png'
import pride88x31 from './assets/pride.png'
import privacy88x31 from './assets/privacy.webp'
import trans88x31 from './assets/trans.png'
import piracy88x31 from './assets/pirate.webp'

interface Data {
  contact: Button[];
  portfolio: Button[];
  services: Button[];
  oitoOitoTresUm: OitoOitoTresUm[];
}

interface Button {
  title: string;
  icon: IconProp;
  color: string;
  link: string;
  tooltip?: string;
}

interface OitoOitoTresUm {
  title: string;
  image: string;
  link?: string;
  alt?: string;
}

const data: Data = {
  contact: [
    {
      title: "Matrix",
      icon: faComments,
      link: "matrix:u/vrkknn:vrkknn.net?action=chat",
      color: "green",
      tooltip: "@vrkknn:vrkknn.net",
    },
    {
      title: "Signal",
      icon: faSignalMessenger,
      link: "https://signal.me/#eu/70VOPP1AR3AlkpY-Il97_FWnBIZO6-iD_mkGYLmnfpB4KfLGDOpD5rp1CVNmqLR8",
      color: "blue",
      tooltip: "Virkkunen.119",
    },
    {
      title: "Email",
      icon: faEnvelope,
      link: "mailto:vrkknn@vrkknn.net",
      color: "mauve",
      tooltip: "vrkknn@vrkknn.net",
    },
    {
      title: "GitHub",
      icon: faGithub,
      link: "https://github.com/Virkkunen",
      color: "grey",
      tooltip: "@Virkkunen",
    }
  ],
  portfolio: [
    {
      title: "Itch.io",
      icon: faGamepad,
      link: "https://virkkunen.itch.io/",
      color: "lavender",
      tooltip: "My games",
    },
    {
      title: "twentyone",
      icon: faDiamond,
      link: "https://virkkunen.itch.io/twentyone",
      color: "sapphire",
      tooltip: "A Blackjack game for Android and Web",
    },
    {
      title: "Kessleroids",
      icon: faRocket,
      link: "https://virkkunen.itch.io/kessleroids",
      color: "green",
      tooltip: "An Asteroids-like made in Godot",
    },
    {
      title: "Timer",
      icon: faClock,
      link: "/timer",
      color: "red",
      tooltip: "A timer app with sound alerts",
    },
    {
      title: "Dice",
      icon: faDiceD20,
      link: "/dice",
      color: "green",
      tooltip: "A simple dice roller with dice notation (2d20+3)",
    },
    {
      title: "Weather",
      icon: faCloudMoon,
      link: "/weather",
      color: "peach",
      tooltip: "A weather forecast app",
    },
  ],
  services: [
    {
      title: "Uptime",
      icon: faServer,
      link: "https://up.vrkknn.net/status/all",
      color: "red",
      tooltip: "Check status for all services",
    },
    {
      title: "NextCloud",
      icon: faCloud,
      link: "https://next.vrkknn.net/",
      color: "sapphire",
      tooltip: "Self hosted productivity platform",
    },
    {
      title: "Cinny",
      icon: faKiwiBird,
      link: "https://cinny.vrkknn.net/",
      color: "grey",
      tooltip: "Web based Matrix client",
    },
    {
      title: "OpenGist",
      icon: faCodeCommit,
      link: "https://gist.vrkknn.net/",
      color: "lavender",
      tooltip: "FOSS pastebin powered by Git",
    },
    {
      title: "Home Assistant",
      icon: faHouse,
      link: "https://home.vrkknn.net/",
      color: "blue",
      tooltip: "Home automation platform",
    }
  ],
  oitoOitoTresUm: [
    {
      title: "This is where you are now",
      image: vrkknn88x31,
    },
    {
      title: "cpluspatch.com",
      image: jesse88x31,
      link: "https://cpluspatch.com",
      alt: "The text 'Jesse' overlaid on a dark rectangle with rainbow stripes on the top left. A small drawn character is present on the left.",

    },
    {
      title: "codestorm.net",
      image: sky88x31,
      link: "https://timedout.uk",
    },
    {
      title: "austinhuang.me",
      image: austinhuang88x31,
      link: "https://austinhuang.me",
    },
    {
      title: "timedout.uk",
      image: nexy88x31,
      link: "https://timedout.uk",
    },
    {
      title: "ip-logger.com",
      image: nyx88x31,
      link: "https://ip-logger.com",
    },
    {
      title: "Internet privacy now!",
      image: privacy88x31,
      link: "https://www.privacyguides.org/en/basics/why-privacy-matters/"
    },
    {
      title: "Trans ally!",
      image: trans88x31,
    },
    {
      title: "Pride!",
      image: pride88x31,
    },
    {
      title: "Pan!",
      image: pan88x31,
    },
    {
      title: "Down with AI!",
      image: ai88x31,
    },
    {
      title: "Buying isn't owning, piracy isn't stealing",
      image: piracy88x31,
    },
  ]
};

export default data;
