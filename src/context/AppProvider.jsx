import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonData, setButtonData] = useState(null);

  useEffect(() => {
    getButtonData();
  }, []);

  useEffect(() => {
    buttonData ? setIsLoading(false) : setIsLoading(true);
  }, [buttonData]);

  const getButtonData = async () => {
    const bData = await fetch(
      "https://raw.githubusercontent.com/Virkkunen/virkkunen.github.io/master/assets/data/buttons.json"
    );
    const response = await bData.json();
    setButtonData(response);
  };

  return (
    <AppContext.Provider value={{ isLoading, buttonData }}>
      {children}
    </AppContext.Provider>
  );
}
