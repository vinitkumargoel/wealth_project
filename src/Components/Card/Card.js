import React, {
    Component
} from 'react';
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import LBGicon from "../../assets/LBG-icon.png"
class Card extends Component {
    state = {};

    render() {
        return (
            <div className="card-container">
                <div className="data-container">
                    <img src={LBGicon} width="40px" height="30px" />
                    <div className="details-container">
                        <span className="details-item-name">Club Platinum</span>
                        <span className="details-item-numbers">30-99-80 24773768</span>
                    </div>
                    <i className="dot-icon-main"><FontAwesomeIcon icon={faEllipsisV} className="dot-icon" /></i>
                </div>
                <div className="money-container">
                    <div><span className="pound-icon">£648.36</span></div>
                    <div><span className="pound-icon">Available: </span><span className="pound-icon">£1023.76</span></div>
                </div>

            </div>
        );
    }
}

export default Card;
