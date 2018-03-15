export default function(selectedShape) {
    let outgoingIsExclusivegate = true
    let branchCounter = 0
    selectedShape.outgoing.forEach(function(el) {
        branchCounter += 1
        // if (el.outgoing[0] && el.outgoing[0]._stencil._jsonStencil.title != 'Exclusive gateway'){
        //     outgoingIsExclusivegate = false
        //     window.showAlert('会签节点只能连接分支节点')
        // }
    })
    if (branchCounter >= 1) { //为什么是1呢，因为这一次的还没有添加上去，如果之前就是1了，那么就来不及
        window.showAlert('人工节点不能有分支')
        // fm.undo()
        return false
    }
    return outgoingIsExclusivegate
}

export function manualCompleteCheck(el) {
    const MultiUserTask =fm.getNodeById(el.resourceId)
    if (!MultiUserTask.outgoing[0]) {
        window.showAlert('人工节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (!MultiUserTask.outgoing[0].outgoing[0]) {
        window.showAlert('人工节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (MultiUserTask.outgoing[0].outgoing[0]._stencil._jsonStencil.title != "Exclusive gateway") {
        window.showAlert('人工节点只能连接分支节点')
        fm.undo()
        return
    }
}