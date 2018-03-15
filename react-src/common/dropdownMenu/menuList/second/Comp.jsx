import React,{createClass} from 'react';
import { connect } from 'react-redux'
import Dropdown from '../../../basicComp/Dropdown'

const Component = ({data1,data2,dispatch,put,choosedOption,choosedOption2}) => {    
    const choosed = (item)=>{
        dispatch({type:'dropdown1Choose',item})
    }
    const choosed2 = (item)=>{
        dispatch({type:'dropdown2Choose',item})
    }
    
    return (
        <div>
            {put('popup.org1')}<Dropdown width={'auto'} data={data1} choosedOption={choosedOption} choosed={choosed}/>
            {put('popup.org2')}<Dropdown choosedOption={choosedOption2} data={data2} choosed={choosed2}/>
        </div>
    )
}

  
const mapStateToProps = (state) => {
    return {choosedOption2:state.dropdown.dropdown2,choosedOption:state.dropdown.dropdown1,data1:state.dropdown.dropdown1Data,data2:state.dropdown.dropdown2Data}
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
