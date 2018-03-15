import React from 'react'
import { connect } from 'react-redux'
import './style'

const Comp = ({title,confirm, onCancel,display, put,dispatch, /*后面可选*/ children,height,width,style}) => {    
    function cancel(){
        dispatch({type:'hidePopupX'})
        window.hideShadow()
        onCancel()
    }
    const confirmDecorated = () => {
        if(!confirm()) return
        dispatch({type:'hidePopupX'})
        window.hideShadow()
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

    return(
        <div className={"popup-coverwrapX "} style={{zIndex:'9991',bottom:'auto',display:display,backgroundColor:"#f3f3f3",width: '100%' }}>
            <div className={"popup "+compClass1+" "+compClass2} style={{height:height,width:width,margin:'50px auto 100px auto'}} >
                <div className="x">                
                    <i className="icon iconfont icon-close" onClick={cancel}></i>
                </div>
                <div className="header">
                    {title}
                </div>
                
                <div className="popupContent">
                    <div className="innerContent" style={style||{display:'inline-block'}}>
                        {children}
                    </div>
                </div>

                <div className="footer" >
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
const ConnectedApp = connectPut(putOptions)(Comp)


const mapStateToProps = (state) => {
    return {display:state.popupX.display}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedApp)


