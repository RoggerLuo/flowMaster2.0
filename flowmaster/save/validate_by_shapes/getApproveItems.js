export default (repo, shape) => {
    const approveItems = []
    const outgoing = shape.outgoing
    const name = outgoing && outgoing[0] && outgoing[0].properties['oryx-name'] || '通过'
    if(fm.getTitle(shape) != 'Manual task'){
        approveItems.push({ name, "code": "Pass" })        
    }

    if (repo.backToStarter) {
        approveItems.push({
            "name": repo.backToStarterText || "退回发起人",
            "code": "BackToFirst"
        })
    }
    if (repo.backToLast) {
        approveItems.push({
            "name": repo.backToLastText || "退回上一节点审批人",
            "code": "Back"
        })
    }
    if (repo.allowForceEnd) {
        approveItems.push({
            "name": repo.allowForceEndText || "强制结束流程",
            "code": "Deny"
        })
    }
    return approveItems
}