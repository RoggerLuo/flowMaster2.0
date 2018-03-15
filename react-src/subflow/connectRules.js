export default function(el) {
    const shape = fm.getShapeById(el.resourceId)
    const nextShape = fm.getOutgoingX2(shape)
    if(nextShape){
        if (fm.getTitle(nextShape) == 'Subflow') {
            window.showAlert('不支持设置2个连续的子流程节点')
            fm.undo()
            return
        }
    }
    // ----------
    const previousShape = fm.getIncomingX2(shape)
    if(previousShape){
        switch (fm.getTitle(previousShape)) {
            case 'Circulation task':
                window.showAlert('子流程节点前不能连接传阅节点')
                fm.undo()
                break
            case 'Inclusive gateway':
                window.showAlert('子流程节点前不能连接并行汇聚节点')
                fm.undo()
                break
            case 'Subflow':
                window.showAlert('不支持设置2个连续的子流程节点')
                fm.undo()
                break
        }
        if(fm.multi.is.gateway(previousShape)){
            window.showAlert('子流程节点前不能连接会签节点')
            fm.undo()
        }
    }
    // ----------
    let branchCounter = 0
    shape.outgoing.forEach(function(el) {
        branchCounter += 1
    })
    if (branchCounter >= 2) {
        window.showAlert('子流程节点不能有分支连线')
        fm.undo()
    }

}