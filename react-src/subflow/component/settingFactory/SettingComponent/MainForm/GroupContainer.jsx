import React from 'react'
import PartRight from '../Form/PartRight'
import PartLeft from '../Form/PartLeft'

const Group = ({ leftData, currentRepo }) => { // 这个group是一行一行的     
    const mainRight = currentRepo.mainRight || {}
    const selectedOption = mainRight[leftData.name] || { text: '请选择', value: false }
    
    let optionsData = window.formPropertiesTotal || []
    
    // 这是下拉选项
    optionsData = optionsData
        .filter(el => {
            if(el.subform_type == 'database_view') return true
            return (el.subform_type == leftData.type) || (!el.value) 
        })
        .filter(el => el.subform_type != "description")

    optionsData.length==0 && optionsData.push({ text: '请选择', value: false })    

    const select = (item, optionInd) => rdx.dispatch({ type: 'subflow/mainRight', fieldId: leftData.name, item })

    return (    
        <div style={{display:'flex',justifyContent: 'space-between', height: '41px'}}>
            <PartLeft title={leftData.title} required={leftData.required}/>
            <PartRight selectedOption={selectedOption} optionsData={optionsData} select={select}></PartRight>
        </div>
    )
}
export default rdx.connect('subflow', Group)