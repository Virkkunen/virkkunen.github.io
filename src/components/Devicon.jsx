import React from "react";
import "devicon";

export default function Devicon(props) {
  const {
    name,
    iconStyle,
    svgStyle = "original",
    size = "1rem",
    color = "",
    svg,
  } = props;

  if (svg) {
    const srcLink = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${svgStyle}.svg`;
    return (
      <img className='hidden' src={srcLink} alt={name} width={size} height={size} title={name} />
    );
  }

  const iconClass = `hidden devicon-${name}-${iconStyle} colored`;

  let style = {
    fontSize: size,
  };
  if (size) style.fontSize = size;
  if (color) style.color = color;

  return <i className={iconClass} style={style} title={name} />;
}
