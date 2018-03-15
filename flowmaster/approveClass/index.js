import hidePrevCheck from './hidePrevCheck'
import getPreviousComp from './getPreviousComp'
import getSetting from './Setting'
import is_display_prevShapeSpecify, {isDisplay} from './is_display_prevShapeSpecify'
import del_by_id from './del_by_id'
global.fm = global.fm || {}
fm.approve = {}
fm.approve.hideCheck = hidePrevCheck
fm.approve.getPreviousComp = getPreviousComp
fm.approve.getSetting = getSetting
fm.approve.is_display_prevShapeSpecify = is_display_prevShapeSpecify
fm.approve.is_display_prevShapeSpecify_for_circulation = isDisplay

fm.approve.del_by_id = del_by_id