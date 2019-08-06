import React, {
    Component
} from 'react';
import "./Overdraft.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
class Overdraft extends Component {
    state = {
        show: true
    };
    onButtonClick = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <>
                {this.state.show ? <div className="overdraft-container">
                    <span>YOUR OPTIONS</span>
                    <div className="overdraft-icon">
                        <button onClick={this.onButtonClick}><i><FontAwesomeIcon icon={faTimes} /></i></button>
                    </div>
                </div> : null}
            </>
        );
    }
}

export default Overdraft;