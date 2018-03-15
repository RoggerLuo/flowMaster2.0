import { toJS, fromJS, List, Map } from 'immutable'
import { reduceWrap, transformer } from '../tools'

const uniqAdd = (data, item) => {
    data = data.slice() //克隆immutable数据
    if (data.some(el => el.value == item.value)) return data
    data.push(item)
    return data
}

const newRepo = (id, data) => fromJS({ id, data })
export default reduceWrap('Manual task', (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'manual':
            if (ind == 'not exist') return data.updateIn(['repo'], '', (a) => a.push(newRepo(state.id, []))).toJS()
            return transformer(data, ind, action.args)

        case 'all/onShapeDelete':
            return fm.approve.del_by_id(data,action.id)

        case 'manual/withdrawChange':
            return data.updateIn(['repo', ind, 'withdraw'], false, (el) => !el).toJS()

        case 'manual/init':
            return data.updateIn(['repo'], List(), (el) => {
                return el.push(fromJS(action.data))
            }).toJS()
            
        case 'manual/newNodeInit':
            if (ind == 'not exist') {
                action.init()                
                const newCreate = fromJS({ id: state.id, data: []})
                return data.updateIn(['repo'], 'initial', (el) => el.push(newCreate)).toJS()
            }
            return state
        case 'manual/addRole':  //pushApproveList
            if (ind == 'not exist') {
                const newCreate = fromJS({ id: state.id, data: [action.item] })
                return data.updateIn(['repo'], 'initial', (el) => el.push(newCreate)).toJS()
            }
            const poolData = state.repo[ind].data
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', fromJS(uniqAdd(poolData, action.item)))
            }).toJS()
        case 'manual/deleteRole':
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', el.get('data').delete(action.index))
            }).toJS()
        case 'manual/clear':
            return data.updateIn(['repo', ind, 'data'], [], (el) => fromJS([])).toJS()

        default:
            return state
    }
})
