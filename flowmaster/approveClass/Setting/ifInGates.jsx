
export default (data) => {
    if(fm.isCurrentShapeInGates){
        data = [data[1]] //只留下"允许退回上一节点审批人"
        if(!fm.isIncomingShapeUsertask){
            data = []
        }
    }          
    return data  
}
