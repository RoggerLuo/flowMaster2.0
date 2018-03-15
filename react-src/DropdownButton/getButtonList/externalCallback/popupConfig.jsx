import Comp from './ReduxCompGenerator'
import confirmButtonEvent from './confirmButtonEvent'
export default function(cb){
    return {
        //external callback
        content:Comp,
        confirm:confirmButtonEvent(cb),
        type:'callPopup',
        height:'78%',//'484px',
        title:'button.option10',
        width:'701px'
    }
}
