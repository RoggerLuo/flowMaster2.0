import React from 'react'

export default function(reduceName){
    const HidePrevious = ({ put, currentRepo, dispatch }) => {
        const change1 = () => {
            if(fm.isSpecificVersionEditMode) return
            rdx.put(reduceName,'replace',['previousNodeSpecified'],!currentRepo.previousNodeSpecified,'boolean')
        }
        const change2 = () => {
            if(fm.isSpecificVersionEditMode) return
            rdx.put(reduceName,'replace',['enableSingleSelect'],!currentRepo.enableSingleSelect,'boolean')
        }
        const previousNodeSpecified = currentRepo.previousNodeSpecified
        const enableSingleSelect = currentRepo.enableSingleSelect 
        
        // is display，如果为true，则display
        if(!fm.approve.is_display_prevShapeSpecify(fm.currentSelectedShape,currentRepo)) return null
        return(
            <div>
                <div style={{height:'15px',width:'100%'}}></div>
                <label htmlFor={"previousNodeSpecified"} style={{cursor:'pointer'}}> 
                    <div className="property-row-content"> 
                        允许上一节点处理人指定本节点审批人
                        &nbsp;
                        <input 
                            onChange={change1} 
                            checked={previousNodeSpecified||false} 
                            value={previousNodeSpecified||false}
                            style={{cursor:'pointer'}} 
                            id="previousNodeSpecified" 
                            name="previousNodeSpecified" 
                            type="checkbox" 
                        />
                    </div>
                </label>
               
                

                <div style={{height:'1px',width:'100%'}}></div>
                
                {previousNodeSpecified?(<div> 
                    
                    <label htmlFor={"enableSingleSelect"} style={{cursor:'pointer'}}> 
                        <div className="property-row-content">
                            指定审批人仅支持单选
                            &nbsp;
                            <input 
                                onChange={change2} 
                                value={enableSingleSelect||false}
                                style={{cursor:'pointer'}} 
                                id="enableSingleSelect" 
                                name="enableSingleSelect" 
                                type="checkbox" 
                                checked={enableSingleSelect||false} 
                            /> 
                        </div> 
                        
                    </label>
                    
                &nbsp;</div>):null}
            </div>
        )
    }
    return rdx.connect(reduceName,HidePrevious)
}


/*
<div className="property-row-content" style={{color: '#999999'}}> 
    从【特定节点审批人】【二次开发】获取的审批人类型不在选择范围中。 
</div>

*/

function a(){
    //blah blah
}