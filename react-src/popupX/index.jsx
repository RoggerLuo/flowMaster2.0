import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import PopupWrap from './PopupWrap'
import ForSubflow from './ForSubflow'
import store from '../../redux/configureStore'

const Component = ({width,title,confirm,content,height,onCancel,style}) => {
    const options = {confirm,title,height,width,style,onCancel}
    const Content = content
    if(Content == '') return (<div></div>)
    let Wrap = ForSubflow //PopupWrap

    // if(isSubflow)    Wrap = ForSubflow

    return (
        <Wrap {...options}>
            <Content />
        </Wrap>
    )
}

const mapStateToProps = (state) => {
    return state.popupX
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ComponentContainer = connect(mapStateToProps,mapDispatchToProps)(Component)

    
export default function(){
    render(
        <Provider store={store}>
            <ComponentContainer />
        </Provider>
        ,
        document.getElementById('hugePopupX')
    )
}