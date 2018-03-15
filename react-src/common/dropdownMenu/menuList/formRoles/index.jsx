import Comp from './Comp'
const roleIsEmpty = (state) => {
    if(state.dropdown.dropdown2.value=='initial'){
        global.showAlert('尚无角色可选择')
        return true
    }else{
        return false
    }
}
export default function(cb){
    return {
        confirm(){
            const state = global.reduxStore.getState()
            if(!state.dropdown.dropdown2.value) return
            const item = {
                cate:'form',
                value:state.dropdown.dropdown2.value,
                text:state.dropdown.dropdown2.text
            }
            cb(item)
            rdx.dispatch({type:'getBackToDefaultDp1'})
            return true
        },
        content:Comp,
        type:'callPopup',
        height:'300px',
        title:'button.option5',
        width:'500px'
    }
}
