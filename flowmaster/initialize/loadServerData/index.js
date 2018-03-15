import loadUserTask from './UserTask'
import loadEndEvent from './loadEndEvent'
import multi from './multi'
import sf from './sf'
import manual from './manual'
import service from './service'
import subflow from './subflow'
export default function(modelData){ /* 对服务器上的数据进行 解析 然后加载进redux */
    fm.nameManager.repo = modelData.properties.nameData || []
    delete modelData.properties.nameManager

    modelData.childShapes && modelData.childShapes.forEach((el,index)=>{
        if(el.properties.classify == "SubProcess"){
            subflow(el,index,modelData)
            return            
        }
        switch(el.stencil.id){
            case 'CirculationTask':
                service(el,index,modelData)
                break
            case 'ManualTask':
                manual(el,index,modelData)
                break
            case 'SequenceFlow':
                sf(el,index,modelData)
                break
            case 'EndNoneEvent':
                loadEndEvent(el,index,modelData)
                break
            case 'EndErrorEvent':
                loadEndEvent(el,index,modelData)
                break
            case 'UserTask':
                loadUserTask(el,index,modelData)
                break
            case 'MultiUserTask':
                multi(el,index,modelData)
            break
        }
    })
}
