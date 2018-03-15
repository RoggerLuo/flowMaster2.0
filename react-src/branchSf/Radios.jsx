import React,{createClass} from 'react';
import { connect } from 'react-redux'

const Radios = ({currentRepo,put,dispatch}) => {
    const mode1 = () => rdx.put('branch','replace',['radio'],false)        
    const mode2 = () => rdx.put('branch','replace',['radio'],true)        
    let view = ''
    if(currentRepo.radio){
        view = (
            <div className="radio-box">
                <label className="radio-lable" onClick={mode1}>
                    <span className="radio-img"><img width="20" height="20" src={require("./unselected.png")} /></span>
                    <span className="radio-text">{put('branch.radio.manual')}</span> 
                </label> 
                <label className="radio-lable" >
                    <span className="radio-img"><img width="20" height="20" src={require("./selected.png")} /></span>
                    <span className="radio-text">{put('branch.radio.formula')}</span> 
                </label> 
            </div>
        )
    }else{
        view = (
            <div className="radio-box">
                <label className="radio-lable">
                    <span className="radio-img"><img width="20" height="20" src={require("./selected.png")} /></span>
                    <span className="radio-text">{put('branch.radio.manual')}</span> 
                </label> 
                <label className="radio-lable" onClick={mode2}>
                    <span className="radio-img"><img width="20" height="20" src={require("./unselected.png")} /></span>
                    <span className="radio-text">{put('branch.radio.formula')}</span> 
                </label>  
            </div>
        )
    }

    return view
}

import connectPut from 'react-put'
const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(Radios)

export default global.connect2redux('branch', ConnectedApp)
