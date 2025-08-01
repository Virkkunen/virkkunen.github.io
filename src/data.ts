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
  faHeartPulse,
  faHouse,
  faKiwiBird,
  faRocket,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

interface Data {
  contact: Button[];
  portfolio: Button[];
  services: Button[];
}

interface Button {
  title: string;
  icon: IconProp;
  color: string;
  link: string;
  tooltip?: string;
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
      title: "FHD",
      icon: faHeartPulse,
      link: "https://fit.vrkknn.net/",
      color: "red",
      tooltip: "A Fitbit Grafana dashboard",
    },
    {
      title: "Home Assistant",
      icon: faHouse,
      link: "https://home.vrkknn.net/",
      color: "blue",
      tooltip: "Home automation platform",
    }
  ]
};

export default data;
