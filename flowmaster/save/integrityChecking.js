function incomingCheck(shape){
    if(fm.getTitle(shape) == 'Start event') return true
    if (shape.incoming.length == 0) return false
    return true
}

function outgoingCheck(shape){
    if(fm.getTitle(shape) == 'End event') return true
    if (shape.outgoing.length == 0) return false
    return true
}

export default () => {
    let integrity = true
    fm.getNodes().some(shape => {
        // 如果都没问题就不用向下执行了
        if(incomingCheck(shape) && outgoingCheck(shape)) return false

        // 如果有问题，就具体看看问题是什么
        if (fm.getTitle(shape) == 'Sequence flow') {
            const name = shape.properties["oryx-name"] || ''
            if (name != '') {
                window.showAlert('连线"' + name + '"未连接上其他节点')
            }else{
                window.showAlert('有至少一条连线未连接上其他节点')
            } 
        }

        let nodeName = shape.properties["oryx-name"] && ('"' + shape.properties["oryx-name"] + '"') || ''
        window.showAlert('节点' + nodeName + '未连接上其他节点')
        integrity = false
        return true
    })
    return integrity
}