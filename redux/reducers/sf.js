import { toJS, fromJS, List, Map } from 'immutable'
import { reduceWrap, transformer } from '../tools'

const uniqAdd = (data, item) => {
    data = data.slice() //克隆immutable数据
    if (data.some(el => el.value == item.value)) return data
    data.push(item)
    return data
}

/*
    {   
        id:当前id,
        repo:[
        
            {
                id: '123',
                subProcess: {}, 
                data:[
                    {}
                ],
                isWaiting: , 
                isOne:true,
                mainForm:{},
                leftFields,
                mainRight:{
                    fieldsId:itemObj
                },
                subRights:{
                    leftFormId:{
                        rightFormId:'',
                        map:{
                            {fieldId:itemObj},
                            {fieldId:itemObj}
                        }
                    }

                }

            },
        
        ]
    }
*/
const newNode = id => fromJS({id,businessStatus: { text: '请选择', value: false }})

export default reduceWrap('Sequence flow', (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'sf':
            if (ind == 'not exist') return data.updateIn(['repo'], '', (a) => a.push(newNode(state.id))).toJS()                
            return transformer(data, ind, action.args)

        case 'sf/init':
            return data.updateIn(['repo'], List(), (a) => a.push(action.data)).toJS()

            // case 'subflow/newNodeInit':
            //     if (ind == 'not exist') return data.updateIn(['repo'], '', (el) => el.push(newNode(state.id, []))).toJS()
            //     return state

            // case 'subflow/add':
            //     if (ind == 'not exist') return data.updateIn(['repo'], 'initial', (el) => el.push(newNode(state.id, [action.item]))).toJS()
            //     return data.updateIn(['repo', ind], 'initial', (el) => el.set('subProcess', action.subProcess)).toJS()

            // case 'subflow/addRole':
            //     if (ind == 'not exist') return data.updateIn(['repo'], 'initial', (el) => el.push(newNode(state.id, [action.item]))).toJS()
            //     const poolData = state.repo[ind].data
            //     return data
            //         .updateIn(['repo', ind], 'initial', (el) => el.set('data', fromJS(uniqAdd(poolData, action.item)))).toJS()

            // case 'subflow/clear':
            //     return data.updateIn(['repo', ind], fromJS({}), (el) => {
            //         return fromJS(newNode(state.id, []))
            //     }).toJS()

            // case 'subflow/deleteRole':
            //     return data.updateIn(['repo', ind], 'initial', (el) => {
            //         return el.set('data', el.get('data').delete(action.index))
            //     }).toJS()

            // case 'subflow/isWaiting':
            //     return data.updateIn(['repo', ind, 'isWaiting'], 'true', (el) => action.isWaiting).toJS()
            // case 'subflow/isOne':
            //     return data.updateIn(['repo', ind, 'isOne'], 'true', (el) => action.isOne).toJS()

            // case 'subflow/leftFields':
            //     return data.updateIn(['repo', ind, 'leftFields'], '', (el) => action.leftFields).toJS()

            // case 'subflow/mainRight':
            //     return data.updateIn(['repo', ind, 'mainRight', action.fieldId], fromJS({}), (el) => action.item).toJS()

            // case 'subflow/subRights/rightFormId':
            //     //如果没有就新建
            //     //如果有就更新
            //     return data.updateIn(['repo', ind, 'subRights', action.leftFormId], fromJS({ rightFormId: false, map: {} }), (el) => {
            //         // debugger
            //         // if(!el) return {rightFormId:action.rightFormId,map:{}}
            //         return el.set('rightFormId', action.rightFormId)
            //     }).toJS()

            // case 'subflow/subRights/rightFormId/fieldId':
            //     //如果没有就新建
            //     //如果有就更新
            //     return data.updateIn(['repo', ind, 'subRights', action.leftFormId, 'map'], fromJS({}), (el) => {
            //         // return action.item
            //         // debugger
            //         // if(!el) return {rightFormId:action.rightFormId,map:{}}
            //         return el.set(action.fieldId, action.item)
            //     }).toJS()

        default:
            return state
    }
})