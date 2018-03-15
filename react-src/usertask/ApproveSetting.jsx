import React from 'react'

const PreviousApprove = fm.approve.getPreviousComp('usertask')
const Setting = fm.approve.getSetting('usertask')

export default ({}) => {
    let displayApproveTitle = true
    if(fm.isCurrentShapeInGates){
        if(!fm.isIncomingShapeUsertask) displayApproveTitle = false
    }
    return(
        <div>
            <PreviousApprove />
            {displayApproveTitle?(<div className="property-row-title"> 审批项设置 </div>):null}
            <Setting />
        </div>
    )
}

