function branchLimit(shape) {
    let branchCounter = 0
    shape.outgoing.forEach(function(el) {
        branchCounter += 1
    })
    if (branchCounter >= 2) { //为什么是1呢，因为这一次的还没有添加上去，如果之前就是1了，那么就来不及
        window.showAlert('会签节点不能有其他分支')
        fm.undo()
    }
}
export default function(multiShape) {
    if (!multiShape.outgoing[0]) {
        window.showAlert('会签节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (!multiShape.outgoing[0].outgoing[0]) {
        window.showAlert('会签节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (multiShape.outgoing[0].outgoing[0]._stencil._jsonStencil.title != "Exclusive gateway") {
        window.showAlert('会签节点只能连接分支节点')
        fm.undo()
        return
    }
    branchLimit(multiShape)
}



function gatewaySelectCheck(shape) {
    // if (
    //     selectedShape.incoming[0] &&
    //     selectedShape.incoming[0].incoming[0] &&
    //     (selectedShape.incoming[0].incoming[0]._stencil._jsonStencil.title == 'Multi user task')
    // ) {
    if(fm.multi.is.gateway(shape)){
        let branchCounter = 0
        shape.outgoing.forEach((el) => {
            branchCounter += 1
        })
        if (branchCounter >= 2) {
            window.showAlert('会签分支最多只能有两个分支')
            return false
        }
    }
    return true
}
