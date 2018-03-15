import React from 'react'
import Group from './presentation'

const GroupContainer = ({el,index,currentRepo}) => { //el是会签组group, index 是会签组所在的index
    
    if(!currentRepo) return null
    const deleteMode = currentRepo.mode

    const data = el.map((el)=>{  //data 是 会签组 //for Character
        el.groupIndex = index //把grounIndex传给Character Container, 在group层级能做的就这么多了
        return el
    })
    
    let mode = 'initial'
    if(data.length == 0){
        mode = 'initial'
    }else{
        mode = 'stuffed'
    }
    const repoData = currentRepo.data || []
    const solidFrame = { /* for solid */
        mode:deleteMode,
        del(){
            if(repoData.length <=1){
                window.showAlert('至少保留一组审批人员')
                // rdx.dispatch({type:'modeChange',value:'normal'})
                rdx.put('multi','replace',['mode'],'normal')
            }else{
                rdx.dispatch({type:'deleteGroup',groupIndex:index})                
            }
        }
    }

    return (
        <Group {...{index,data,mode,solidFrame}} />
    )
}
export default rdx.connect('multi',GroupContainer)
