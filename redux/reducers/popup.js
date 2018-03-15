import {toJS,fromJS,List, Map} from 'immutable'
let initial = {
    confirm(){},
    content:'',
    display:'none',
    title:'请输入title',
    height:'65%',
    width:'50%',
    customRoles:[],
    isSubflow:false
}
const Reducer = (state = initial, action) => {
    const data = fromJS(state)

    switch (action.type) {
        // case 'popup/updateSelected':
        //     return Object.assign({}, state, {
        //         selectedCustomizedRoles:action.data
        //     })

        case 'popup/update':
            return Object.assign({}, state, {
                customRoles: action.data
            })
        case 'callPopup':
            return Object.assign({}, state, {
                confirm:action.confirm||function(){},
                content:action.content||'',
                title:action.title||"请输入title",
                display:'',
                height:action.height||'65%',
                width:action.width||'50%',
                isSubflow:action.isSubflow || false,
                style:action.style || false,
                outerStyle:action.outerStyle || false,
                onCancel:action.onCancel || false
            })
        case 'hidePopup':
            return Object.assign({}, state, {
                display:'none'
            })
        
        default:
            return state
    }
}

export default Reducer
