import Component from './Comp'

export default function(cb){
    return {
        type:'callPopup',
        confirm:()=>{
            const state = reduxStore.getState()
            const text = '上'+state.dropdown.dropdown1.text+'级领导'
            const item = {
                cate:'boss',
                value:state.dropdown.dropdown1.value,
                value2:state.dropdown.dropdown2.value,
                text
            }
            cb(item)
            rdx.dispatch({type:'getBackToDefaultDp1'})
            return true
        },
        content:Component,
        title:'button.option1',
        height:'400px',
        width:'600px',
        outerStyle:{overflow:'auto'}
    }
}

