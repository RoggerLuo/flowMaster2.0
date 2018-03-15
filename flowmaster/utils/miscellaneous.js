
global.fm = global.fm || {}

fm.spotlight = (shape) => {
    /* 定位的关键代码 */
    fm.editor.setSelection([shape])
    fm.editor.updateSelection()
}

fm.getTitle = shape =>  shape && shape._stencil && shape._stencil._jsonStencil.title || ''

fm.getUrlQueryParam = (name) => { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
window.getQueryString = fm.getUrlQueryParam
