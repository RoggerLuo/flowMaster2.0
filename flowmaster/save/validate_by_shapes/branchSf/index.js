'use strict'
import { validationCheck, inputFormatter, collectValuesFromDpdw, ifEmpty, ifEmptyWithoutInit } from './basic.js'

const traverseGroup = (el) => {
    let str = ''
    el.conditions.forEach((condition, i) => { //每个group
        str = traverseRule(condition,str)
        /* 是否是最后的group */
        if (i < (el.conditions.length - 1)) str += ' || '                    
    })
    return str
}
const traverseRule = (condition,returnString) => {
    condition.data.forEach((el, index, wholeArr) => { //每个rule
        /* 下拉框的值 */
        returnString = collectValuesFromDpdw({ returnString, el })
        
        /* input框的值 */
        el = validationCheck(el) /* 根据entry2的type来确定 input的值是否合规 */
        returnString += inputFormatter(el)
        
        /* 是否是最后的rule */
        if (index < (condition.data.length - 1)) returnString += ' && '
    })
    return returnString
}
export default function(canvas) {
    let canBeSaved = true    
    rdx.getState().branch.repo.forEach((el, index) => {
        const currShape = fm.getNodeById(el.id)
        if (!currShape) return

        let returnString = '' 
        if (el.radio) {            
            returnString = '${' + el.text + '}'
            window.setPropertyAdvance({ key: 'oryx-name', value: el.text }, currShape)
        } else {
            if (ifEmpty(el, currShape)) canBeSaved = false
            returnString = '${' + traverseGroup(el) + '}'
        }

        /* 取消删除状态，以免下次加载的时候，一打开就是删除状态 */
        const conditionsNew = el.conditions.map((originEl) => {
            originEl.ruleMode = 'normal'
            return originEl
        })
        el.conditions = conditionsNew
        currShape.setProperty('conditionsequenceflow', returnString)
        currShape.setProperty('reduxData_branch', el)
    })

    canBeSaved = ifEmptyWithoutInit(canBeSaved)
    return canBeSaved
}


