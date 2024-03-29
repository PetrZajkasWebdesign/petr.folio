import React from "react";
import { Helmet } from "react-helmet";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Features,
  Footerlinks,
} from "./container";
import { Navbar } from "./components";

import "./App.scss";
import "react-tooltip/dist/react-tooltip.css";
import '../node_modules/flag-icon-css/css/flag-icons.min.css'

const App = () => {

  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>APPvalanche</title>
        <link rel="canonical" href="https://appvalanche.com/" />
        <meta name="APPvalanche" content="Portfolio" />
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <Footerlinks />
    </div>
  );
};

export default App;
