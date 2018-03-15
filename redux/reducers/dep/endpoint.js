import { toJS, fromJS, List, Map } from 'immutable'
import { reduceWrap, transformer } from '../tools'

const uniqAdd = (data, item) => {
    data = data.slice() //克隆immutable数据
    if (data.some(el => el.value == item.value)) return data
    data.push(item)
    return data
}
export default reduceWrap('End event', (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'endpoint/init':
            return data.updateIn(['repo'], 'initial', (el) => {
                return el.push(fromJS(action.data))
            }).toJS()
        case 'endpoint/add2pool':  //pushApproveList
            if (ind == 'not exist') {
                const newCreate = fromJS({ id: state.id, data: [action.item] })
                return data.updateIn(['repo'], 'initial', (el) => {
                    return el.push(newCreate)
                }).toJS()
            }
            const poolData = state.repo[ind].data
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', fromJS(uniqAdd(poolData, action.item)))
            }).toJS()
        case 'endpoint/delChar':
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', el.get('data').delete(action.index))
            }).toJS()
        default:
            return state
    }
})
