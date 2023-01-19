import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Devicon from "./Devicon";

export default function Languages() {
  const size = "48px";
  const { buttonData: { devicons } } = useContext(AppContext);
  return (
    <div className="box hidden">
      <h1>Stuff I know</h1>
      <div className="buttons-small">
        {devicons.map((icon) => (
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
