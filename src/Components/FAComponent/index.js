import React, {
    Component
} from 'react';
import './index.css'
class FAComponent extends Component {
    state = {};

    render() {
        return (<div className = "fa-content">
                <div>
                   <p>
                       Financial Advice</p> 
                   <p>
                       Personal Financial Advice Service</p> 
                   <p>
                   Thinking about what to do with your money, or simply need help to manage your investments? Through our partnership with Schroders Personal Wealth we can provide you with access to experienced advisers to help you plan for the future and choose where to invest.
                       </p> 
                   <p>
                   To get advice from Schroders Personal Wealth, you’ll need to have:</p> 
                   <p>
                   At least £100,000 in savings, investments and/or personal pensions, and/or<br/>
                   £100,000 of sole annual income.
                   </p> 
  
                </div>

             </div>
        );
    }
}

export default FAComponent;