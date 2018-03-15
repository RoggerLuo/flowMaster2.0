import React,{createClass} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Representation from './p'

const Component = ({ currentRepo }) => {
    if(!currentRepo) return null
    return(<Representation data={currentRepo.data||[]} />)
}

const ManualContainer = rdx.connect('manual', Component)

export default function(){
    render(
        <Provider store={rdx.store}>
                <ManualContainer />
        </Provider>
        ,
        document.getElementById('manualPropertyCtrl')
    )
}
