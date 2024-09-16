import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBehance,
  faGithub,
  faLinkedin,
  faMastodon,
  faTelegram,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCat,
  faClock,
  faCloudMoon,
  faComments,
  faDiceD20,
  faEnvelope,
  faPalette,
  faRocket
} from "@fortawesome/free-solid-svg-icons";

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
      title: "Telegram",
      icon: faTelegram,
      link: "https://t.me/vrkknn",
      color: "sky",
      tooltip: "@vrkknn",
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/fredalmeida-/",
      color: "sapphire",
      tooltip: "fredalmeida-",
    },
    {
      title: "Email",
      icon: faEnvelope,
      link: "mailto:vrkknn@vrkknn.net",
      color: "mauve",
      tooltip: "vrkknn@vrkknn.net",
    },
    {
      title: "Mastodon",
      icon: faMastodon,
      link: "https://mastodon.social/@Virkkunen",
      color: "lavender",
      tooltip: "@Virkkunen@mastodon.social",
    },
  ],
  portfolio: [
    {
      title: "Kessleroids",
      icon: faRocket,
      link: "https://virkkunen.itch.io/kessleroids",
      color: "green",
      tooltip: "An Asteroids-like made in Godot",
    },
    {
      title: "Art portfolio",
      icon: faBehance,
      link: "https://www.behance.net/vrkknn",
      color: "blue",
    },
    {
      title: "INPRNT",
      icon: faPalette,
      link: "https://inprnt.com/gallery/virkkunen",
      color: "sky",
      tooltip: "Buy my artwork!",
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
    {
      title: "Lattla.art",
      icon: faCat,
      link: "https://lattla.art",
      color: "mauve",
      tooltip: "Latt-la's homepage",
    },
  ],
  languages: [
    {
      title: "android",
      iconStyle: "plain",
    },
    {
      title: "apple",
      iconStyle: "original",
    },
    {
      title: "bash",
      iconStyle: "plain",
    },
    {
      title: "bootstrap",
      iconStyle: "plain",
    },
    {
      title: "css3",
      iconStyle: "plain",
    },
    {
      title: "dart",
      iconStyle: "original",
    },
    {
      title: "django",
      iconStyle: "plain",
      svgStyle: "plain",
    },
    {
      title: "docker",
      iconStyle: "plain",
    },
    {
      title: "express",
      iconStyle: "original",
    },
    {
      title: "flutter",
      iconStyle: "original",
    },
    {
      title: "git",
      iconStyle: "plain",
    },
    {
      title: "github",
      iconStyle: "original",
    },
    {
      title: "html5",
      iconStyle: "plain",
    },
    {
      title: "javascript",
      iconStyle: "plain",
    },
    {
      title: "jira",
      iconStyle: "plain",
    },
    {
      title: "linux",
      iconStyle: "plain",
    },
    {
      title: "materialui",
      iconStyle: "plain",
      svgStyle: "original",
    },
    {
      title: "markdown",
      iconStyle: "original",
    },
    {
      title: "mysql",
      iconStyle: "plain",
      svgStyle: "original",
    },
    {
      title: "nodejs",
      iconStyle: "plain",
      svgStyle: "original",
    },
    {
      title: "python",
      iconStyle: "plain",
    },
    {
      title: "raspberrypi",
      iconStyle: "line",
    },
    {
      title: "react",
      iconStyle: "original",
    },
    {
      title: "redux",
      iconStyle: "original",
    },
    {
      title: "sass",
      iconStyle: "original",
      svgStyle: "original",
    },
    {
      title: "tailwindcss",
      iconStyle: "plain",
      svgStyle: "plain",
    },
    {
      title: "trello",
      iconStyle: "plain",
      svgStyle: "plain",
    },
    {
      title: "typescript",
      iconStyle: "plain",
      svgStyle: "plain",
    },
    {
      title: "vscode",
      iconStyle: "plain",
    },
    {
      title: "windows8",
      iconStyle: "original",
    },
  ],
};

export default data;
