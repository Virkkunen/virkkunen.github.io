import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faCloudMoon,
  faComments,
  faDiceD20,
  faEnvelope,
  faGamepad,
  faRocket
} from "@fortawesome/free-solid-svg-icons";

interface Data {
  contact: Button[];
  portfolio: Button[];
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
      title: "GitHub",
      icon: faGithub,
      link: "https://github.com/Virkkunen",
      color: "grey",
      tooltip: "@Virkkunen",
    },
    {
      title: "Matrix",
      icon: faComments,
      link: "https://matrix.to/#/@vrkknn:vrkknn.net",
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
  ]
};

export default data;
