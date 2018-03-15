'use strict'
/* UI 交互 */
/* 和vue部分的阴影遮罩一致 */
const shadowCallback = (e) => {
    window.removeEventListener("message", shadowCallback, false)
}
window.callShadow = () => {
    window.addEventListener('message', shadowCallback, false)
    let message = { type: "openShadow" }
    window.parent.postMessage(message, '*')
}
/* 和vue部分的阴影遮罩一致 */
const hideShadowCallback = (e) => {
    window.removeEventListener("message", hideShadowCallback, false)
}
window.hideShadow = () => {
    window.addEventListener('message', hideShadowCallback, false)
    let message = { type: "closeShadow" }
    window.parent.postMessage(message, '*')
}
const checkIfModified = (e) => {
    if (e.data.type == 'checkIfModified') {
        const isActive = window.reduxStore.getState().common.active //true就是修改了，false就是没修改
        const message = { type: "checkIfModified", value: isActive }
        window.parent.postMessage(message, '*')
    }
    // window.removeEventListener("message",checkIfModified, false)
}
window.addEventListener('message', checkIfModified, false)
