import React,{createClass} from 'react';
import './style'

const Component = ({title,cancel,confirm,display,put, /*后面可选*/ children,height,width}) => {
    
    const confirmDecorated = ()=>{
        confirm()
        cancel()
        // debugger
        // window.hideShadow()

    }
    let compClass1=""
    let compClass2=""

    if(display=='none'){
        compClass1="slideOutUp "
        compClass2 = "fadeOut"

    }else{
        compClass1="slideInDown "
        compClass2 = "fadeInSpecial"

    }
    // style={{display:display}} className={compClass2} className={compClass1}
    return(
        <div className={"popup-coverwrap "} style={{display:display}}>
            <div className={"popup "+compClass1+" "+compClass2} style={{height:height,width:width}} >
                <div className="x">                
                    <i className="icon iconfont icon-close" onClick={cancel}></i>
                </div>
                <div className="header">
                    {title}
                </div>
                
                <div className="content">
                    <div className="innerContent">
                        {children}
                    </div>
                </div>

                <div className="footer">
                    <div className="button-group">
                        <div className="cancel" onClick={cancel}>
                            {put('global.cancel')}
                        </div>
                        <div className="confirm" onClick={confirmDecorated}>
                            {put('global.confirm')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import connectPut from 'react-put'
const putOptions = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(putOptions)(Component)

export default ConnectedApp
