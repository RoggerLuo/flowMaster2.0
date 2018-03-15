import React,{createClass} from 'react';
import { render } from 'react-dom'
import {connect} from 'react-redux'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore.js'

import './spin.less'

const Component = createClass({ 
    getInitialState(){
        return {currentStep:'d'}
    },
    render(){
        // let dynamicClass = th
        let display = 'none'
        if(this.props.showSpin){
            display = ''
        }else{
            display = 'none'
        }
        return (
            <div className="myspin" style={{display:display}}>
                <div id="loading">
                    <div id="loading-wrapper"></div>
                    <div id="loading-center">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
})
// 节点名称不能为空，请编辑后再继续操作

    
const mapStateToProps = (state) => {
    return state.common
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default function(){
    // window.showAlert = (text)=>{
    //     store.dispatch({type:'callSpin'})
    //     store.dispatch({type:'hideAlertAnimation'})
    //     // setTimeout(function(){
    //     //     store.dispatch({type:'closeSpin'})
    //     // },1000)
    // }

    render(
        <Provider store={store}>
            <ComponentContainer />
        </Provider>
        ,
        document.getElementById('custom-spin')
    )
}
