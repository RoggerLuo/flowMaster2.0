import store from './configureStore'
import findCurrentRepoInd from './tools/findCurrentRepoInd'
import { connect2redux, i18nPut } from './tools'
global.rdx = global.rdx || {}

rdx.store = store
rdx.getState = store.getState
rdx.save = () => store.dispatch({ type: 'saveActive' })
rdx.put = (type, ...args) => {
    store.dispatch({ type, args })
    rdx.save()
}
rdx.dispatch = (action) => {
    store.dispatch(action)
    store.dispatch({ type: 'saveActive' })
}
rdx.findCurrentRepoInd = findCurrentRepoInd
rdx.connect = connect2redux
rdx.i18nPut = i18nPut

global.activeSave = () => rdx.dispatch({ type: 'saveActive' })
global.reduxStore = store
