import render from './component'
import fetch_leftFields from './fetch_leftFields'
import checkSubform from './checkSubform'
import checkMainform from './checkMainform'
import connectRules from './connectRules'

global.fm = global.fm || {}

fm.subflow = fm.subflow || {}

fm.subflow.render = render
fm.subflow.fetch_leftFields = fetch_leftFields
fm.subflow.checkSubform = checkSubform
fm.subflow.checkMainform = checkMainform
fm.subflow.connectRules = connectRules
