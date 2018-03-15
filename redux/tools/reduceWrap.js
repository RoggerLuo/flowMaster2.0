import { toJS, fromJS, List, Map } from 'immutable'
import findCurrentRepoInd from './findCurrentRepoInd'
const initialState = { repo: [], id: '' }

export default function(reducerName, cb) { //这个是reduce里 手写 写死的title, 可以有all什么的
    return function(state = initialState, action) {
        //if切换组件
        if (action.type == 'switchElement') {
            return Object.assign({}, state, { id: action.nextId, stencilTitle: action.nextStencilTitle }) 
        }

        // reduce直接以 all 命名的，比如temp，要直接穿透
        const isTitleAll = (reducerName.indexOf('all') != -1) || (reducerName.indexOf('All') != -1)
        if(isTitleAll){
            const ind = findCurrentRepoInd(state)
            return cb(state, action, ind)   
        }            

        // action.type里面有all的要穿透所有的reduce
        const isTypeAll = (action.type.indexOf('all') != -1) || (action.type.indexOf('All') != -1)
        if(isTypeAll){
            const ind = findCurrentRepoInd(state)
            return cb(state, action, ind)   
        }

        // action.type里面有init的 也要穿透所有的reduce
        const isInit = (action.type.indexOf('init') != -1) || (action.type.indexOf('Init') != -1)
        if(isInit){
            const ind = findCurrentRepoInd(state)
            return cb(state, action, ind)   
        }

        // 最后 title类型一致的才能继续走下去
        if (state.stencilTitle) {
            if(state.stencilTitle == reducerName){
                const ind = findCurrentRepoInd(state)
                return cb(state, action, ind)   
            }
        }
        
        //否则
        return state
    }
}
