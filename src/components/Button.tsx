import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

interface Button {
  title: string;
  icon?: IconProp;
  color: string;
  link: string;
  tooltipTarget: string;
  tooltip?: string;
}

const Button: React.FC<Button> = ({ title, icon, color, link, tooltipTarget, tooltip }) => {
  // definitely there's a better way of doing this
  const bgColor: { [key: string]: string } = {
    rosewater: 'bg-rosewater',
    flamingo: 'bg-flamingo',
    pink: 'bg-pink',
    mauve: 'bg-mauve',
    red: 'bg-red',
    maroon: 'bg-maroon',
    peach: 'bg-peach',
    yellow: 'bg-yellow',
    green: 'bg-green',
    teal: 'bg-teal',
    sky: 'bg-sky',
    sapphire: 'bg-sapphire',
    blue: 'bg-blue',
    lavender: 'bg-lavender',
    grey: 'bg-overlay2',
  };

  return (
    <a
      className={`${bgColor[color]} px-6 py-4 xl:px-4 xl:py-2 rounded-2xl drop-shadow-sm text-crust font-semibold font-fira-condensed transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl active:brightness-75 active:translate-y-1 active:scale-95 active:drop-shadow-none flex flex-row justify-center xl:justify-between gap-x-2 items-center text-2xl xl:text-xl z-10`}
      target='_blank'
      rel={`noreferrer noopener`}
      href={link}
      data-tooltip-id={tooltipTarget}
      // data-tooltip-float
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          fixedWidth
        />
      )}
      <span>{title}</span>
      <Tooltip
        id={tooltipTarget}
        content={tooltip}
        opacity={'0.95'}
        style={{
          background: '#45475a',
          color: '#cdd6f4',
          borderRadius: '16px',
          padding: '10px 18px',
          fontSize: '16px',
        }}
      />
    </a>
  );
};

export default Button;
