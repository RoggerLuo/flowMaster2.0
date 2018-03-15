import Comp from './ReduxCompGenerator'
import confirmButtonEvent from './confirmButtonEvent'
export default function(cb){ //groupInd
    // global.reduxStore.dispatch({type:'sql/init'})
    return {
        content:Comp(),
        confirm:confirmButtonEvent(cb), //groupInd
        onCancel(){
            rdx.dispatch({type:'sql/renew'})
        },
        type:'callPopup',
        height:'87%',
        title:'button.option7',
        width:'701px'
    }
}
