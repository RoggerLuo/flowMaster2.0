import { combineReducers } from 'redux'
import usertask from './usertask'
import branch from './branch'
import popup from './popup'
import popupX from './popupX'
import certainPerson from './certainPerson'
// import superPopup from './superPopup'
import dropdown from './dropdown'
import multi from './multi'
import common from './common'
// import endpoint from './endpoint'
import branchNode from './branchNode'
import manual from './manual'
import sql from './sql'
import circulation from './circulation'
// import custom from './custom'
import subflow from './subflow'
import sf from './sf'
import temp from './temp'


const rootRuducer = combineReducers({
    usertask, multi, manual, circulation,
    // superPopup,
    branch,
    popup,
    certainPerson,
    dropdown,


    // endpoint,
    branchNode,

    sql,
    // custom,

    subflow,
    popupX,
    sf,
    common,
    temp
})

export default rootRuducer