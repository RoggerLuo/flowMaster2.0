export default function(el,index,modelData){
    let approveData = []
    
    // if(!el.properties.usertaskassignment) return

    // if(typeof(el.properties.usertaskassignment.assignment.candidateOwners) !='object'){
    //     delete modelData.childShapes[index].properties.usertaskassignment
    //     return                                     
    // }
    
    // approveData = el.properties.servicetaskfields.map((el2)=>{ //会签组12345
    //     let obj = {cate:el2.cate,value:el2.id,text:el2.text}
    //     if(el2.value2) obj.value2 = el2.value2            
    //     return  obj
    // })  
    if(el.properties.reduxData){
        global.reduxStore.dispatch({
            type:'subflow/init',
            data:el.properties.reduxData
            // {
            //     data:el.properties.reduxData.data,
            //     id:el.properties.reduxData.id,
            //     subProcess:el.properties.reduxData.subProcess,
            //     isWaiting:el.properties.reduxData.isWaiting
            // }
        })        
    }

    delete modelData.childShapes[index].properties.reduxData
    delete modelData.childShapes[index].properties.classify
    delete modelData.childShapes[index].properties.servicetaskdelegateexpression
    delete modelData.childShapes[index].properties.servicetaskfields
    delete modelData.childShapes[index].properties.servicetaskexpression

}