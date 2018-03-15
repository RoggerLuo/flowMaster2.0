export function select_multi(selectedShape) {
    let outgoingIsExclusivegate = true
    let branchCounter = 0
    selectedShape.outgoing.forEach(function(el) {
        branchCounter += 1
    })
    if (branchCounter >= 1) { //为什么是1呢，因为这一次的还没有添加上去，如果之前就是1了，那么就来不及
        window.showAlert('会签节点不能有分支')
        return false
    }
    return outgoingIsExclusivegate
}

export function multiBranch_ByGateway(selectedShape) {
    // selected shape是 会签分支节点
    if (
        selectedShape.incoming[0] &&
        selectedShape.incoming[0].incoming[0] &&
        (selectedShape.incoming[0].incoming[0]._stencil._jsonStencil.title == 'Multi user task')
    ) {
        let branchCounter = 0
        selectedShape.outgoing.forEach((el) => {
            branchCounter += 1
        })
        if (branchCounter >= 2) {
            window.showAlert('会签分支最多只能有两个分支')
            return false
        }
    }
    return true
}
