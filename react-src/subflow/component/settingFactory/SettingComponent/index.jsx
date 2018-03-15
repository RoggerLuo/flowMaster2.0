import React from 'react'
import './style.less'
import MainForm from './MainForm'
import SubForm from './SubForm' 
import Approve from './Approve'
import Radios from './Radios' 

// export default function(){ 
const SettingPopup = ({ currentRepo, put, add }) => {
    if(!currentRepo) return null
    const data = currentRepo.data || []
    const leftFields = currentRepo.leftFields || []
    
    const filtered = leftFields.filter(el => el.type == 'sub_form')
    let SubFormComp = null
    if(filtered.length != 0){
        SubFormComp = (<div>
            <div className="property-row-title" style={{fontSize:'14px'}}> 子表单</div>
            <SubForm />
        </div>)
    }

    return(
        <div className="setting-subflow" style={{width:'100%'}}>
            <Approve data={data}/>
            <div style={{height:'10px',width:'100%'}}></div>
            <Radios />
            <div className="property-row-title" style={{fontSize:'14px'}}> 子流程内容设置 </div>
            <div className="property-row-title" style={{fontSize:'14px',paddingTop:'10px'}}> 主表 </div>
            <MainForm />
            {SubFormComp}
            <div style={{height:'100px',width:'100%'}}></div>
        </div>
    )
}
export default rdx.connect('subflow',rdx.i18nPut(SettingPopup))
// }
