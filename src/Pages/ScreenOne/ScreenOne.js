import React, {
    Component
} from 'react';
import Card from "../../Components/Card/Card"
import Overdraft from '../../Components/OverDraft/Overdraft';
import Content from '../../Components/ContentScreenOne/Content';

import "./ScreenOne.css";
class ScreenOne extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenOne">
            <Card />
            <Overdraft />
            <Content />
            <Card />
            </div>
        );
    }
}

export default ScreenOne;