
const getText = (el) => {
    if(el.properties.name.length>6){
        return el.properties.name.substr(0,6) + '...' + `（ID: ${el.resourceId.substring(4,9)}...）`
    }
    return el.properties.name + `（ID: ${el.resourceId.substring(4,9)}...）`
}

export default function(){
    const list = []
    const json = fm.getJson()
    json.childShapes.forEach((el,index)=>{
        if(fm.currentSelectedShapeItem.resourceId == el.resourceId ) return
        if(el.stencil.id == 'UserTask') list.push({text:getText(el),value:el.resourceId})
        // if(el.stencil.id == 'CirculationTask') list.push({text:getText(el),value:el.resourceId})
        if(el.stencil.id == 'ManualTask') list.push({text:getText(el),value:el.resourceId})
    })
    if(list.length == 0) list.push({text:'暂无节点可选择',value:false})
    return list
}
