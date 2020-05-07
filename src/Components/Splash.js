import React from "react";
import "./Splash.css"
import logo from "../Utils/Logo.png"
import { motion } from "framer-motion"

class Splash extends React.Component {
    render() {
        return <div id="SplashScreen">
            <div id="Ellipse">
                <img id="Logo" src={logo} alt="Scolandar logo"/>
            </div>
                <motion.div animate={{y:[-50,0,-50]}}   transition={{duration:2,loop: Infinity,ease: "linear"}} className="Point" id="Point1"/>
                <motion.div animate={{y:[-50,0,-50]}}   transition={{duration:2,loop: Infinity,ease: "linear", delay : 0.25}}className="Point" id="Point2"/>
                <motion.div animate={{y:[-50,0,-50]}}   transition={{duration:2,loop: Infinity,ease: "linear", delay : 0.5}} className="Point" id="Point3"/>
        </div>;
    }
}


export {Splash}