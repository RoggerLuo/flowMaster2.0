import React from 'react'
import { connect } from 'react-redux'
import './style'

const Comp = ({title,onCancel,confirm, display, put,dispatch, /*后面可选*/ children,height,width,style,outerStyle}) => {    
    function cancel(){
        onCancel && onCancel()
        dispatch({type:'hidePopup'})
        window.hideShadow()
    }
    const confirmDecorated = ()=>{
        if(confirm()){
            dispatch({type:'hidePopup'})
            window.hideShadow()            
        }
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
        <div className={"popup-coverwrap "} style={{display:display,zIndex:'9992',position:'fixed'}}>
            <div className={"popup "+compClass1+" "+compClass2} style={{height:height,width:width}} >
                <div className="x">                
                    <i className="icon iconfont icon-close" onClick={cancel}></i>
                </div>
                <div className="header">
                    {put(title)}
                </div>
                
                <div className="popupContent" style={outerStyle||{cursor:'default'}}>
                    <div className="innerContent" style={style||{display:'block'}}>
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


const mapStateToProps = (state) => {
    return {display:state.popup.display}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(rdx.i18nPut(Comp))



// import connectPut from 'react-put'
// const putOptions = {mapPropToDictionary: (props)=>window.reactI18n}
// const ConnectedApp = connectPut(putOptions)(Comp)

