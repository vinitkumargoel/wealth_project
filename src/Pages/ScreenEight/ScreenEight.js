import React, {
    Component
} from 'react';

import "./ScreenEight.css"

import LBGSchroders from "../../assets/LBG-Schroders.png"
class ScreenEight extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenEight">
                <h3>Appointment Confirmation</h3>
                <p>Thank you for booking a Face to Face appointment with our Schroders Personal Wealth Adviser, Joe Bloggs. The details of your appointment are below:</p>
                <p>
                    Date: 11/08/2019
                    <br />
                    Time: 13:00
                    <br />
                    Where: Lloyds bank- Cheltenham branch
                    <br />
                    Adviser- Joe Bloggs

                </p>
                <p>
                    We will send you more information via email.
                </p>
                <p>
                    Thank you
                </p>
                <img src={LBGSchroders} alt="" />
            </div>
        );
    }
}

export default ScreenEight;