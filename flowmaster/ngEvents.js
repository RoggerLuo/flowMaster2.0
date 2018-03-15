import save from './save'
import initialize from './initialize'
import './deleteEvent'
import './namePropertyCtrl'
import './nameManager'

global.fm = global.fm || {}

/* ng app.js 初始化的时候 */
fm.initialize = initialize

fm.ngEvent = ($scope,$http) => {
   fm.saveModel = save($scope, $http)
   $scope.propertyTpl = './editor-app/property-tpl/canvas.html'
   
   // will be deprecated
   $scope.lastSelectedUserTaskId = false //???
}
