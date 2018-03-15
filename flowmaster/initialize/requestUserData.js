'use strict'
const limited = {
    // "birthday": "String", //(毫秒数）
    "gender": "String",   // 性别，MALE FEMALE
    "jobTitle": "Field",  // 职位
    // "nickname": "String", // 昵称
    // "disabled": "Boolean", // 是否禁用
    // "sn": "String",  // 工号
    // "email": "String", // 邮箱
    // "initial": "String", // 拼音首字母
    // "mobile": "String", // 手机
    "senior":"String",//字符串:true/false
    // "avatar": "String", // 头像
    // "pinyin": "String", // 拼音
    // "name": "String",  // 姓名
    "username": "String", // 账号
    // "status": "String", // 状态 （ACTIVATING， ACTIVATED）
    // "id": "String", // userId
}
export default function($http){
    $http({ method: 'GET', url: window.globalHost+'/identity/properties'}).success(function (data2) {
        let linkageData = []
        for( let k in data2){
            linkageData.push({text:k,value:k})
        }
        window.userProperties = linkageData.filter(el=>!!limited[el.value])
        window.userProperties.unshift({text:'请选择',value:'initial',index:'initial'})
        rdx.dispatch({type:'updateUserProperties',data:window.userProperties})
    })
}