import React,{createClass} from 'react';
import { connect } from 'react-redux'
import Dropdown from '../../../basicComp/Dropdown'
import ViewCompFactory from './ViewCompFactory'

export default function (savedSqlState){
    const ViewComp = ViewCompFactory(savedSqlState)
    const Component = ({leave,dataSource,sql,checked,dispatch,put,mode}) => {    
        const param = {
            chooseSource(item){
                dispatch({type:'sql/chooseSource',item})
                activeSave()
            },
            addEntry(){
                dispatch({type:'sql/addEntry'})
                activeSave()
            },
            textareaOnInput(e){
                dispatch({type:'sql/textareaOnInput', sql:e.target.value})
                activeSave()
            },
            checkChange(){
                dispatch({type:'sql/toggleCheck'})
                activeSave()
            },
            sql,checked,dataSource,leave,mode
        }
        return (<ViewComp {...param}/>)
    }

    const mapStateToProps = (state) => {
        return {sql:state.sql.sql,checked:state.sql.checked,dataSource:state.sql.dataSource,leave:state.sql.leave,mode:state.sql.mode}
    }
    const mapDispatchToProps = (dispatch) => {
        return {dispatch}
    }
    
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(rdx.i18nPut(Component))
}
