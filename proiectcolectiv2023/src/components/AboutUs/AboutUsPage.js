import Navbar from "../Navbar";
import "./AboutUsPage.css";
import React from "react";
import { Fragment } from "react";
import logoIcon from "../Homepage/images/logo-1.png";
import AccountIcon from "../Homepage/images/myaccounticon.png";

function AboutUsPage(){
    return(
        <Fragment>
            <Navbar/>
            <div className="rectangle-orange"></div>
            <div className="rectangle-about-us">
                <img src={logoIcon} alt="Logo" className="logo"/>
                <h1 className="title">FoodBytes Team</h1>
                <img src={AccountIcon} alt="bogdan" className="bogdan"/>
                <img src={AccountIcon} alt="mara" className="mara"/>
                <img src={AccountIcon} alt="calin" className="calin"/>
                <img src={AccountIcon} alt="petri" className="petri"/>
                <img src={AccountIcon} alt="debu" className="debu"/>
                <div className="bogdan-name">Bogdan Raul Ovidiu</div>
                <div className="bogdan-role">Back-End ServerManagement</div>
                <div className="mara-name">Chirica Mara Stefania</div>
                <div className="mara-role">Back-end Testing <br/> UI/UX</div>
                <div className="calin-name">Chis Andrei Calin</div>
                <div className="calin-role">Database Testing</div>
                <div className="petri-name">Ciutre Petrica Ionut</div>
                <div className="petri-role">Back-end</div>
                <div className="debu-name">Debu Andrei Ioan</div>
                <div className="debu-role">Front-end Back-end</div>
                <img src={AccountIcon} alt="sergiu" className="sergiu"/>
                <img src={AccountIcon} alt="lorin" className="lorin"/>
                <img src={AccountIcon} alt="toma" className="toma"/>
                <img src={AccountIcon} alt="teo" className="teo"/>
                <img src={AccountIcon} alt="adriana" className="adriana"/>
                <div className="sergiu-name">Dobocan Sergiu</div>
                <div className="sergiu-role">Front-end</div>
                <div className="lorin-name">Dronca Lorin Adrian</div>
                <div className="lorin-role">Testing <br/> UI/UX</div>
                <div className="toma-name">Dup Toma Aron</div>
                <div className="toma-role">Front-end</div>
                <div className="teo-name">Fotin Maria Teodora</div>
                <div className="teo-role">Front-end Database</div>
                <div className="adriana-name">Hlinca Adriana <br/>Georgiana</div>
                <div className="adriana-role">Back-end Database</div>
            </div>
            <div className="rectangle-orange2"></div>
            <div className="contact-us">Contact us here:</div>
            <div className="rectangle-orange3"></div>
            <div className="email">foodbytes@gmail.com</div>

        </Fragment>
    )
}
export default AboutUsPage