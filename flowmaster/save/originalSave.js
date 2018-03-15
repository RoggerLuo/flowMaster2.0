function transformRequest(obj) {
    var str = [];
    for (var p in obj) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
}
export default function($scope, $http, callback) {
    fm.branch.update() //要在获取json之前才行

    /* 接下来是 activiti ng original的代码 */
    const jsonObj = fm.getJson()
    jsonObj.properties.process_id = window.getQueryString("pid")    
    fm.stencilAdapter.save(jsonObj)
    

    const json = JSON.stringify(jsonObj)

    var selection = $scope.editor.getSelection();
    $scope.editor.setSelection([]);

    // Get the serialized svg image source
    var svgClone = $scope.editor.getCanvas().getSVGRepresentation(true);
    $scope.editor.setSelection(selection);
    if ($scope.editor.getCanvas().properties["oryx-showstripableelements"] === false) {
        var stripOutArray = jQuery(svgClone).find(".stripable-element");
        for (var i = stripOutArray.length - 1; i >= 0; i--) {
            stripOutArray[i].remove();
        }
    }

    // Remove all forced stripable elements
    var stripOutArray = jQuery(svgClone).find(".stripable-element-force");
    for (var i = stripOutArray.length - 1; i >= 0; i--) {
        stripOutArray[i].remove();
    }

    // Parse dom to string
    var svgDOM = DataManager.serialize(svgClone);
    window.sub_properties = window.sub_properties || {}
    var params = {
        json_xml: json,
        svg_xml: svgDOM,
        name: window.pidName,
        sub_properties: JSON.stringify(window.sub_properties) 
        // descriptionPrivate: 'flowMaster'
    };
    console.log(params.sub_properties)

    const transformRequest = function(obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    var saveEvent = {
        type: KISBPM.eventBus.EVENT_TYPE_MODEL_SAVED,
        model: params,
        modelId: window.getQueryString("pid"),
        eventType: 'update-model'
    };
    console.log(json)

    let url = window.globalHost + '/repository/process-definitions/' + window.getQueryString("pid") + '/design?processType=Normal'

    const version = window.getQueryString("version")
    if(fm.version) url = window.globalHost + '/repository/process-definitions/' + window.getQueryString("pid") + `/design?processType=Normal&version=${fm.version}`

    // if(fm.versionId!='undefined') url = window.globalHost + '/repository/process-definitions/' + window.getQueryString("pid") + `/design?processType=Normal&versionId=${fm.versionId}`
    $http({
            method: 'PUT',
            data: params,
            ignoreErrors: true,
            headers: ACTIVITI.CONFIG.httpSaveHeaders,
            transformRequest,
            url
        })

    .success(function(data, status, headers, config) {

        rdx.dispatch({ type: 'closeSpin' })
        window.showAlert('保存成功', 'good')

        //替换versionId
        fm.versionId = data

        // Fire event to all who is listening
        $scope.editor.handleEvents({type: ORYX.CONFIG.EVENT_SAVED})

        KISBPM.eventBus.dispatch(KISBPM.eventBus.EVENT_TYPE_MODEL_SAVED, saveEvent)

        callback()

        console.log('保存成功')
        rdx.store.dispatch({ type: 'saveDeactive' })
    })
    .error(function(data, status, headers, config) {
        $scope.error = {};
        console.log('Something went wrong when updating the process model:' + JSON.stringify(data));
        rdx.dispatch({ type: 'saveActive' })
    })
}