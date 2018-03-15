import { toJS, fromJS, List, Map } from 'immutable';
/*
    通过action 来改options数据 "updateRoleData"
*/
const initial = {
    dropdown1:{text:'一',value:'1'},//这里是选中数据, 也是默认值
    dropdown2:{
        // 因为这里的数据是临时加载的，所以没有默认值
    },
    dropdown1Data:[
        {text:'一',value:'1'}, //默认赋值给dropdown1
        {text:'二',value:'2'},
        {text:'三',value:'3'},
        {text:'四',value:'4'},
        {text:'五',value:'5'},
        // {text:'三',value:'3'}
    ],
    dropdown2Data:[
        // {text:'财务专员',value:'finance'},
        // {text:'人事专员',value:'hr'},
        // {text:'xx专员',value:'xx'}
    ]   
}

const Reducer = (state = initial, action) => {
    let data = fromJS(state)
    switch (action.type) {
        // case 'dropdown/touch':
        //     return Object.assign({},state)
            
        case 'getBackToDefaultDp1':
            if(state.dropdown2Data.length!=0){
                return Object.assign({}, state, {
                    dropdown1:{text:'一',value:'1'},
                    dropdown2:state.dropdown2Data[0]
                })

            }else{
                return Object.assign({}, state, {
                    dropdown1:{text:'一',value:'1'},
                    dropdown2:{}
                })
            }
        case 'updateRoleData':
            const stage1 = Object.assign({}, state, {
                dropdown2Data:action.roleData
            })
            /* 自动在dropdown2 设置默认值 */
            return Object.assign({}, stage1, {
                dropdown2:action.roleData[0]
            })
        case 'dropdown1Choose':
            return data.updateIn(['dropdown1'],'initial',(el)=>{
                return action.item 
            }).toJS()
        case 'dropdown2Choose':
            return data.updateIn(['dropdown2'],'initial',(el)=>{
                return action.item 
            }).toJS()
        default:
            return state
    }
}

export default Reducer
