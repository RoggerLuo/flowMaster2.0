export default (Manualtask) => {
    if (!Manualtask.outgoing[0]) {
        window.showAlert('人工节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (!Manualtask.outgoing[0].outgoing[0]) {
        window.showAlert('人工节点不能单独存在，请连接上分支节点')
        fm.undo()
        return
    }
    if (Manualtask.outgoing[0].outgoing[0]._stencil._jsonStencil.title != "Exclusive gateway") {
        window.showAlert('人工节点只能连接分支节点')
        fm.undo()
        return
    }
}