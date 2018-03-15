import React,{createClass} from 'react';
import { render } from 'react-dom'

const Dialogue = ({children,close,confirm,visibleStatus}) => {
    return(
        <div className="popup-dialogue" style={{visibility:visibleStatus}}>
            <div className="popup-dialogue-visible">
                <div className="main-text">
                    {children}
                </div>

                <div className="button-group">

                    <div className="cancel" onClick={close}>
                        取消
                    </div>

                    <div className="placeholder">
                    </div>

                    <div className="confirm" onClick={confirm}>
                        确定
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogue