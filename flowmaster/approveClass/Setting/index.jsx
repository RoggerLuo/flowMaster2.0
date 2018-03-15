import React from 'react'
import Pre from './Pre'
import backToLastControl from './backToLastControl'
import ifInGates from './ifInGates'

export default function(reduceName){
    const UsertaskSetting = ({ currentRepo, dispatch }) => {
        if(!currentRepo) return null
        const oncheckFactory = key => {
            return () => {
                if(fm.isSpecificVersionEditMode) return
                rdx.put(reduceName,'replace',[key],!currentRepo[key])
            }
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
                    rdx.put(reduceName,'replace',['backToStarterText'],e.target.value||'')
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
                    rdx.put(reduceName,'replace',['backToLastText'],e.target.value||'')
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
                    rdx.put(reduceName,'replace',['allowForceEndText'],e.target.value||'')
                }
            }
        ]
        data = ifInGates(data)
        data = backToLastControl(data)
        return(
            <div>
                {data.map((el,index)=>{
                    return (<Pre {...el} index={index} key={index} />) 
                })}
            </div>
        )
    }

    return rdx.connect(reduceName,UsertaskSetting)

}

