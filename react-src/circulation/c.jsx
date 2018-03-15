import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import P from './p'

const Circulation = ({ currentRepo }) => {
    if(!currentRepo) return null
    const data = currentRepo.data||[]
    return(
        <P data={data}/>
    )
}
const CirculationConnected = rdx.connect('circulation', Circulation)

export default function(){
    render(
        <Provider store={rdx.store}>
            <CirculationConnected />
        </Provider>
        ,
        document.getElementById('circulationPropertyCtrl')
    )
}

