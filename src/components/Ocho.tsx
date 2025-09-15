import { Tooltip } from 'react-tooltip';

interface OchoOchoTresUno {
  title: string;
  image: string;
  link?: string;
  alt?: string;
  tooltipTarget: string;
}

const Ocho: React.FC<OchoOchoTresUno> = ({ title, image, link, alt, tooltipTarget }) => {
  return (
    <a
      target='_blank'
      rel='noreferrer noopener'
      href={link}
      data-tooltip-id={tooltipTarget}
      className={`drop-shadow-sm text-crust font-semibold font-fira-condensed transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl`}
    >
      <img
        src={image}
        alt={alt ?? title}
        key={title}
        width='88'
        height='31'
      />
      <Tooltip
        id={tooltipTarget}
        content={title}
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

export default Ocho;
