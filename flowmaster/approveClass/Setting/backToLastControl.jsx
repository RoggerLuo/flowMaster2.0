
function start_with_x(){
    let flag = false
    const looper1 = fm.incomingLooper('Start event',(shape)=>{
        flag = true
    })
    const looper2 = fm.incomingLooper('Exclusive gateway',(shape)=>{
        shape.incoming.forEach(looper1)  
    })
    fm.currentSelectedShape.incoming.forEach(looper2)
    return flag
}

export default (data) => {
    if(
        fm.previousShape.is('Start event')||
        fm.previousShape.is('Subflow')||
        fm.previousShape.is('Parallel gateway')||
        fm.previousShape.is('Inclusive gateway')||
        fm.previousShape.is('Circulation task')||
        start_with_x()
    ){
        data = data.filter(el => el.title != '允许退回上一节点审批人')
    }
    return data
}

