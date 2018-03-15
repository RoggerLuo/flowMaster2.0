global.rct = global.rct || {}
import './userGuide/component'

import './subflow'
import './multi'
import './branchSf'

import approveComponent from './usertask/c'
// import endPointComponent from './endPoint/Container'
import branchNodeComponent from './branchNode/Container'
import popupStart from './popup'
import popupXStart from './popupX'
import myAlert from './alert/alert'
import mySpin from './alert/spin'
import manual from './manual/c'
import circulation from './circulation/c'
// import custom from './custom/Container'
import sf from './sf'


import saveButton from './saveButton/saveButton'
// global.saveButton = { render: saveButton, flag: true }
rct.isSaveBtnInit = false
rct.saveBtnInit = () => {
    if(!rct.isSaveBtnInit) saveButton()
}

popupStart()
popupXStart()
myAlert()
mySpin()

global.approveComponent = { render: approveComponent }
global.branchComponent = { render: branchNodeComponent }
// global.endPointComponent = endPointComponent
global.manualCompInitializer = manual
global.circulationCompInitializer = circulation
// global.customCompInitializer = custom
global.sequenceflowCompInitializer = sf

import zh from './i18n/zh'
import en from './i18n/en'
window.reactI18n = zh


import '../qingfont/iconfont.css'
import './global.less'
import './icon.less'
import './basic.less'
import './common'
