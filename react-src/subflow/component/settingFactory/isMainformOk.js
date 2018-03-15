export default function(repo) {
    let returnFlag = true 
    if(repo.data.length ==0 ){
        window.showAlert('子流程<span style="color:orange">第一个节点的审批人</span>未选择')
        return false
    }
    if( !fm.subflow.checkMainform(repo) || !fm.subflow.checkSubform(repo)){
        returnFlag = false
    }
    return returnFlag
}