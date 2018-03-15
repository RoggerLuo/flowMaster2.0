export default function(el,index,modelData){
    // if(el.properties.objData){
    //     const inputData = el.properties.objData.map((el2)=>{ //会签组12345
    //         let obj = {cate:el2.cate,value:el2.id,text:el2.text}
    //         if(el2.value2) obj.value2 = el2.value2            
    //         return  obj
    //     })  

    //     global.reduxStore.dispatch({
    //         type:'circulation/init',
    //         data:{
    //             data:inputData,
    //             id:el.resourceId,
    //             previousNodeSpecified:el.properties.previousNodeSpecified||false
    //         }
    //     })        
    // }
    if(el.properties.reduxData){
        rdx.dispatch({type:'circulation/init',data: el.properties.reduxData})        
    }
    delete modelData.childShapes[index].properties.reduxData
    delete modelData.childShapes[index].properties.dataSourceRefs
    delete modelData.childShapes[index].properties.objData
    delete modelData.childShapes[index].properties.servicetaskdelegateexpression
    delete modelData.childShapes[index].properties.servicetaskfields
    delete modelData.childShapes[index].properties.previousNodeSpecified
    delete modelData.childShapes[index].properties.previousNodeSpecifiedSingle

}