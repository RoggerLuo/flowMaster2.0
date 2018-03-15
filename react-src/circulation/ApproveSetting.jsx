import React from 'react'
import { connect } from 'react-redux'
import  './style'

const ApproveSetting = ({ put, currentRepo, dispatch }) => {
    if(!fm.approve.is_display_prevShapeSpecify_for_circulation(fm.currentSelectedShape,currentRepo)){
        return null
    }
    const previousNodeSpecifiedChange = () => {
        if(fm.isSpecificVersionEditMode) return
        dispatch({type:'circulation/previousNodeSpecifiedChange'})
        activeSave() 
    }
    const previousNodeSpecified = currentRepo.previousNodeSpecified
    return(
        <div>
            <div style={{height:'14px',width:'100%'}}></div>
            <label htmlFor={"previousNodeSpecified"} style={{cursor:'pointer'}}> 
                <div className="property-row-content"> 
                    允许上一节点处理人从传阅对象范围中指定本节点传阅对象
                    &nbsp;
                    <input 
                        onChange={previousNodeSpecifiedChange} 
                        checked={previousNodeSpecified||false} 
                        value={previousNodeSpecified||false}
                        style={{cursor:'pointer',position: 'relative',bottom: '1px'}} 
                        id="previousNodeSpecified" 
                        name="previousNodeSpecified" 
                        type="checkbox" 
                    />
                </div>
            </label>
                         
        </div>
    )
}

export default rdx.connect('circulation', ApproveSetting)
