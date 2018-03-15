import { toJS, fromJS, List, Map } from 'immutable'
import { defaultOption, newRule, newCreate } from './basic'
import { reduceWrap, transformer } from '../../tools'
/*
let initial = {
    environmentVariable: [{ value: 'date', text: 'date' }],
    formProperties: [],
    userProperties: [],
    id: '',
    radio: 'dropdown',
    conditionMode: 'normal',
    repo: [
        
        {
            id:'test',
            radio:false,
            text:'',
            conditions:[
                {
                    data:[
                       {entry1:{},entry2:{},entry3:{},input:''},
                    ],
                    ruleMode:'normal'
                },
            ]
        }
        
    ]
}
*/
export default reduceWrap('Sequence flow', (state, action, ind) => {
    let data = fromJS(state)

    switch (action.type) {
        /* 任何下拉框 被选择的时候 */
        case 'branch':
            if (ind == 'not exist') return data.updateIn(['repo'], [], (a) => a.push(fromJS(newCreate(state)))).toJS()
            return transformer(data, ind, action.args)

        case 'branchUpdate':
            //获取在dataRepo里的位置
            let repoIndex4branchUpdate = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
                //位置信息(ind)汇总
            const dataRepoInd = repoIndex4branchUpdate
            const groupIndex = action.groupIndex
            const ruleInd = action.ruleIndex
            const lastCascaderInd = action.optionItem.index
                //获取当前‘规则’所在的数据路径
            const ruleDataPath = ['repo', dataRepoInd, 'conditions', groupIndex, 'data', ruleInd]
                /* 定义核心 mutate 逻辑 */
            const updateOption = el => el.set(action.entryIndex, action.optionItem) //改变当前dropdown的选中项
            //二级联动
            const cascade2 = el => el.set('entry2template', String(lastCascaderInd)) //改变entry2template的值
                .set('entry2', fromJS(defaultOption())) //设置默认值
                .set('entry3', fromJS(defaultOption()))
                .set('input',fromJS(newRule().input))
                .set('inputCtrlInfoData',fromJS({cate:'text'}))
            //三级联动
            const cascade3 = el => {
                const entry2tplInd = el.toJS().entry2template 
                if(entry2tplInd == 1){ //1表单组件
                    return el.set('inputCtrlInfoData',action.optionItem) //ctrlTemplate代表了控件类型，决定第三个下拉和最后一个空间类型
                        .set('entry3', fromJS(defaultOption()))
                        .set('input',fromJS(newRule().input))
                }
                if(entry2tplInd == 2){ //2用户字段
                    return el.set('inputCtrlInfoData',action.optionItem) //ctrlTemplate代表了控件类型，决定第三个下拉和最后一个空间类型
                        .set('entry3', fromJS(defaultOption()))
                        .set('input',fromJS(newRule().input))
                }
                return el
            }
            /* 执行逻辑 */
            data = data.updateIn(ruleDataPath, '', updateOption)
            if (action.entryIndex == 'entry1') { //二级联动
                data = data.updateIn(ruleDataPath, '', cascade2)
            }
            if (action.entryIndex == 'entry2') { //三级联动
                data = data.updateIn(ruleDataPath, '', cascade3)
            }
            return data.toJS()

        case 'clearSFData': /* 清空某个sequenceflow */
            let clearIndex = data.get('repo').findKey((el, index, iter) => el.get('id') == action.id)
            return data.updateIn(['repo', clearIndex, 'conditions'], '', (el) => {
                return fromJS([{
                    data: [
                        newRule()
                    ],
                    ruleMode: 'normal'
                }])
            }).toJS()

            /* 加载 表单字段 和 用户字段 时 */
        case 'updateFormProperties':
            return data.updateIn(['formProperties'], '', (el) => {
                return action.data
            }).toJS()

        case 'updateUserProperties':
            return data.updateIn(['userProperties'], '', (el) => {
                    return action.data
                }).toJS()
                /* 加载 表单字段 和 用户字段 时 */

            /* 改变每个condition的rule删除模式 */
        case 'allRuleModeEQdelete':
            let allRuleModeEQdeleteIndex = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', allRuleModeEQdeleteIndex, 'conditions', action.index], '', (el) => {
                return el.set('ruleMode', 'delete')
            }).toJS()
        case 'allRuleModeEQnormal':
            let allRuleModeEQdeleteIndex2 = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', allRuleModeEQdeleteIndex2, 'conditions', action.index], '', (el) => {
                    return el.set('ruleMode', 'normal')
                }).toJS()
                /* 改变每个condition的rule删除模式 */


        case 'radioTextChange':
            let repoIndexRadio2 = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)

            return data.updateIn(['repo', repoIndexRadio2], '', (el) => {
                return el.set('text', action.text) //false or true
            }).toJS()

        case 'switchElement':
            return data.updateIn(['id'], '', (el) => {
                return action.nextId
            }).toJS()

        case 'sequenceDataInit':
            return data.updateIn(['repo'], '', (el) => {
                return el.push(fromJS(action.data))
            }).toJS()

        case 'ruleOnInput':
            let repoIndex4 = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', repoIndex4, 'conditions', action.key1, 'data', action.key2], '', (el) => {
                return el.set('input', action.inputData)
            }).toJS()

        case 'linkage':
            return data.updateIn(['template', 'entry2', 'options'], '', (el) => {
                return action.options
            }).toJS()

        


        case 'switchApproveData':
            return data.updateIn(['id'], '', (el) => {
                return action.nextId
            }).toJS()

    

        case 'addCondition':
            let repoIndex = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            if (!repoIndex && (repoIndex != 0)) { //如果nextRepoIndex不存在
                return data.updateIn(['repo'], '', (el) => {
                    return el.push(fromJS(newCreate(state)))
                }).toJS()
            }
            return data.updateIn(['repo', repoIndex], '', (el) => {
                return el.set('conditions', el.get('conditions').push(fromJS({
                    data: [
                        newRule()
                        // {entry1:defaultOption(),entry2:defaultOption(),entry3:{index:'',value:"=="},input:''}
                    ],
                    ruleMode: 'normal'
                })))
            }).toJS()

        case 'addRule':
            let repoIndex2 = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', repoIndex2, 'conditions', action.index, 'data'], '', (el) => {
                return el.push(fromJS(newRule()))
            }).toJS()

        case 'deleteCondition':
            let repoIndexDelete = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', repoIndexDelete, 'conditions'], '', (el) => {
                return el.delete(action.conditionIndex)
            }).toJS()

        case 'deleteRule':
            let repoIndexDelete2 = data.get('repo').findKey((el, index, iter) => el.get('id') == state.id)
            return data.updateIn(['repo', repoIndexDelete2, 'conditions', action.groupIndex, 'data'], '', (el) => {
                return el.delete(action.ruleIndex)
            }).toJS()

        case 'modeChange':
            return Object.assign({}, state, {
                mode: action.value
            })
        default:
            return state
    }
})

// export default Reducer
