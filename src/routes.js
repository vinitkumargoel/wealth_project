import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "./App";

function BasicExample() {
    return (
        <Router>
            <Route path="/home" component={App} />
        </Router>
    );
}


export default BasicExample;