export default (shape) => {    
    // 删除节点的时候  维护nameManager
    const name = shape.properties['oryx-name']
    let index = -1
    fm.nameManager.repo.some((el,ind)=>{
        if(el.name == name){
            index = ind
            return true
        }
    })
    if (index > -1) {
        fm.nameManager.repo.splice(index, 1)
    }

}