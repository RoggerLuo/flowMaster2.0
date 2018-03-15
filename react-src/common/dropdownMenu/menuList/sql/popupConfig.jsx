import C from './c'
import confirmButtonEvent from './confirmButtonEvent'
export default function(cb){ 
    return {
        content:C,
        confirm:confirmButtonEvent(cb), 
        onCancel(){
            rdx.dispatch({type:'sql/renew'})
        },
        type:'callPopup',
        height:'87%',
        title:'button.option7',
        width:'701px'
    }
}
