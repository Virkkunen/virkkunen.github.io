import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Languages from "../components/Languages";
import CV from "../components/CV";
import ErrorBox from "../components/ErrorBox";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";

export default function Main() {
  const { isLoading, error, buttonData } = useContext(AppContext);

  useEffect(() => {
    if (!buttonData) return;
    // https://www.youtube.com/watch?v=T33NN_pPeNI
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [buttonData]);

  return (
    <div className="content">
      {isLoading && <Loading />}
      {error && <ErrorBox />}
      {buttonData && (
        <div>
          <Header />
          <Contact />
          <CV />
          <Languages />
          <Portfolio />
          <Footer />
        </div>
      )}
    </div>
  );
}
