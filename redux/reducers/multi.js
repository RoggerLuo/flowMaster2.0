import { fromJS, List, Map } from 'immutable';
import { reduceWrap, transformer } from '../tools'
// const initial = {
//     repo:[
//         // {
//         //     data:[ 
//         //         []
//         //     ],
//         //     id:'initial'
//         // },
//     ],
//     mode:'normal',
//     id:'initial'
// }
const uniqAdd = (data, item) => {
    data = data.slice() //克隆immutable数据
    if (data.some(el => el.value == item.value)) return data
    data.push(item)
    return data
}

export default reduceWrap('Multi user task', (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'multi':
            if (ind == 'not exist') {
                return data
                    .updateIn(['repo'], List(),(a) => a.push( fromJS(action.data) ))
                    .updateIn(['mode'], 'normal', (el) => 'normal').toJS()
            }
            return transformer(data, ind, action.args)

        case 'multi/init': //very beginning start 
            return data
                .updateIn(['repo'], List(),(a) => a.push( fromJS(action.data) ))
                .updateIn(['mode'], 'normal', (el) => 'normal').toJS()


        case 'multi/newNodeInit': //
            if (ind == 'not exist') { 
                action.init()
                const newCreate = fromJS({ id: state.id, data: [[]], sqlData:[]}) 
                return data.updateIn(['repo'], 'initial', (el) => {
                    return el.push(newCreate)
                }).toJS()
            }
            return state

        case 'switchElement':
            return data.updateIn(['id'], 'initial', (el) => {
                return action.nextId
            }).toJS()

        case 'modeChange':
            return Object.assign({}, state, {
                mode: action.value
            })
        case 'addGroup':
            if (ind == 'not exist') {
                const newCreate = fromJS({ id: state.id, data: [[]] }) //cate:false
                return data.updateIn(['repo'], 'initial', (el) => {
                    return el.push(newCreate)
                }).toJS()
            }
            return data.updateIn(['repo', ind], 'initial', (el) => {
                return el.set('data', el.get('data').push([]))
            }).toJS()

        case 'deleteGroup':
            return data.updateIn(['repo', ind, 'data'], 'initial', (el) => {
                return el.delete(action.groupIndex)
            }).toJS()

        case 'multi/clear':
            return data.updateIn(['repo', ind, 'data', action.index], [], (el) =>[]).toJS()

        case 'multi/addChar':
            const poolData = state.repo[ind].data[action.index]
            return data
                // deprecated .updateIn(['repo', ind, 'cate'], '', (el) => action.item.cate)
                .updateIn(['repo', ind, 'data', action.index], 'initial', (el) => {
                    return fromJS(uniqAdd(poolData, action.item))
                }).toJS()

        case 'multi/delelteRole':
            return data.updateIn(['repo', ind, 'data', action.groupIndex], 'initial', (el) => {
                return el.delete(action.characterIndex)
            }).toJS()

        default:
            return state
    }
})
