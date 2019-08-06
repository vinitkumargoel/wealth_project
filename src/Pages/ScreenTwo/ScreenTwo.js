import React, {
    Component
} from 'react';
import FAComponent from '../../Components/FAComponent/index'
import ImageComponent from '../../Components/ImageComponent/index'
import './ScreenTwo.css'
class ScreenTwo extends Component {
    state = {};

    render() {
        return (
            <div className="ScreenTwo">
                <ImageComponent />
                <FAComponent />
            </div>
        );
    }
}

export default ScreenTwo;