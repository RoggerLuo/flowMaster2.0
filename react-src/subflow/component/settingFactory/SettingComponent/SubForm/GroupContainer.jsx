import React from 'react'
import PartRight from '../Form/PartRight'
import PartLeft from '../Form/PartLeft'

const Group = ({ leftData, currentRepo, dispatch, leftFormId, subOptions }) => {
    
    // 对应的组件类型 校验 在这里
    subOptions = subOptions.filter(el=>{
        // debugger
        if(el.cate == 'database_view') return true
        return (el.cate == leftData.type) || (!el.value)
    })

    const mainRight = currentRepo.mainRight || {}

    let selectedOption = { text: '请选择', value: false }
    if(currentRepo.subRights){
        if(currentRepo.subRights[leftFormId]){
            if( currentRepo.subRights[leftFormId].map[leftData.name]){
                selectedOption = currentRepo.subRights[leftFormId].map[leftData.name]
            }
        }
    } 

    const select = (item, optionInd) => {
        dispatch({ type: 'subflow/subRights/rightFormId/fieldId', leftFormId, fieldId: leftData.name, item })
        activeSave()
    }

    return (    
        <div style={{display:'flex',justifyContent: 'space-between', height: '41px'}}>
            <PartLeft title={leftData.title}/>
            <PartRight selectedOption={selectedOption} optionsData={subOptions} select={select} />
        </div>
    )
}
export default rdx.connect('subflow', Group)
