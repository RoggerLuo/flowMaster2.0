'use strict'
import multi from './multi'
import manual from './manual'
import fatherAndSon from './fatherAndSon'
import deleteSideLines from './deleteSideLines'

global.globalLockForMultiWarning = false

global.deleteNode = (selection, that) => {
    if(selection && selection[0]){
        // 删除特定节点审批人 如果删除了节点
        rdx.dispatch({type:'all/onShapeDelete',id:selection[0].resourceId})    
        // 删除的时候  维护nameManager
        fm.nameManager.onDelete(selection[0])
    }

    global.globalLockForMultiWarning = true
    const rt = main(selection,that)
    global.globalLockForMultiWarning = false
    return rt
}
function main(selection,that){
    const el = fatherAndSon(selection,that)
    if(multi(el) == 'stop') return 'stop'
    if(manual(el) == 'stop') return 'stop'
    deleteSideLines(el)
}