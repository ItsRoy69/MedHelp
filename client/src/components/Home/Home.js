import React from 'react'
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Features from "./Features/Features";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";

const Home = ({ customer }) => {
  return (
    <>
        <Navbar />
        <Features />
        <Services customerDetails={customer} />
        <AboutUs />
        <Footer />
    </>
  )
}

export default Home
