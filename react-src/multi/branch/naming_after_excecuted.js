import name_by_gateway from './name_by_gateway'

function delete_mark(){
    //如果没有连接上就 删除sf上的东西，文字和cbpass
    fm.getJson().childShapes
        .filter(shape => fm.getTitle(fm.getShapeById(shape.resourceId)) == "Sequence flow")
        .forEach(shape => {
            const _shape = fm.getShapeById(shape.resourceId)
            
            if(

                (fm.getTitle(fm.getIncomingX3(_shape)) !== "Multi user task") &&
                (fm.getTitle(fm.getIncoming(_shape)) !== "Exclusive gateway")

            ){

                if(_shape.properties['conditionsequenceflow']){
                    window.setPropertyAdvance({ key: 'oryx-name', value: '' }, _shape)
                    window.setPropertyAdvance({ key: "conditionsequenceflow", value: "" }, _shape)                    
                }
                
            }
        })
}

export default () => {
    fm.getNodes()
        .filter((shape) => fm.getTitle(shape) == "Multi user task")
        .forEach((shape) => {
            const gateway = fm.getOutgoingX2(shape)
            if(gateway.outgoing.length > 0){
                name_by_gateway(gateway)
            }
        })
    delete_mark()
}

