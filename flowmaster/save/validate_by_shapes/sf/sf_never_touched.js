export default function(){
    let flag = true
    /* 判断未点击的连线 */
    fm.getJson().childShapes.forEach((el, index) => {
        if(el.stencil.id != 'SequenceFlow') return 

        const sfRepo = rdx.store.getState().sf.repo
        const not_in_repo = !sfRepo.some(eachRepo=>el.resourceId == eachRepo.id)
        if(not_in_repo){
            
            let sf = fm.getNodeById(el.resourceId)

            if(fm.next.is("Exclusive gateway",sf)) return false  //三种分支都不显示
            if(fm.next.is("Circulation task",sf)) return false
            if(fm.parallelGate.isShapeIn(sf)) return false


            /* 定位的关键代码 */
            fm.editor.setSelection([sf])
            fm.editor.updateSelection()

            if(!!sf.properties["oryx-name"]){ //如果有名字，就alert出来
                window.showAlert(`连线<span style="color:orange">"${sf.properties["oryx-name"]}"</span>业务状态未设置`)
            
            }else{ //如果没有命名过
                const last = fm.getIncoming(sf)
                if(last){ //如果存在上一个节点
                    const name = last.properties["oryx-name"]
                    window.showAlert(`连接到“${name}”节点的<span style="color:orange">连线</span>业务状态未设置`)
                }else{
                    window.showAlert(`<span style="color:orange">连线</span>业务状态未设置`)
                }
            }
            flag = false
        }
    })
    return flag
}
