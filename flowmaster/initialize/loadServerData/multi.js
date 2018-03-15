export default function(el,index,modelData){
    
    if(modelData.childShapes[index].properties.reduxData){
        rdx.dispatch({type:'multi/init',data: modelData.childShapes[index].properties.reduxData })        
    }
    
    delete modelData.childShapes[index].properties.reduxData
    delete modelData.childShapes[index].properties.multiinstance_parties
    delete modelData.childShapes[index].properties.multiinstance_type
    delete modelData.childShapes[index].properties.multiinstance_cardinality
    delete modelData.childShapes[index].properties.multiinstance_variable
    delete modelData.childShapes[index].properties.usertaskassignment
}
