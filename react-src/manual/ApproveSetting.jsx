import React from 'react'
import { connect } from 'react-redux'
import  './style'
// import Setting from './Setting'

const PreviousApprove = fm.approve.getPreviousComp('manual')
const Setting = fm.approve.getSetting('manual')

export default ({}) => {
    let displayApproveTitle = true
    if(fm.isCurrentShapeInGates){
        if(!fm.isIncomingShapeUsertask) displayApproveTitle = false
    }
    return(
        <div>
            <PreviousApprove />
            {displayApproveTitle?
                (<div className="property-row-title"> 
                    审批项设置
                </div>):null}
            
            <Setting />
        </div>
    )
}

