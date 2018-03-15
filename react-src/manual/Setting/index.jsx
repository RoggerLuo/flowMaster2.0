import React from 'react'
import { connect } from 'react-redux'
import Pre from './Pre'
const ManualSetting = ({ put, currentRepo, dispatch }) => {
    if(!currentRepo) return null
    const oncheckFactory = key => () => {
        if(fm.isSpecificVersionEditMode) return
        rdx.put('manual','replace',[key],!currentRepo[key])
    }
    let data = [
        {
            title:'允许退回发起人',
            oncheck:oncheckFactory('backToStarter'),
            checked:currentRepo.backToStarter||false,
            defaultValue:'退回发起人',
            inputValue:currentRepo.backToStarterText,
            onchange(e){
                if(fm.isSpecificVersionEditMode) return
                rdx.put('manual','replace',['backToStarterText'],e.target.value||'退回发起人')
            }
        },
        {
            title:'允许退回上一节点审批人',
            oncheck:oncheckFactory('backToLast'),
            checked:currentRepo.backToLast||false,
            defaultValue:'退回上一节点审批人',
            inputValue:currentRepo.backToLastText,
            onchange(e){
                if(fm.isSpecificVersionEditMode) return
                rdx.put('manual','replace',['backToLastText'],e.target.value||'退回上一节点审批人')
            }
        },
        {
            title:'允许强制结束流程',
            oncheck:oncheckFactory('allowForceEnd'),
            checked:currentRepo.allowForceEnd||false,
            defaultValue:'强制结束流程',
            inputValue:currentRepo.allowForceEndText,
            onchange(e){
                if(fm.isSpecificVersionEditMode) return
                rdx.put('manual','replace',['allowForceEndText'],e.target.value||'强制结束流程')
            }
        }
    ]
    if(fm.isCurrentShapeInGates){
        data = [data[1]]
        if(!fm.isIncomingShapeUsertask){
            data = []
        }
    }
    return(
        <div>
            {data.map((el,index)=>{
                return (<Pre {...el} index={index} key={index} />) 
            })}
        </div>)
}

export default global.connect2redux('manual',ManualSetting)

