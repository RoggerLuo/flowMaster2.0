import React from 'react'
import Button from '../DropdownButton'
import {connect} from 'react-redux'

const ButtonContainer = ({state,dispatch,children}) => { 
    const confirm = (item) => { 
        dispatch({type:'endpoint/add2pool',item})   
        activeSave() 
    }
    const xClass = {marginTop:'5px',right:'12px'}
    return ( 
        <Button xClass={xClass} confirm={confirm}>
            {children}
        </Button>
    )
}

const mapStateToProps = (state) => {
    return {state}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer)

