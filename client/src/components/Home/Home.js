import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Features from "./Features/Features";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

export default function Home({ customer }) {
  return (
    <>
        <Navbar /> 
        <Features />      
        <Services customerDetails={customer} />     
        <AboutUs />
        <Team />
        <Footer />
    </>
  );
}
