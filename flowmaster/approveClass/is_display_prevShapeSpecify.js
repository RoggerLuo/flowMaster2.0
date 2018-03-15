export const isDisplay = (shape, repo) => {
    if (fm.approve.hideCheck(repo)) return false
    if (fm.last.is('Circulation task', fm.getIncoming(shape))) return false
    if (fm.last.is('Inclusive gateway', fm.getIncoming(shape))) return false
    if (fm.last.is('Subflow', fm.getIncoming(shape))) return false
    if (fm.multi.is.gateway(fm.getIncomingX2(shape))) return false

    return true
}

export default (shape, repo) => { // return false,则 返回null
    if(isDisplay(shape, repo)){

        // 如果是分支和并行，则跳过， 看分支前面的那个节点决定
        const previousShapeTitle = fm.getTitle(fm.getIncomingX2(shape))
        if (previousShapeTitle == 'Exclusive gateway' || previousShapeTitle == 'Parallel gateway') {
            const gateway = fm.getIncomingX2(shape)
            if (gateway) { //把gateway当成 currentShape，就是等于跳过分支节点的存在
                if (isDisplay(gateway, repo)){
                    return true  
                }else{
                    return false
                }
            }
        }
        return true
    }else{
        return false  
    } 
}


