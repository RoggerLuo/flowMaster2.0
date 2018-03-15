import sf from './sf'
import subflow from './subflow'
import usertaskPattern from './usertaskPattern'
import service from './service'
import branchSf from './branchSf'
import branchNode from './branchNode'
import multi from './multi'

export default function($scope) {
    /* 顺序很重要 */
    const canvas = $scope.editor.getCanvas() 

    if (!branchSf(canvas)) return false //branchSf要放在 branchNode之前， 因为branchNode要清空conditionsequenceflow，不然会报错
    branchNode(canvas) //branchNode要在sf之前，因为要先设置defaultflow
    if (!subflow(canvas)) return false
    if (!sf(canvas)) return false

    usertaskPattern(canvas, 'usertask')
    usertaskPattern(canvas, 'manual')
    service(canvas)
    multi()

    return true
}