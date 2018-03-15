import React,{createClass} from 'react';
import { render } from 'react-dom'
const SoftContainer = ({children}) => {
    return(
        <div className="soft-container-container">
            <div className="soft-container">
                {children}
            </div>
            <i className="icon qingicon icon-guanbi2fill" style={{margin: '-8px'}}></i>
        </div>
    )
}
export default SoftContainer