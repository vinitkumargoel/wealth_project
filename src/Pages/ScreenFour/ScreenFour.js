import React, {
    Component
} from 'react';

import "./ScreenFour.css";
class ScreenFour extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenFour">
                <h3>Great News!</h3>
                <p>
                    From the answers you've provided and the activity we see in your accounts,
                    you're eligible for schroders Personal Wealth. Click Bellow to find out more.
                </p>
                <p>
                    Alternativly we have highlighted some of our other products that can make your
                    money work harder.
                </p>

                <div >
                    <div className="button_container">
                        <button className="btn btn-one">
                            Schroders Personl Wealth
                    </button>
                    </div>
                    <div className="button_container">
                        <button className="btn btn-two">
                            Share Dealing
                    </button>
                        <button className="btn btn-three">
                            Ready-made Investments
                    </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ScreenFour;


{/* <p>
You can talk to Joe face to face, on the phone or over Skype. Please select your Preference below and the date time that suits you.
</p>
<p>
If you're readt now please click on 'talk to an adviser now' and we'll connect you to one of our dedicated video Advisers.
</p> */}