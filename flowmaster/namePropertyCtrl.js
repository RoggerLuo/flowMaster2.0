function giveName_ifNotSf_and_ifNoName(shape){
    if (shape.title == '') { 
        if (shape.jsonStencilTitle != 'Sequence flow') {

            shape.title = giveName(shape.jsonStencilTitle)
            global.updatePropertyInModel({ key: 'oryx-name', value: shape.title })
            rdx.save()
        }
    }        
}

fm.namePropertyCtrl = function($scope, $timeout) {
    //controller 启用的时候，初始化的时候
    const shape = $scope.selectedItem
    // giveName_ifNotSf_and_ifNoName(shape)

    const blurImplementation = () => {
        //如果没有初始化,那么切换到时候就不要保存,不然会保存成空白
        if (!fm.namePropertyClicked) return
        fm.namePropertyClicked = false //重新上锁

        const item = fm.currentSelectedShapeItem
        if (!item) return

        if (item.title == '') {
            window.showAlert('节点名称不能为空')
            item.title = item.properties['oryx-name']
            return
        }
        if (item.title.length > 20 ) {
            window.showAlert('节点名称不能大于20个字符，中英文数字皆可')
            item.title = item.title.substring(0,20) 
            return
        }
        if (item.title) item.title = item.title.replace(/(<([^>]+)>)/ig, "")

        fm.setProperty_and_updateView({ key: 'oryx-name', value: item.title },fm.getShapeById(item.resourceId))
        fm.nameManager.repo.some(el=>{
            if(el.resourceId == item.resourceId){
                el.name = item.title
                return true
            }
        })
        rdx.save()
    }
    fm.titleRename = blurImplementation
    window.inputBlurred = blurImplementation
    $scope.inputBlurred = blurImplementation

    $scope.onchangeEqualClick = () => {
        fm.namePropertyClicked = true
    }    
    $scope.namePropertyClicked = function() { //开锁，鼠标点击编辑一次对应 保存一次
        fm.namePropertyClicked = true
        $scope.$on('$destroy', function controllerDestroyed() {})
    }

    $scope.enterPressed = function(keyEvent) {
        rdx.save()
        if (keyEvent && keyEvent.which === 13) {
            keyEvent.preventDefault();
            $scope.inputBlurred(); // we want to do the same as if the user would blur the input field
        }
        fm.namePropertyClicked = true
    }
}