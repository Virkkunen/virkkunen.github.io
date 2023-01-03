import React, { Component } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Languages from "../components/Languages";
import CV from "../components/CV";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

export default class Main extends Component {
  componentDidMount() {
    // https://www.youtube.com/watch?v=T33NN_pPeNI
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }
  render() {
    return (
      <div className="content">
        <Header />
        <Contact />
        <CV />
        <Languages />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}
