import Trim from './trim.js'

export const ifEmptyWithoutInit = (canBeSaved) => {
    /* 在分支条件没有初始化的情况下，检查分支节点是否为空， */
    /* 遍历所有exclusiveGate 然后再遍历他们的sequenceflow */
    window.windowCanvas.getChildNodes().filter((el) => {
        return el._stencil._jsonStencil.title == "Exclusive gateway"
    }).forEach((el) => {
        /* 如果是 会签分支 */
        if(global.isMultiGateway(el)) return 
        /* 如果是 人工分支 */
        if(global.isManualGateway(el)) return 

        /*  update 空值不能提交 */
        el.outgoing.forEach((el2) => {
            if (!el2.properties.defaultflow) { //不存在,说明不是默认流向的分支
                if (!el2.properties.conditionsequenceflow) { //也不存在
                    let nodeName = el2.incoming && el2.incoming[0] && el2.incoming[0].properties["oryx-name"]
                    window.showAlert('保存失败，节点"' + nodeName + '"的分支条件和规则不能为空')
                    /* 定位的关键代码 */
                    fm.editor.setSelection([el2])
                    fm.editor.updateSelection()

                    canBeSaved = false
                }
            }
        })
    })
    return canBeSaved
}

export const ifEmpty = (el, currentElement) => {
    const gateway = currentElement.incoming[0]
    if( gateway && global.isMultiGateway(gateway)) return false
        if( gateway && global.isManualGateway(gateway)) return false

    if (el.conditions.some((condition, i) => {
            return condition.data.some((rule, index) => {
                if(!
                    (rule.entry1.value && rule.entry2.value && rule.entry3.value)
                ) return true

                if(typeof(rule.input) == 'object'){
                    if(!rule.input.value){
                        return true                            
                    }
                    if(rule.input.value == '""'){
                        return true
                    }
                }
                if(rule.input == '""'){
                    return true
                }
                return false
            })
        })) {
        /* 如果有一个为为空值，整个条件都为空 */
        if (currentElement.properties.defaultflow != 'true') {
            let nodeName = currentElement.incoming && currentElement.incoming[0] && currentElement.incoming[0].properties["oryx-name"]
            window.showAlert('保存失败，节点"' + nodeName + '"的分支条件和规则不能为空')
            window.setPropertyAdvance({ key: 'oryx-name', value: '' }, currentElement)
            fm.editor.setSelection([currentElement])
            fm.editor.updateSelection()
            return true
        }
    }
}

export const validationCheck = (el) => {
    return el
        //这一块不应该出现在这里
        //限制输入数字的 应该在input组件中就实现
    /*if ((el.entry2.type == 'double') || (el.entry2.type == 'int')) {
        if (isNaN(el.input)) {
            window.showAlert('保存失败，分支条件中填写数据类型不正确')
            window.setPropertyAdvance({ key: 'oryx-name', value: '' }, currentElement)
            fm.editor.setSelection([currentElement])
            fm.editor.updateSelection()

            canSave = false
            return
        }
    }*/
}
export const inputFormatter = (el) => {
    el.input.value = Trim(el.input.value)
    /* 如果是yyyy-mm-dd，转换成时间戳 */
    // const re = new RegExp(/\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}/)    
    // if (re.test(el.input)) {
    //     return Date.parse(new Date(el.input.value)) //+ new Date().getTimezoneOffset()*60*1000
    // }
    
    /* 如果是普通的字符或数字 */
    // if (isNaN(el.input)) { //如果 not a number则加双引号，否则不修改
    //     return '"' + el.input.value + '"'
    // }
    return el.input.value
}
export const collectValuesFromDpdw = ({ returnString, el }) => {
    const dropdown1Ind = el.entry1.index
    switch (dropdown1Ind) {
        case 1:
            returnString += ' f.'
            break
        case 2:
            returnString += ' u.'
            break
        case 3:
            returnString += ' e.'
            break
    }
    returnString += el.entry2.value
    returnString += ' '
    returnString += el.entry3.value
    returnString += ' '
    return returnString
}