export default function(data) {
    // 前后端 转换
    // circulation 和service
    data.model.childShapes && data.model.childShapes.forEach((el) => {
        if (el.stencil.id == 'ServiceTask') {
            if (el.properties.classify == "Circulation") {
                el.stencil.id = 'CirculationTask'
            }
        }
        if (el.stencil.id == 'UserTask') {
            if (el.properties.classify == "manual") {
                el.stencil.id = 'ManualTask'
            }
        }
        if (el.stencil.id == 'InclusiveGateway') {
            if (el.properties.classify == "ParallelGateway") {
                el.stencil.id = 'ParallelGateway'
            }
        }
        // console.log(el.stencil.id)
    })
}