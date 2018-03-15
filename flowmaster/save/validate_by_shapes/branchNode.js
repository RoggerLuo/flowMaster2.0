export default function(canvas){
    canvas.children.forEach((el) => {
        if (fm.getTitle(el) == 'Sequence flow') {
            el.setProperty('defaultflow', "false")
        }
    })
    rdx.getState().branchNode.repo.forEach((el) => {
        let shape = fm.getShapeById(el.choosed.value)
        if (!shape) return
        shape.setProperty('defaultflow', "true")
        shape.setProperty('conditionsequenceflow', '')
        shape.setProperty('reduxData', '')
    })
}
