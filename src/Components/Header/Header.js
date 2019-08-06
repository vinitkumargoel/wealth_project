import React, {
    Component
} from 'react';
import "./Header.css"
class Header extends Component {
    state = {};

    render() {
        return (<div className="header-container">
            <div className="greeting">Good Morning Jacob</div>
        </div>
        );
    }
}

export default Header;