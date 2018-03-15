
export default function(selectedShape) {
    var branchCounter = 0
    selectedShape.outgoing.forEach((el) => {branchCounter += 1})
    if (branchCounter >= 1) {
        window.showAlert('审批节点不能有其他分支')
        return false
    }
    // loop(selectedShape)
    return true
}

