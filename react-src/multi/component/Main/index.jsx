import React from 'react'
import Presentation from './presentation'

const MultiMainContainer = ({ currentRepo }) => {
    if(!currentRepo) return null
    const data = currentRepo.data
    const mode = (currentRepo.mode == 'delete') ? 'notIcon' : 'icon'
    const sectionTitleData = {
        mode: mode,
        cancel() {
            rdx.put('multi','replace',['mode'],'normal')
        },
        add() {
            rdx.dispatch({ type: 'addGroup' })
        },
        del() {
            rdx.put('multi','replace',['mode'],'delete')
        }
    }
    return (<Presentation data={data} sectionTitleData={sectionTitleData} />)
}

export default rdx.connect('multi',MultiMainContainer)