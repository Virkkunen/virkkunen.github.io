import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [buttonData, setButtonData] = useState(null);
  const { error, isLoading, fetchData } = useFetch();

  const jsonUrl = "https://raw.githubusercontent.com/Virkkunen/virkkunen.github.io/master/assets/data/buttons.json"

  useEffect(() => {
    const getButtonData = async (url) => {
      const bData = await fetchData(url);
      setButtonData(bData);
    };
    if (!buttonData) getButtonData(jsonUrl);
  }, [fetchData, buttonData]);

  return (
    <AppContext.Provider value={{ buttonData, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
}
