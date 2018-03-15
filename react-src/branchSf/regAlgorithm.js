
/* 构造#的pat */
const regFactor = (options,color) => {
    color = color || 'red'
    let pattern1 = ''
    let odd = ''
    let even = ''
    options.forEach((el,index)=>{
        if(index>0){
            pattern1 += '|([^>])('+ el + ")"
        }else{
            pattern1 += '([^>])('+ el + ")"
        }
    })
    let number = options.length*2
    for (var i = 1; i <= number; i++) {
        if(i%2 =='0'){
            even += '$'+i
        }else{
            odd += '$'+i
        }
    }
    const replace = odd+"&nbsp;<span style='color:"+color+";'>"+even+"</span>&nbsp;"
    const regular = new RegExp(pattern1,"gi"); //注意，反斜杠需要转义
    return {replace,regular}
}
const moveCursorToEnd = (obj)=>{
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(obj);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
}
export {moveCursorToEnd,regFactor}