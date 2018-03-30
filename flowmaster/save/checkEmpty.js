'use strict'
export default ($scope) => { 
    var json = fm.getJson() 
    return json.childShapes.some((el, index) => {
        switch (el.stencil.id) {
            case 'StartNoneEvent':
                if (el.outgoing.length == 0) {
                    window.showAlert('请连接上开始节点')
                    fm.spotlight(fm.getShapeById(el.resourceId))
                    return true
                }
                break
            case 'ExclusiveGateway':
                if (el.outgoing.length < 2) {
                    window.showAlert('使用分支节点需要两个以上的分支')
                    fm.spotlight(fm.getShapeById(el.resourceId))
                    return true
                }
                break
            case 'CirculationTask':
                const rolesjson = el.properties.objData
                const zero = rolesjson && rolesjson.length == 0
                if(!rolesjson || zero){
                    window.showAlert('"' + el.properties.name + '"的传阅人员设置不能为空') //传阅节点
                    fm.spotlight(fm.getShapeById(el.resourceId))
                    return true
                }
                break
            case 'ManualTask':
            case 'UserTask':
                const ta = el.properties.usertaskassignment
                if (!ta) {
                    window.showAlert('"' + el.properties.name + '"的审批人员设置不能为空') //审批节点
                    fm.spotlight(fm.getShapeById(el.resourceId))
                    return true
                }
                if (ta && ta.assignment && (ta.assignment.candidateOwners.length == 0)) {
                    window.showAlert('"' + el.properties.name + '"的审批人员设置不能为空') //审批节点
                    fm.spotlight(fm.getShapeById(el.resourceId))
                    return true
                }
                break

            case 'MultiUserTask':
                if (!el.properties.multiinstance_parties) {
                    window.showAlert('"' + el.properties.name + '"内容不能为空') //审批节点
                    fm.spotlight(fm.getShapeById(el.resourceId))

                    return true
                }

                if (el.properties.multiinstance_parties.length == 0) {
                    window.showAlert('"' + el.properties.name + '"内容不能为空') //审批节点
                    fm.spotlight(fm.getShapeById(el.resourceId))

                    return true
                }

                if ((el.properties.multiinstance_parties.length == 1) && (el.properties.multiinstance_parties[0] == 0)) {
                    window.showAlert('"' + el.properties.name + '"内容不能为空') //会签节点
                    fm.spotlight(fm.getShapeById(el.resourceId))

                    return true
                }

                return el.properties.multiinstance_parties.some(_el=>{
                    if(_el.length ==0){
                        window.showAlert('"' + el.properties.name + '"内容不能为空') //审批节点
                        fm.spotlight(fm.getShapeById(el.resourceId))
                        return true                        
                    }else{
                        return false
                    }
                })

                break
        }
    })
}