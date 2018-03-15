
export default ($scope) => {
    var json = fm.getJson()
    return json.childShapes.some((el, index) => {
        
        if(el.stencil.id == 'SequenceFlow'){


            if (el.properties["name"]) return
            const shape = fm.getShapeById(el.resourceId)

            /* 设定默认值 */
            if(fm.last.is("User task",shape)) window.setPropertyAdvance({key:'oryx-name',value:'同意'}, shape)

            if(fm.manual.is.sf(shape)){
                /* 定位的关键代码 */
                fm.editor.setSelection([shape])
                fm.editor.updateSelection()
                
                const last = fm.getIncoming(shape)
                if(last){ //如果存在上一个节点
                    const name = last.properties["oryx-name"]
                    window.showAlert(`连接到“${name}”节点的<span style="color:orange">连线</span>未命名`)
                }else{
                    window.showAlert(`<span style="color:orange">连线</span>未命名`)
                }
                return true
            }
        }


    })
}