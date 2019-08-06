import React, {
    Component
} from 'react';

import "./ScreenSix.css";

class ScreenSix extends Component {
    state = {};

    onButtonClick = () => {
        window.location.pathname = "/ScreenSeven";
    }

    render() {
        return (
            <div className="ScreenSix">
                <h3>Appointment Booking</h3>
                <p>
                    According to your Postcode your local Adviser is Joe Bloggs at the Cheltenham branch. Not right? <a href="#">Click here.</a>
                </p>
                <p>
                    You can talk to Joe face to face, on the phone or over Skype. Please select your preference below and the date and time that suits you.
                </p>
                <p>
                    If you’re ready now please click on ‘talk to an adviser now’ and we’ll connect you to one of our dedicated video Advisers.
                </p>

                <div className="button_container">
                    <button onClick={this.onButtonClick}>Face to Face</button>
                    <button onClick={this.onButtonClick}>Phone</button>
                    <button onClick={this.onButtonClick}>Skype</button>
                </div>
                <div className="button_container">
                    <button onClick={this.onButtonClick} className="bottom_big_button">
                        Talk to an adviser now
                    </button>
                </div>
            </div>
        );
    }
}

export default ScreenSix;