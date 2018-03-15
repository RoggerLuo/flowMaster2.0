import React,{createClass} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Subflow from './container'

export default function(){
    render(
        <Provider store={rdx.store}>
                <Subflow />
        </Provider>
        ,
        document.getElementById('subflowPropertyCtrl')
    )
}
