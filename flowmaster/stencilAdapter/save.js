export default function(jsonObj) {
    // debugger  转换过去
    jsonObj.childShapes.forEach((el)=>{
        switch(el.stencil.id){
            case 'CirculationTask':
                el.stencil.id = 'ServiceTask'
                break
            case 'ManualTask':
                el.stencil.id = 'UserTask'
                break
            case 'ParallelGateway':
                el.stencil.id = 'InclusiveGateway'
                break
        }        
    })

}