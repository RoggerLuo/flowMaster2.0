import validate_by_shapes from './validate_by_shapes'
import checkEmpty from './checkEmpty'
import originalSave from './originalSave'
import integrityChecking from './integrityChecking'
import isSfsUnnamed from './isSfsUnnamed'
import addClassify from './addClassify'
import forSfsInGates from './forSfsInGates'

export default function($scope, $http) {
    return function(callback) {
        rdx.store.dispatch({ type: 'saveDeactive' })
        
        if (!integrityChecking()) return rdx.save()

        if(isSfsUnnamed($scope)) return rdx.save()
        //业务流程 校验放在 sf校验之后
        if (!validate_by_shapes($scope)) return rdx.save() //这个的顺序很重要! 很重要

        //要放在 sf校验之后, 因为涉及连线命名
        forSfsInGates()

        /* 为空的限制条件 */
        if (checkEmpty($scope)) return rdx.save()
        if (!fm.parallelGate.isReadyForSave()) return rdx.save()

        /* 最后，确定要保存，才做的事 */
        addClassify()

        rdx.dispatch({ type: 'callSpin' }) /* 等待动画 */
        originalSave($scope, $http, callback) /* orginal save */

    }
}


