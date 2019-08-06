import React, {
    Component
} from 'react';
import "./Footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLayerGroup, faHandshake, faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    state = {};
    onHomeClick = () => {
        window.location.pathname = "/ScreenOne";
    }
    render() {
        return (
            <div>
                <div className="style">
                    <div className="selected_icon" onClick={this.onHomeClick}>
                        <i><FontAwesomeIcon icon={faHome} /></i>
                        <p>Home</p>
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faLayerGroup} /></i>
                        <p>Products</p>
                    </div>
                    <div>
                        <i> <FontAwesomeIcon icon={faHandshake} /></i>
                        <p>Pay & Transfer</p>
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faQuestionCircle} /></i>
                        <p>Support</p>
                    </div>
                    <div>
                        <i><FontAwesomeIcon icon={faBars} /></i>
                        <p>More</p>
                    </div>
                </div>
            </div>);
    }
}

export default Footer;