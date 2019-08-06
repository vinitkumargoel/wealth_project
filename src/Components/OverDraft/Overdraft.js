import React, {
    Component
} from 'react';
import "./Overdraft.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
class Overdraft extends Component {
    state = {};

    render() {
        return (
            <div className="overdraft-container">
            <span>YOUR OVERDRAFT OPTIONS</span>
            <div className="overdraft-icon">
            <i ><FontAwesomeIcon icon={faAngleRight} /></i>
            </div>
            </div>
        );
    }
}

export default Overdraft;