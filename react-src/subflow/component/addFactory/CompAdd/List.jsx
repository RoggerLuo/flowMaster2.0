import React from 'react'
const List = ({ value, text, versionId, checked, currentRepo }) => {
    const isSelected = currentRepo.subProcess.subProcDefKey == value
    const onclick = () => {
        if(isSelected) { //cancel then
            rdx.put('subflow','replace',['subProcess'],{},'object')
            return
        }
        const subProcess = {
            subProcDefKey: value,
            name: text,
            versionId
        }
        rdx.put('subflow','replace',['subProcess'],subProcess,'object')
        fm.subflow.fetch_leftFields(subProcess)
    }

    let style = {cursor:'pointer',fontSize:'14px',paddingLeft: '8px'} 
    if(isSelected) style = {cursor:'pointer',fontSize:'14px',paddingLeft: '8px',color:'#00b1fb'}
    return (
        <div style={{paddingLeft:'24px',paddingTop:'10px'}} >
            <input type='checkbox' checked={isSelected} onClick={onclick} style={{cursor:'pointer'}}/>
            <span className="property-row-content bluecolor-hover"  style={style} onClick={onclick}> 
                {text} 
            </span>
        </div>
    )
}
export default rdx.connect('subflow',List)
