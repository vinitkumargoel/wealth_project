import React, {
    Component
} from 'react';
import "./ScreenThree.css";

class ScreenThree extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenThree">
                <h3>Understand Your Risk Appetite</h3>
                <p>Would you be confortable investing for at least 5 Years?</p>

                <button>Yes, Confortable</button>
                <button>Perhaps for some of my money</button>
                <button>No, not Confortable</button>

                <p>Are you confortable with the liklihood that your money will raise and fall in value?</p>
                <button>Yes, Confortable</button>
                <button>Perhaps for some of my money</button>
                <button>No, not Confortable</button>
            </div>
        );
    }
}

export default ScreenThree;