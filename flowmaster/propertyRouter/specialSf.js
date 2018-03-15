import { tplSrc } from './conf'
export default function($scope, shape) {
    // 这里只负责 命名控件是否显示，
    // 业务状态全部都显示

    if(fm.last.is('User task',shape)){
        $scope.propertyTpl = tplSrc + 'sf/name_and_status.html'
        return
    }
    if (fm.manual.is.sf(shape)) {
        $scope.propertyTpl = tplSrc + 'sf/name_and_status.html'
        return
    }


    // /* 如果是会签分支branch */
    if (fm.multi.is.sf(shape)) {
        $scope.propertyTpl = tplSrc + 'sf/only-status.html'
        return
    }

    // /* 如果是人工分支branch */
    if (fm.manual.is.sf(shape)) {
        $scope.propertyTpl = tplSrc + 'sf/only-status.html'
        return
    }

    /* 如果是普通分支节点的branch */

    if (fm.branch.is(shape)) {
        if (shape.properties['defaultflow'] == 'true') {
            $scope.propertyTpl = tplSrc + 'sf/only-status.html'
            return
        } else {
            $scope.propertyTpl = tplSrc + 'sf/branch.html'
            return
        }
    }
    
    $scope.propertyTpl = tplSrc + 'sf/only-status.html'
}

