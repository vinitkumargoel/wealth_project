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
                <p>Would you be comfortable investing for at least 5 Years?</p>

                <button>Yes, Comfortable</button>
                <button>Perhaps for some of my money</button>
                <button>No, not Comfortable</button>

                <p>Are you comfortable with the likelihood that your money will rise and fall in value?</p>
                <button>Yes, Comfortable</button>
                <button>Perhaps for some of my money</button>
                <button>No, not Comfortable</button>
            </div>
        );
    }
}

export default ScreenThree;