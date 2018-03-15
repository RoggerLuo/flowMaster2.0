import { toJS, fromJS, List, Map } from 'immutable'
import { reduceWrap, transformer } from '../tools'

const uniqAdd = (data, item) => {
    data = data.slice() //克隆immutable数据
    if (data.some(el => el.value == item.value)) return data
    data.push(item)
    return data
}

const newRepo = (id, data) => fromJS({ id, data })

export default reduceWrap('User task', (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'all/onShapeDelete':
            return fm.approve.del_by_id(data,action.id)

        case 'usertask':
            if (ind == 'not exist') return data.updateIn(['repo'], '', (a) => a.push(newRepo(state.id, []))).toJS()
            return transformer(data, ind, action.args)
        case 'usertask/init':
            return data.updateIn(['repo'], List(), (a) => a.push(fromJS(action.data))).toJS()

        case 'usertask/change':
            return data.updateIn(['repo', ind, action.key], false, (el) => action.value).toJS()


        case 'usertask/addRole':
            if (ind == 'not exist') {
                const basic = { id: state.id, data: [action.item] } // cate: action.item.cate 
                const newCreate = fromJS(basic)
                return data.updateIn(['repo'], 'initial', (el) => el.push(newCreate)).toJS()
            }
            const poolData = state.repo[ind].data
            return data
                .updateIn(['repo', ind], 'initial', (el) => {
                    const returnData = fromJS(uniqAdd(poolData, action.item))
                    return el.set('data',returnData )
                }).toJS()
        

        case 'usertask/deleteRole':
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', el.get('data').delete(action.index))
            }).toJS()
        
        case 'usertask/clear':
            return data.updateIn(['repo', ind, 'data'], [], (el) => fromJS([])).toJS()

        default:
            return state
    }
})

/*
// case 'usertask/newNodeInit':
//     if (ind == 'not exist') return data.updateIn(['repo'], '', (a) => a.push(newRepo(state.id, []))).toJS()
//     return state

*/