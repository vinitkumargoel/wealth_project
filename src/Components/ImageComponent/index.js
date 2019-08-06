import React, {
    Component
} from 'react';
import image from '../../assets/LBG-Schroders.png'
import './index.css'
class ImageComponent extends Component {
    state = {};

    render() {
        return (
        <div className = "image-container"> 
            <img src = {image}></img>
             </div>
        );
    }
}

export default ImageComponent;