import { toJS, fromJS, List, Map } from 'immutable'

export default (state) => {
    let ind = fromJS(state).get('repo').findKey((el, index, iter) => el.get('id') == state.id)
    if (!ind && (ind != 0)) ind = 'not exist'
    return ind
}
