'use strict'
const formControlAdapter = (arr) => {
    return arr.map((el) => {
        el.subform_type = el.type
        el.cate = el.type
        el.text = el.title
        el.value = el.name

        if (el.type == "calculate") {
            if (el.rule.type != 'dateDiff') {
                el.type = 'double'
                return el
            }
        }
        el.type = el.name_type
        return el
    })
}

const mapmap = {
    "text": true,
    "textarea": true,
    "number": true,
    "money": true,
    "date": true,
    "time": true,
    "selection": true,
    multi_selection: true,
    select_employee: true,
    select_org: true,
    mobile: true,
    email: true,
    phone: true,
    calculate: true,
}

function initial_request_formdata(dataObj) {
    if (!dataObj) {
        window.formProperties = []
        return
    }
    global.formPeople = dataObj.components.filter(el => el.type == "select_employee")

    //筛选        
    const filteredComponents = dataObj.components.filter((el) => !!mapmap[el.type])

    window.formPropertiesTotal = formControlAdapter(JSON.parse(JSON.parse(JSON.stringify(dataObj.components))))
    window.formProperties = formControlAdapter(filteredComponents)

    const defaultOption = { text: '请选择', value: false, index: 'initial', type: 'initial' }
    window.formProperties.unshift(defaultOption)
    rdx.dispatch({ type: 'updateFormProperties', data: window.formProperties })
}

export const requestFormData = ($http, pid, cb, versionId) => {
    let url
    if(versionId){
        url = window.globalHost + `/repository/process-definitions/${pid}/forms?processType=Normal&versionId=${versionId}`
    }else{
        url = window.globalHost + '/repository/process-definitions/' + pid + '/forms?processType=Normal'
    }
    $http({
        method: 'GET',
        url
    }).success(function(data) {
        let dataObj = false
        if (data.formDefinition != "") {
            dataObj = JSON.parse(data.formDefinition)
        }
        cb(dataObj)
    })
}

export default function($http, pid) {
    fm.fetchFormComponents = (_pid, versionId, cb) => requestFormData($http, _pid, cb, versionId)
    fm.fetchFormComponents(pid, undefined, initial_request_formdata)
}

