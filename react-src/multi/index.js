import is from './is'
import branch from './branch'
import connectRules from './connectRules'
// import completeCheck from './completeCheck'
// import { multiSelectCheck, gatewaySelectCheck } from './selectCheck'
import render from './component'

global.fm = global.fm || {}
fm.multi = {}
fm.multi.render = render
fm.multi.is = is
fm.multi.branch = branch
fm.multi.connectRules = connectRules

// fm.multi.completeCheck = completeCheck

// fm.multi.selectCheck = {}
// fm.multi.selectCheck.multi = multiSelectCheck 
// fm.multi.selectCheck.gateway = gatewaySelectCheck 
