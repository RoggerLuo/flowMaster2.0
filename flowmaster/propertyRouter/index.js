'use strict'
import { tplSrc, tplMap } from './conf'
import specialSf from './specialSf'

function handleExclusive($scope, shape) {
    if (fm.multi.is.gateway(shape)) {
        $scope.propertyTpl = tplSrc + 'commonNode.html' //没有设置项的普通节点
        return true
    }
    if (fm.manual.is.gateway(shape)) {
        $scope.propertyTpl = tplSrc + 'commonNode.html' //没有设置项的普通节点
        return true
    }
    return false //否则为正常的分支节点
}

function handleOthers($scope, shape) {
    fm.nameManager.autoNaming(shape, $scope)
    const title = fm.getTitle(shape)
    $scope.propertyTpl = tplSrc + tplMap[title]
    // console.log(tplSrc + tplMap[title])
}

export default function($scope, event) {
    const shape = event.elements.first()
    if (!shape) {
        $scope.propertyTpl = tplSrc + 'canvas.html'
        // import globalRefreshBranchName from '../multi/globalRefreshBranchName'
        // globalRefreshBranchName() //为什么这里要出现这个？？？
        return
    }

    if (handleExclusive($scope, shape)) return

    const title = fm.getTitle(shape)
    if (title == 'Sequence flow') {
        specialSf($scope, shape)
        return
    }

    handleOthers($scope, shape)
}

