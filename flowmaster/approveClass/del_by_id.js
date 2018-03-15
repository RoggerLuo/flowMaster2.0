import { toJS, fromJS, List, Map } from 'immutable'

export default (data, id) => {
    return data.updateIn(['repo'], List(), (repos) => {
        return repos.map(repo => {
            // 找到要删除的index，如果满足删除条件的话
            const del_index = repo.get('data').findIndex(role => role.get('value') == id)
            if(del_index != -1){
                const newdata = repo.get('data').delete(del_index)                
                return repo.set('data',newdata)
            }
           return repo 
        })
    }).toJS()
}
