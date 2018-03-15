import React from 'react'
import RoleCube from './RoleCube'

export default function(del){

    return function({ data }){
        let clonedData = data.slice(0)
        clonedData.forEach(el=>{
            if(el.cate == 'historicTask'){
                const shape = fm.getShapeById(el.value)
                if(!shape) {
                    // el.text = '所选节点已删除'
                }else{
                    el.text = shape.properties['oryx-name'] + `(${shape.resourceId.substring(4,9)})`                    
                }
            }
        })
        const SolidFrame = fm.common.SolidFrame
        return (
            <SolidFrame innerStyle={{padding:'4px 7px'}}>
                <div style={{padding:'2px',minHeight: '17px',lineHeight:'8px'}}>
                    {clonedData.map((el,index)=><RoleCube text={el.text} click={()=>del(index)} key={index}/>)}
                </div>
            </SolidFrame> 
        )
    }
}

