import React from "react";
import Devicon from "./Devicon";

export default function Languages() {
  const size = "48px";
  const json = require("../data/buttons.json");
  const icons = json.devicons;
  return (
    <div className="box hidden">
      <h1>Stuff I know</h1>
      <div className="buttons-small">
        {icons.map((icon) => (
          <Devicon
            name={icon.name}
            iconStyle={icon.iconStyle}
            svgStyle={icon.svgStyle}
            size={size}
            key={icon.name}
            svg={true}
          />
        ))}
      </div>
    </div>
  );
}
