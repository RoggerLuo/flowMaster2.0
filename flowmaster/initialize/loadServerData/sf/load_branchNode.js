const getShapeFactory = (allShapes) => (id) => {
    const filtered = allShapes.filter((child) => child.resourceId == id)
    return filtered[0]
}
const getGatewayBySf = (allShapes, currentId) => {
    const filtered = allShapes.filter((child) => { // 遍历所有的节点
        return child.outgoing.some((next_shape) => next_shape.resourceId == currentId)
    })
    return filtered[0]
}
const get_branchNode_options = (gateway, getShape) => {
    return gateway.outgoing.map((_sf) => {
        const sf = getShape(_sf.resourceId)
        const sf_next = getShape(sf.outgoing[0].resourceId)
        return {
            branchResourceId: sf.resourceId,
            name: sf_next.properties['oryx-name'],
            defaultflow: '',
            choosed: 'false'
        }
    })
}
export default function(el, modelData) {
    const currentId = el.resourceId
    const allShapes = modelData.childShapes
    const getShape = getShapeFactory(allShapes)
    const gateway = getGatewayBySf(allShapes, currentId)
    const data = get_branchNode_options(gateway, getShape)
    const next_shape_name = getShape(el.outgoing[0].resourceId).properties.name
    const reduxDataObj = {
        resourceId: gateway.resourceId,
        data,
        choosed: { text: next_shape_name, value: currentId }
    }
    if (reduxDataObj.data.length) { /* 要放在switchElement后面，不然会顺序会出问题，元素id还没更新 */
        rdx.dispatch({ type: 'branchNodeInit', data: reduxDataObj })
    }
}
