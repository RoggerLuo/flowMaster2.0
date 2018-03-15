import React,{createClass} from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Component from './Component'

const renderComponent = () => {
    render(
        <Provider store={rdx.store}>
            <Component />
        </Provider>
        ,
        document.getElementById('branchSequenceFlowComponent')
    )
}

global.fm = global.fm || {}
fm.branchSf = {}
fm.branchSf.render = renderComponent