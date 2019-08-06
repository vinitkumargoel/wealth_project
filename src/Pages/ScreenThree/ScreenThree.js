import React, {
    Component
} from 'react';
import "./ScreenThree.css";

class ScreenThree extends Component {
    state = {
        group_1: null,
        group_2: null,
    };
    onGroup1Click = (buttonValue) => {
        this.setState({
            group_1: buttonValue
        });
    };
    onGroup2Click = (buttonValue) => {
        if (this.state.group_1 != null) {
            this.setState({
                group_2: buttonValue
            });
            window.location.pathname = "/ScreenFour";
        };
    };
    render() {
        return (
            <div className="ScreenThree">
                <h3>Understand Your Risk Appetite</h3>
                <p>Would you be comfortable investing for at least 5 Years?</p>

                <div className="group_1">
                    <button className={this.state.group_1 === 0 ? "btn-active" : 'btn'} onClick={() => this.onGroup1Click(0)}>Yes, Comfortable</button>
                    <button className={this.state.group_1 === 1 ? "btn-active" : 'btn'} onClick={() => this.onGroup1Click(1)}>Perhaps for some of my money</button>
                    <button className={this.state.group_1 === 2 ? "btn-active" : 'btn'} onClick={() => this.onGroup1Click(2)}>No, not Comfortable</button>
                </div>

                <p>Are you comfortable with the likelihood that your money will rise and fall in value?</p>

                <div className="group_2">
                    <button className={this.state.group_2 === 0 ? "btn-active" : 'btn'} onClick={() => this.onGroup2Click(0)}>Yes, Comfortable</button>
                    <button className={this.state.group_2 === 1 ? "btn-active" : 'btn'} onClick={() => this.onGroup2Click(1)}>Perhaps for some of my money</button>
                    <button className={this.state.group_2 === 2 ? "btn-active" : 'btn'} onClick={() => this.onGroup2Click(2)}>No, not Comfortable</button>
                </div>
            </div>
        );
    }
}

export default ScreenThree;