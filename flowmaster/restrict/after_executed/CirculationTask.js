global.fm = global.fm || {}
fm.circulation = {}
fm.circulation.isSuccessive = function (shape) {
    const nextShape = fm.getOutgoingX2(shape)
    if(nextShape){
        if(fm.getTitle(nextShape) == 'Circulation task') {
            window.showAlert('不支持设置2个连续的传阅节点')
            fm.undo()
        }
    }
}

fm.circulation.isSingleBranch = function(shape) {
    var branchCounter = 0
    shape.outgoing.forEach((el) => {branchCounter += 1})
    if (branchCounter >= 2) {
        window.showAlert('传阅节点不能有其他分支')
        return false
    }
    return true
}

