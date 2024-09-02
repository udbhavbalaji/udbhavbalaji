import React from "react";
import Navbar from "./portfolio/Navbar";
import Intro from "./portfolio/Intro"
import Journey from "./portfolio/Journey"
import Portfolio from "./portfolio/Portfolio"
import Footer from "./portfolio/Footer"


function PortfolioApp() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Journey />
            <Portfolio />
            <Footer />
        </div>
    )
}


export default PortfolioApp;
