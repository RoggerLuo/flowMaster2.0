import { toJS, fromJS, List, Map } from 'immutable';
import { reduceWrap, transformer } from '../tools'

const newRule = () => {
    return {
        "columnName": '',
        "columnType": { text: '字符串', value: 'VARCHAR' },
        "expression": { value: '=', text: '=' },
        "variableType": { text: '人员变量', value: 'userVariable' },
        "variableName": { value: false, text: '请选择' }
    }
}
// 有多个 {id,data}
//    data里又有多个不同的 refs
let initial = {
    conditions: [newRule()],
    sql: "",
    checked: false,
    mode:false,
    dataSource: { text: '请选择', value: false },
    /*
    {
        "dataSourceId": "75001",
        "sql": "select uuid from org_employees",
        "conditions": [{
                "columnName": {"mobile"},
                "columnType": {"VARCHAR"},
                "expression": {"="},
                "variableName": {"field_1507704881713"},
                "variableType": {"formVariable"}
            }
        ]
    }
    */
}
export default (state = initial, action) => {
// export default reduceWrap('all', {}, (state, action, ind) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'sql/renew':
            return initial

        case 'sql/reload':
            return action.savedSqlState
        case 'sql/saveDataSourceRef':
            return data.updateIn(['dataSourceRef'], '', (el) => action.dataSourceRef).toJS()

        case 'sql/chooseSource':
            return data.updateIn(['dataSource'], '', (el) => {
                return action.item
            }).toJS()

        case 'sql/expressionChoose':
            return data.updateIn(['conditions',action.index,'expression'], {}, (el) => {
                return action.item
            }).toJS()
        case 'sql/columnTypeChoose':
            return data.updateIn(['conditions',action.index,'columnType'], {}, (el) => {
                return action.item
            }).toJS()

        case 'sql/variableTypeChoose':
            return data.updateIn(['conditions',action.index,'variableType'], {}, (el) => {
                return action.item
            }).toJS()
        case 'sql/variableNameChoose':
            return data.updateIn(['conditions',action.index,'variableName'], {}, (el) => {
                return action.item
            }).toJS()
        case 'sql/delMode':
            return data.updateIn(['mode'], {}, (el) => {
                return action.mode
            }).toJS()

        case 'sql/delEntry':
            return data.updateIn(['conditions'], [], (el) => {
                return el.delete(action.index)
            }).toJS()

        case 'sql/addEntry':
            return data.updateIn(['conditions'], [], (el) => {
                return el.push(fromJS(newRule()))
            }).toJS()

            
        case 'sql/optionInputChange':
            return data.updateIn(['conditions',action.index,'columnName'], '', (el) => {
                return action.value
            }).toJS()

        case 'sql/textareaOnInput':
            return data.updateIn(['sql'], '', (el) => {
                return action.sql
            }).toJS()
        case 'sql/toggleCheck':
            return data.updateIn(['checked'], '', (el) => {
                return !el
            }).toJS()


        default:
            return state
    }
}