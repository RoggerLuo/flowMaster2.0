import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import Main from './Main'

export default function(){
    render(
        <Provider store={rdx.store}>
            <Main />
        </Provider>
        ,
        document.getElementById('multiPropertyCtrl')
    )
}

