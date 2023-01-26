import React, { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import Button from "./Button";

export default function ButtonGroup({ type }) {
  // const json = require("../data/buttons.json");
  const { buttonData } = useContext(AppContext);
  const buttons = useMemo(() => buttonData[type], [buttonData, type]);
  
  return (
    <div className="buttons">
      {buttons.map((link) => (
        <Button
          key={link.name}
          name={link.name}
          icon={link.icon}
          iconType={link.iconType}
          link={link.link}
          color={link.color}
        />
      ))}
    </div>
  );
}
