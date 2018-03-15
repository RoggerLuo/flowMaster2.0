import load_branchNode from './load_branchNode'

export default function(el, index, modelData) {

    // 如果是 普通分支的sf， 那么就初始化到 sf branch的redux
    if (el.properties.reduxData_branch) {
        rdx.dispatch({ type: 'sequenceDataInit', data: el.properties.reduxData_branch })
    }

    // 如果设置了branchNode，就初始化branchNode
    if (el.properties.defaultflow == "true") {
        load_branchNode(el, modelData) ///* 要放在switchElement后面，不然会顺序会出问题，元素id还没更新 */
    }

    // 如果设置了 业务状态
    if (el.properties.reduxData) {
        rdx.dispatch({ type: 'sf/init', data: el.properties.reduxData })
    }


    delete modelData.childShapes[index].properties.reduxData
    delete modelData.childShapes[index].properties.reduxData_branch

    delete modelData.childShapes[index].properties.defaultflow
    delete modelData.childShapes[index].properties.conditionsequenceflow

    delete modelData.childShapes[index].properties.isInGates
    delete modelData.childShapes[index].properties.businessStatusId
}

