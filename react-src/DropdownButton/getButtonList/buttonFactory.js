import HigherLevelAction from './HigherLevel'
import pickUpPeople from './pickUpPeople'
import customRoles from './customRoles'
import FormRoles from './FormRoles'
import SpecificNodeRoles from './SpecificRoles'
import SQL from './SQL'
import externalCallback from './externalCallback'
// import second from './second'
function subflow() {
    return [
        HigherLevelAction,
        pickUpPeople,
        customRoles
    ]
}

function normal(cate) {
    if (!cate) {
        return [ // 全显示
            HigherLevelAction,
            pickUpPeople,
            customRoles, //添加角色
            FormRoles,
            SpecificNodeRoles, //特定节点审批人
            SQL, //(groupInd)
            // second,
            externalCallback
        ]
    }
    switch (cate) {
        case 'boss':
            return [HigherLevelAction]
        case 'form':
            return [FormRoles]
        case 'historicTask':
            return [SpecificNodeRoles]
        case 'fromDb':
            return [SQL]
        case 'callBack':
            return [externalCallback]
            // case 'EXTERNAL':
            //     buttonActions = [second]
            //     break
        default:
            return [pickUpPeople, customRoles]
    }
}

export default function(cate, buttonMode) {
    if (buttonMode == 'subflow') { // 在子流程中选择审批人的时候， 只显示3项
        return subflow()
    } else {
        return normal(cate)
    }
}