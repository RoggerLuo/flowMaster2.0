import React from 'react'
import {connect} from 'react-redux'
import Button from '../DropdownButton'
import confirmGenerator from '../confirmGenerator'

const ButtonContainer = ({reduxCate,dispatch,children}) => { 
    const add = (item) => dispatch({type:'approve/addRole',item})   
    const clear = () => dispatch({type:'approve/clear'})
    const confirmFunction = confirmGenerator({reduxCate,add,clear})
    const xClass = {marginTop:'5px',right:'12px'}
    return ( 
        <Button xClass={xClass} confirm={confirmFunction} existCate={reduxCate}>
            {children}
        </Button>
    )
}

const mapStateToProps = (state) => {
    const currentRepo = state.approve.repo.filter((el,index)=>el.id == state.approve.id)
    const reduxCate = currentRepo && currentRepo[0] && currentRepo[0].data && currentRepo[0].data[0] && currentRepo[0].data[0].cate||false
    return {reduxCate}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonContainer)

