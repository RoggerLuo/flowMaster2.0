// 开始节点后如果是条件分支或者并行分支，且分支后的节点是审批或者传阅，屏蔽【允许上节点指定下节点审批人】选项
function start_with_gateway(){
    const shape = fm.currentSelectedShape
    const title = fm.getTitle(fm.getIncomingX2(shape))
    if((title == 'Exclusive gateway')||(title == 'Parallel gateway')){
        if(fm.getTitle(fm.getIncomingX2(fm.getIncomingX2(shape))) == 'Start event'){
            return true            
        }
    }
    return false
}

export default (currentRepo) => {
    if(start_with_gateway()){
        return true
    }

    const cate = currentRepo.data && currentRepo.data[0] && currentRepo.data[0].cate || ''
    if(!cate) return false
    

    if(
        !(
            (cate=='boss') ||
            (cate=="EMPLOYEE") ||
            (cate=='customizeRole') ||
            (cate=='ORG')
        )
    ){
        return true
    }
}
