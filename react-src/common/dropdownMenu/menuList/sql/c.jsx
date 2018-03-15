import React from 'react'
import { connect } from 'react-redux'
import P from './p'

// export default function (){
//     debugger
    // const ViewComp = ViewCompFactory()
    const Component = ({ leave, dataSource, sql, checked, dispatch, put, mode }) => {    
        const param = {
            chooseSource(item){
                dispatch({ type:'sql/chooseSource',item })
            },
            addEntry(){
                dispatch({ type:'sql/addEntry' })
            },
            textareaOnInput(e){
                dispatch({ type:'sql/textareaOnInput', sql:e.target.value })
            },
            checkChange(){
                dispatch({ type:'sql/toggleCheck' })
            },
            sql,checked,dataSource,leave,mode
        }
        return (<P {...param}/>)
    }
    const mapStateToProps = (state) => {
        return { sql:state.sql.sql,checked:state.sql.checked,dataSource:state.sql.dataSource,leave:state.sql.leave,mode:state.sql.mode }
    }
    const mapDispatchToProps = (dispatch) => {
        return { dispatch }
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(rdx.i18nPut(Component))
// }
