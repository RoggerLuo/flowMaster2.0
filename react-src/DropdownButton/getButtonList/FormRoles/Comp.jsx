import React,{createClass} from 'react';
import { connect } from 'react-redux'
import Dropdown from '../../../basicComp/Dropdown'

const Component = ({data2,dispatch,put,choosedOption2}) => {    
    let choosed2 = (item)=>{
        dispatch({type:'dropdown2Choose',item})
    }
    let choosedOption = choosedOption2
    if(!choosedOption.text){
        choosedOption = {text:'请选择',value:false}
    }
    if(global.formPeople && global.formPeople[0]){}else{
        choosedOption = {text:'找不到用户相关组件',value:false}
    }
    return (
        <div>
            {"从表单中获取审批人"}
            <Dropdown position={'absolute'} width={'auto'} data={global.formPeople||[]} choosedOption={choosedOption} choosed={choosed2}/>
        </div>
    )
}

  
const mapStateToProps = (state) => {
    return {choosedOption2:state.dropdown.dropdown2,choosedOption:state.dropdown.dropdown1,data2:state.dropdown.dropdown2Data}
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}


import connectPut from 'react-put'
const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(Component)


const ComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedApp)

export default ComponentContainer
