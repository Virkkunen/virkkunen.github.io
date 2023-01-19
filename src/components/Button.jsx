import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button(props) {
  const { icon, iconType, name, color, link } = props;
  return (
    <a
      type="button"
      name={name}
      className={`hidden ${color}`}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon && <FontAwesomeIcon icon={[iconType, icon]} size="lg" />}
      {name}
    </a>
  );
}
