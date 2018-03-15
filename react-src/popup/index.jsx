import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import PopupWrap from './PopupWrap'

const Component = ({width,title,confirm,content,height,isSubflow,style,outerStyle,onCancel}) => {
    const options = {confirm,title,height,width,style,outerStyle,onCancel}
    const Content = content
    if(Content == '') return (<div></div>)
    let Wrap = PopupWrap
    return (
        <Wrap {...options}>
            <Content />
        </Wrap>
    )
}

const mapStateToProps = (state) => {
    return state.popup
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ComponentContainer = connect(mapStateToProps,mapDispatchToProps)(Component)

    
export default function(){
    render(
        <Provider store={rdx.store}>
            <ComponentContainer />
        </Provider>
        ,
        document.getElementById('hugePopup')
    )
}