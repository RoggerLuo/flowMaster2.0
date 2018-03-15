export default function(shape) {
    let outgoingIsExclusivegate = true
    let branchCounter = 0
    shape.outgoing.forEach(function(el) {
        branchCounter += 1
    })
    if (branchCounter >= 2) { 
        window.showAlert('人工节点不能有分支')
        fm.undo()
        return false
    }
    return outgoingIsExclusivegate
}