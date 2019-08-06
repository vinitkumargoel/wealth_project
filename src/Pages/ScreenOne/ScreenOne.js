import React, {
    Component
} from 'react';
import Card from "../../Components/Card/Card"
import Overdraft from '../../Components/OverDraft/Overdraft';
import Content from '../../Components/ContentScreenOne/Content';

import "./ScreenOne.css";
class ScreenOne extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }


    render() {
        console.log(this.props.match.path)
        const path=this.props.match.path
        return (
            <div className="ScreenOne">
            <Card path={path} number={1}/>
            <Overdraft />
            <Content path={path}/>
           <Card path={path} number={2}/>
            </div>
        );
    }
}

export default ScreenOne;