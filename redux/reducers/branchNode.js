import { toJS, fromJS, List, Map } from 'immutable';

const initial = {
    repo: [
        // {
        //     resourceId:'id',
        //     data:[{id:'id',data:'obj'}],//这里的 choosed是？
        //     choosed:obj, //这里是选中的obj
        // }
    ],
    id:''
}

const Reducer = (state = initial, action) => {
    let data = fromJS(state)
    switch (action.type) {
        case 'branchNodeInit':
            return data.updateIn(['repo'], 'initial', (el) => {
                return el.push(fromJS(action.data))
            }).toJS()

        case 'branchNodeDropdownChoose':
            let repoIndex2 = data.get('repo').findKey((el, index, iter) => el.get('resourceId') == state.id) //如果这里找不到会怎么样
            if((repoIndex2 === 0) || repoIndex2){//exist means it has already here
                return data.updateIn(['repo',repoIndex2,'choosed'], 'initial', (el) => {
                    return fromJS(action.item)
                }).toJS()
            }else{
                return state
            }

        case 'branchNodeOptionDataUpdate':
            let repoIndex = data.get('repo').findKey((el, index, iter) => el.get('resourceId') == state.id) //如果这里找不到会怎么样
            if((repoIndex === 0) || repoIndex){//exist means it has already here
                
                //update the obj
                return data.updateIn(['repo',repoIndex,'data'], 'initial', (el) => {
                    return fromJS(action.data.data)
                }).toJS()
                // .updateIn(['repo',repoIndex,'choosed'], 'initial', (el) => {
                //     return fromJS(action.data.data[0])
                // }).toJS()                

            }else{
                //create a new obj
                let dataMod = Object.assign({}, action.data, {
                    choosed:{text:'请选择',value:'请选择'}//action.data.choosed//data.map((el)=>{return {text:el.name,value:el.branchResourceId}})[0]
                })
                return data.updateIn(['repo'], 'initial', (el) => {
                    return el.push(fromJS(dataMod))
                }).toJS()                
            }

        case 'switchElement':
            return data.updateIn(['id'], 'initial', (el) => {
                return action.nextId
            }).toJS()

        default:
            return state
    }
}

export default Reducer
