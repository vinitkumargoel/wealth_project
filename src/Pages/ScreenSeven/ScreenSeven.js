import React, {
    Component
} from 'react';

import Calender from "../../assets/calender.png";

import "./ScreenSeven.css";

class ScreenSeven extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenSeven">
                <h3>Face to Face Appointment</h3>
                <p>
                    Thank you for selecting to see Joe Face to Face. You can see Joe’s calendar below. Please select a date and time that suits you.
                </p>
                <img src={Calender} />
                <center>
                    <button onClick={() => window.location.pathname = "/ScreenEight"}>Confirm</button>
                </center>
            </div>
        );
    }
}

export default ScreenSeven;