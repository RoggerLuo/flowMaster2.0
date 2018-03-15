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
            if(roleIsEmpty(state)) return 
            const text = '最近'+state.dropdown.dropdown1.text+'级分管，' + state.dropdown.dropdown2.text
            const item = {
                cate:'role',
                value:state.dropdown.dropdown1.value,
                value2:state.dropdown.dropdown2.value,
                text
            }
            cb(item)
            global.reduxStore.dispatch({type:'getBackToDefaultDp1'})
        },
        content:Comp,
        type:'callPopup',
        height:'300px',
        title:'button.option2',
        width:'500px'
    }
}
