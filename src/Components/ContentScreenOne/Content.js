import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Home from "../../assets/Home.png";
import "./Content.css";

class Content extends Component {
    onContentClick = () => {
        window.location.pathname = "/ScreenTwo";
    }
    render() {
        return (
            <div className="content-container">
                <span className="clickable" onClick={this.onContentClick}>
                    <div className="data-container">
                        <span className="header-span">John,we can help you make your money work harder</span>
                        <img src={Home} width="40px" height="40px" />
                    </div>
                    <div className="content-div">
                        Scroders Personal Wealth can provide you with expert financial planning.
                        If it's not for you,we can point you towards other ways to make your
                        money work harder
                    </div>
                </span>
                <i><FontAwesomeIcon icon={faAngleRight} className="angle-right" /></i>
                <div className="border-container">
                    <button onClick={this.onContentClick}>
                        Tell me more
                    </button>
                </div>

            </div>
        );
    }
}

export default Content;