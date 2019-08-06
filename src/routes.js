import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScreenOne from "./Pages/ScreenOne/ScreenOne";
import ScreenTwo from "./Pages/ScreenTwo/ScreenTwo";
import ScreenThree from "./Pages/ScreenThree/ScreenThree";
import ScreenFour from "./Pages/ScreenFour/ScreenFour";
import ScreenFive from "./Pages/ScreenFive/ScreenFive";
import ScreenSix from "./Pages/ScreenSix/ScreenSix";
import ScreenSeven from "./Pages/ScreenSeven/ScreenSeven";

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"


function BasicExample() {
    return (
        <div>
            <Header />
            <Router>
                <Route path="/ScreenOne" component={ScreenOne} />
                <Route path="/ScreenTwo" component={ScreenTwo} />
                <Route path="/ScreenThree" component={ScreenThree} />
                <Route path="/ScreenFour" component={ScreenFour} />
                <Route path="/ScreenFive" component={ScreenFive} />
                <Route path="/ScreenSix" component={ScreenSix} />
                <Route path="/ScreenSeven" component={ScreenSeven} />
            </Router>
            <Footer />
        </div>
    );
}


export default BasicExample;