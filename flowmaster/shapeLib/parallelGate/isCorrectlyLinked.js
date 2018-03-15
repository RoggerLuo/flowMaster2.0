// 注意一个节点可能有多个incoming和outgoing
// 注意形成无限循环的结构


// 从parallelGateway出发找outgoing，也就是child，然后直到找到inclusive为止，
// 这中间的都算 collections
let endless_loop_proofer = 0
function iterChildren(parallelGateway, arr) {
    //取一个节点
    const outgoings = parallelGateway.outgoing
    outgoings.forEach(child => { //对这个节点所有的child 也就是连出去的线，比如说连了两根线，进行一些处理
        
        if (fm.getTitle(child) == 'Inclusive gateway') {
            //do nothing
        } else {
            // if (child.incoming.length > 1){
                if(arr.some(elem => elem.resourceId == child.resourceId)){ //去重
                    endless_loop_proofer+=1
                    if (endless_loop_proofer>1000) return
                }else{
                    arr.push(child)
                }
            // } 
            iterChildren(child, arr)
        }
    })
}

// 用来检测 并行里的支流之间会不会有连结，不能连结
// 只有incoming>1的节点才需要检测
let endless_loop_proofer2 = 0
function findNearestShapeOfParaGate(shape,arr){
    const incomings = shape.incoming
    incomings.forEach(incomingOfShape=>{
        //中间隔了个sequence flow 
        if (fm.getTitle(incomingOfShape) == 'Parallel gateway') { 
            arr.push(shape.outgoing[0])
        }else{
            //如果上上一个节点不是parallel那么就继续迭代自身【一次向上移动一级，不要跳两级】
            endless_loop_proofer2+=1
            if(endless_loop_proofer2>1000) return
            findNearestShapeOfParaGate(incomingOfShape,arr)
        }
    })
}


// 向上检测 和 向下检测， 判断并行中的节点 是不是和外部支流有连结，不能有连结
let endless_loop_proofer_up = 0
let endless_loop_proofer_up_arrary = []
function upCheck(shape){

    let flag = true
    const incomings = shape.incoming
    incomings.forEach(incomingOfShape=>{
        const title = fm.getTitle(incomingOfShape)
        if(title == 'Start event'){
            flag = false
            return
        }
        if(title == 'Parallel gateway'){
            flag = true
            return 
        }
        endless_loop_proofer_up+=1
        if(endless_loop_proofer_up>1000) {
            flag = true
            return    
        }
        if(!endless_loop_proofer_up_arrary.some(el=>el ==incomingOfShape.resourceId)){
            endless_loop_proofer_up_arrary.push(incomingOfShape.resourceId)
            flag = upCheck(incomingOfShape)            
        }else{
            // do nothing, go on
        }
    })
    return flag
}



let endless_loop_proofer_down = 0
let endless_loop_proofer_down_arrary = []
function downCheck(shape){
    let flag = true
        const outgoings = shape.outgoing
        outgoings.forEach(outgoingOfShape=>{
            const title = fm.getTitle(outgoingOfShape)
            if(title == 'End event'){
                flag = false
                return
            }
            if(title == 'Inclusive gateway'){
                flag = true
                return 
            }
            endless_loop_proofer_down+=1
            if(endless_loop_proofer_down>1000) {
                flag = true
                return    
            }
            if(!endless_loop_proofer_down_arrary.some(el=>el ==outgoingOfShape.resourceId)){
                endless_loop_proofer_down_arrary.push(outgoingOfShape.resourceId)
                flag = upCheck(outgoingOfShape)            
            }else{
                // do nothing, go on
            }
        })
        return flag
}

const isCorrectlyLinked = () => {
    const json = fm.getJson()
    const collections = [] //在两个并行中 incoming大于两个的元素
    const sourceShape = [] //最后的'源shape'
    // 先iter一次
    json.childShapes.forEach((el, index) => {
        if (el.stencil.id == 'ParallelGateway') {
            const ParallelGateway = fm.getShapeById(el.resourceId)
            iterChildren(ParallelGateway, collections)
        }
    })
    
    // ---------
    // 往上 往下 check一下collections
    if(collections.some(el=>!upCheck(el))){
        window.showAlert('并行分支内的节点不能连结其他外部的分支')
        endless_loop_proofer_up = 0
        endless_loop_proofer_up_arrary = []
        return false
    }
    if(collections.some(el=>!downCheck(el))){
        window.showAlert('并行分支内的节点不能连结其他外部的分支')
        endless_loop_proofer_down = 0
        endless_loop_proofer_down_arrary = []
        return false
    }
    //这些引用的变量会无限增加，每一轮需要清0
    endless_loop_proofer_up = 0
    endless_loop_proofer_up_arrary = []
    endless_loop_proofer_down = 0
    endless_loop_proofer_down_arrary = []
    //
    endless_loop_proofer = 0
    endless_loop_proofer2 = 0 //判断内部连结时使用的变量

    // ---------

    // 用来检测 并行里的支流之间会不会有连结，不能连结
    // 从选出的shape里求它们的source
    collections.forEach((el)=>{
        if(el.incoming.length>1){ // 只有incoming>1的节点才需要检测
            findNearestShapeOfParaGate(el,sourceShape)            
        }
    })

    // 从collections中往上溯源，离最近的parallel的last shape如果不是同一个，那就有问题
    if(sourceShape.length > 1){
        if(sourceShape.some(el=>{
            if(sourceShape[0].resourceId != el.resourceId){
                window.showAlert('并行分支不同支流之间不能有连结')
                return true
            }
        })){
            return false
        }
    }


    return true
}
export default isCorrectlyLinked
