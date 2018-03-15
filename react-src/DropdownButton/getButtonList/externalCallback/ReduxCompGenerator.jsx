import React,{createClass} from 'react';
import { connect } from 'react-redux'
import Dropdown from '../../../basicComp/Dropdown'
import ViewComp from './ViewComp'
import connectPut from 'react-put'

    
const Component = ({currentRepo,put}) => {    
    const param = {
        oninput(e){
            rdx.put('temp','touch')
            rdx.put('temp','replace',['callback_textarea'],e.target.value,'string')
        },
        value:currentRepo.callback_textarea||''
    }
    return (<ViewComp {...param}/>)
}

const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(Component)
export default global.connect2redux('temp', ConnectedApp)
