import React,{createClass} from 'react';
import { connect } from 'react-redux'
import { columnTypeProto, expressionProto, variableTypeProto } from './dataProto'

const Entry = ({columnName,columnType,expression,variableName,variableType,selectGenerator,index,onchangeGenerator}) => {
    const getDefault = ()=>{ return {value: 'initial',text: '请选择'} }
    const Dropdown = fm.common.Dropdown
    return (
        <div>
            列名&nbsp; <input onChange={onchangeGenerator(index)} value={columnName} className="columnNameInput" type="text" />
            <Dropdown choosedOption={expression} data={expressionProto} choosed={selectGenerator(0,index)} width={'60px'}  margin={'0 5px'}/>
            <Dropdown choosedOption={columnType} data={columnTypeProto} choosed={selectGenerator(1,index)} width={'130px'} margin={'0 5px'}/>
            <Dropdown choosedOption={variableType} data={variableTypeProto} choosed={selectGenerator(2,index)} width={'130px'} margin={'0 5px'}/>
            <Dropdown choosedOption={getDefault()} data={window.variableNameProto||[getDefault()]} choosed={selectGenerator(3,index)} width={'130px'} margin={'0 5px'}/>
        </div>
    )   
}

const Component = ({conditions,dispatch,put,choosedOption2}) => {    
    const selectGenerator = (number,index)=>{
        switch(number){
            case 0:
                return (item)=>{dispatch({type:'sql/expressionChoose',item,index})}
            case 1:
                return (item)=>{dispatch({type:'sql/columnTypeChoose',item,index})}
            case 2:
                return (item)=>{dispatch({type:'sql/variableTypeChoose',item,index})}
            case 3:
                return (item)=>{dispatch({type:'sql/variableNameChoose',item,index})}
        }
    }
    const onchange = (index) => {
        return (e) => dispatch({type:'sql/optionInputChange',value:e.target.value,index})
    }
    return (
        <div>
            {conditions.map((el,ind)=> <Entry {...el} key={ind} selectGenerator={selectGenerator} onchangeGenerator={onchange} index={ind}/>)}
        </div>
    )
}
  
const mapStateToProps = (state) => {
    const conditions = state.sql.conditions
    return {conditions}
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

rdx.i19n
import connectPut from 'react-put'
const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(Component)


const ComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedApp)

export default ComponentContainer
