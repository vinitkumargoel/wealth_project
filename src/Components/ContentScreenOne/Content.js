import React, {
    Component
} from 'react';
import "./Content.css"
import Home from "../../assets/Home.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
class Content extends Component {
    constructor(props){
        super(props);
    }
    state = {};

    render() {
      const path=this.props.path;
        return (
            <div className="content-container">
           
           
                <div className="data-container">
                
                    {path==="/ScreenOne"?<span className="header-span">John,we can help you make your money work harder</span>

                    :<span className="header-span">Time to get on the property ladder</span>}
                    <img src={Home} width="40px" height="40px" />
                </div>
                {path==="/ScreenOne"?<div className="content-div">
                    Scroders Personal Wealth can provide you with expert financial planning.
                    If it's not for you,we can point you towards other ways to make your money work harder
            </div>:<div className="content-div">Your family can help you make the move quicker with our Lend a Hand Mortgage</div>}
                <i><FontAwesomeIcon icon={faAngleRight} className="angle-right" /></i>
                <div className="border-container"></div>
            </div>
        );
    }
}

export default Content;