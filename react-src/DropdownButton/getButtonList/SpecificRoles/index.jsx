import Comp from './Comp'
import optionData from './optionData'

export default function(cb){
    return {
        confirm(){
            const state = rdx.getState()
            
            if(!state.dropdown.dropdown2.value || (state.dropdown.dropdown2.value=='initial')){
                const item = optionData()[0]
                item.cate = "historicTask"
                cb(item)
                //把选项、默认值回归初始值
                rdx.dispatch({type:'getBackToDefaultDp1'})
                return true
            }

            const text = state.dropdown.dropdown2.text
            const item = {
                cate:'historicTask',
                value:state.dropdown.dropdown2.value,
                text
            }
            cb(item)
            rdx.dispatch({type:'getBackToDefaultDp1'})
            return true
        },
        content:Comp,
        type:'callPopup',
        height:'63%',
        title:'button.option6',
        width:'500px'
    }
}
