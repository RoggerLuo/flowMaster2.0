// import {fromJS,List, Map} from 'immutable';
const initial = {visibilityStatus:'hidden'}

const Reducer = (state = initial, action) => {
    switch (action.type) {
        case 'changeSuperPopupVisibility':
            if(state.visibilityStatus!='visible'){
                return Object.assign({}, state, {
                    visibilityStatus: 'visible'
                })

            }else{
                // return state.set('visibilityStatus','hidden')
                return Object.assign({}, state, {
                    visibilityStatus: 'hidden'
                })

            }

        case 'closeSuperPopupVisibility':
            return Object.assign({}, state, {
                visibilityStatus: 'hidden'
            })

        default:
            return state
    }
}

export default Reducer
