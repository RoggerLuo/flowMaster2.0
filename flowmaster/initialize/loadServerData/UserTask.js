export default function(el,index,modelData){
    if(!el.properties.usertaskassignment) return
    if(el.properties.usertaskassignment.assignment){//避免assignment为空报错
        if(typeof(el.properties.usertaskassignment.assignment.candidateOwners) !='object'){
            delete modelData.childShapes[index].properties.usertaskassignment
            return                                     
        }        
    }
    if(el.properties.reduxData) {
        rdx.dispatch({type:'usertask/init',data:el.properties.reduxData})        
    }
    delete modelData.childShapes[index].properties.usertaskassignment
    delete modelData.childShapes[index].properties.dataSourceRefs
    delete modelData.childShapes[index].properties.dataSourceSTDdata
    delete modelData.childShapes[index].properties.previousNodeSpecified
    delete modelData.childShapes[index].properties.approveItems
    delete modelData.childShapes[index].properties.reduxData
    delete modelData.childShapes[index].properties.isInGates
    delete modelData.childShapes[index].properties.previousNodeSpecifiedSingle

}