export default (menuList, cate, buttonMode) => {
    const { sql, externalCallback, specificNodeRoles, formRoles, customizedRoles, pickUpPeople, higherLevel } = menuList

    function subflow() {
        return [
            higherLevel,
            pickUpPeople,
            customizedRoles
        ]
    }

    function normal(cate) {
        if (!cate) {
            return [ // 全显示
                higherLevel,
                pickUpPeople,
                customizedRoles, //添加角色
                formRoles,
                specificNodeRoles, //特定节点审批人
                sql, //(groupInd)
                // second,
                externalCallback
            ]
        }
        switch (cate) {
            case 'boss':
                return [higherLevel]
            case 'form':
                return [formRoles]
            case 'historicTask':
                return [specificNodeRoles]
            case 'fromDb':
                return [sql]
            case 'callBack':
                return [externalCallback]
                // case 'EXTERNAL':
                //     buttonActions = [second]
                //     break
            default:
                return [pickUpPeople, customizedRoles]
        }
    }

    if (buttonMode == 'subflow') { // 在子流程中选择审批人的时候， 只显示3项
        return subflow()
    } else {
        return normal(cate)
    }
}