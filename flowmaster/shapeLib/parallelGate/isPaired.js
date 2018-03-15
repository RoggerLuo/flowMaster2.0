const isPaired = () => {
    const json = fm.getJson()
    //先检查是否有parallel
    let parallel = 0
    let inclusive = 0
    json.childShapes.forEach((el, index) => {
        if (el.stencil.id == 'ParallelGateway') parallel += 1
        if (el.stencil.id == 'InclusiveGateway') inclusive += 1            
    })
    if (parallel != inclusive){
        window.showAlert('并行分支和并行汇聚需要成对出现')
        return false
    } 
    return true
}
export default isPaired
