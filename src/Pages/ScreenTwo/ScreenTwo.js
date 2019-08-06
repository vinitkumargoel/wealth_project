import React, { Component } from 'react';
import FAComponent from '../../Components/FAComponent/index'
import ImageComponent from '../../Components/ImageComponent/index'
import './ScreenTwo.css';
import { Link } from "react-router-dom";

class ScreenTwo extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenTwo">
                <ImageComponent />
                <FAComponent />
                <center>
                    <Link to={'/ScreenThree'}>
                        <button>Confirm</button>
                    </Link>

                </center>
            </div>
        );
    }
}

export default ScreenTwo;