import React from 'react'
import Presentation from './Presentation'
import addFactory from './addFactory'
import settingFacotry from './settingFactory'

const SubflowContainer = ({ currentRepo }) => {
    if(!currentRepo) return null
    const data = currentRepo.data || []    
    const setting = settingFacotry(currentRepo)
    const add = addFactory(currentRepo,setting)
    const del = () => {
        if(fm.isSpecificVersionEditMode) return
        rdx.dispatch({type:'subflow/clear'})
    }
    const isEmpty = !(currentRepo.subProcess && currentRepo.subProcess.name)
    const name = currentRepo.subProcess.name||''
    return(
        <Presentation isEmpty={isEmpty} add={add} setting={setting} del={del} name={name}/>
    )
}
export default rdx.connect('subflow',SubflowContainer)
