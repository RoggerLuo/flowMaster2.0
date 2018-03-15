import React from 'react'
import {connect} from 'react-redux'
import RolesFrameGenerator from '../RolesFrameGeneratorNotForParallel'

function ConfiguredRoleComp({ data, dispatch }){
    const del = (index) => function(){
        dispatch({type:'approve/deleteRole',index})
        activeSave()
    }
    const add = (item) => dispatch({type:'approve/addRole',item})
    const clear = () => dispatch({type:'approve/clear'})

    // let edit = () => {}
    const cate = data[0] && data[0].cate || false
    // if(cate == 'fromDb'){
    //     let element = data[0]
    //     edit = () => dispatch({
    //         type:'popup/callPopupEdit',
    //         element.dataSourceSTDdata
    //     })
    // }
    
    const { DefaultContainer, DbRoleContainer } = RolesFrameGenerator({del,add,clear})
    switch(cate){
        case 'fromDb':
            return (<DbRoleContainer data={data}/>)
        default:
            return (<DefaultContainer data={data}/>)
    }
}
const mapStateToProps = (state) => {
    return {state}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfiguredRoleComp)    

