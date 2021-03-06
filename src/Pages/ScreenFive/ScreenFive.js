import React, {
    Component
} from 'react';

import "./ScreenFive.css";
class ScreenFive extends Component {
    state = {
        button_state: ""
    };
    onButtonClick = () => {
        this.setState({
            button_state: "active"
        });
        window.location.pathname = "/ScreenSix";
    }
    render() {
        return (
            <div className="ScreenFive">
                <h3>Customer Consent</h3>
                <p>
                    Before we can arrange your appointment,
                    can you confirm that you are happy that your relevant personal
                    information held across Lloyds Banking Group can be shared with Schroders Personal Wealth.
                </p>
                <p>
                    This is so that your Personal Wealth Adviser can get a better idea about your individual needs.
                </p>
                <div className="buttonContent" >
                    <div className="button_container">
                        <div className="button-wrapper">
                            <button onClick={this.onButtonClick} className={this.state.button_state === "active" ? 'btn-active' : 'btn'}>Yes &#62; </button>
                        </div>
                        <div className="button-wrapper">
                            <p>I give my consent to share my personal information for an appointment to be booked.</p>
                        </div>
                    </div>
                    <div className="button_container">
                        <div className="button-wrapper">
                            <button className="btn" disabled> No &#62; </button>
                        </div>
                        <div className="button-wrapper">
                            <p>I do not give my consent to share my personal information.</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ScreenFive;


