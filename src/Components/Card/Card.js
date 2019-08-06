import React, {
    Component
} from 'react';
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPoundSign,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import LBGicon from "../../assets/LBG-icon.png"
class Card extends Component {
    state = {};

    render() {
        const path=this.props.path;
        return (
            <div className="card-container">
                <div className="data-container">
                    <img src={LBGicon} width="40px" height="30px" />
                    <div className="details-container">
                    {path==="/ScreenOne"?<span className="details-item-name">{this.props.number===1?"Club Platinum":"Club Lloyds Saver Monthly"}</span>:
                    path==="/ScreenNine" && this.props.number===1?<span className="details-item-name">Club Platinum</span>:<span className="details-item-name">Scroders Personal Wealth</span>
        
                }
                        {path==="/ScreenOne"?<span className="details-item-numbers">30-99-80 24773768</span>:
                        path==="/ScreenNine" && this.props.number===1?<span className="details-item-numbers">30-99-80 24773768</span>:
                        <span className="content-div main-div">Click below to see your Scrodners Personal Wealth Plan</span>}
                    </div>
                    <i className="dot-icon-main"><FontAwesomeIcon icon={faEllipsisV} className="dot-icon" /></i>
                </div>
                {this.props.number===1 || path==="/ScreenOne"?<div className="money-container">
                    <div><span className="pound-icon">{this.props.number===1?"£648.36":"£12.18"}</span></div>
                    <div><span className="pound-icon">Available: </span><span className="pound-icon">£1023.76</span></div>
                </div>:null}
                {this.props.number===2 && path==="/ScreenNine"?<i><FontAwesomeIcon icon={faAngleRight} className="angle-right-content" /></i>:null}
            </div>
        );
    }
}

export default Card;
