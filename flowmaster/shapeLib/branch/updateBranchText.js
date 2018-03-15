const updateBranchText = () => {
    rdx.getState().branch.repo.forEach((el, index) => {
        
        let shape = fm.getShapeById(el.id)
        if (el.id && !shape) return
        let displayText = ''
        if (el.radio) {
            window.setPropertyAdvance({ key: 'oryx-name', value: el.text }, shape)
        } else {
            el.conditions.some((condition, i) => {
                /* 循环不同的条件组 */
                condition.data.some((el, index) => {
                    /* 循环条件组里的规则 */
                    if (el.entry2.value != 'initial') {
                        displayText += el.entry2.text || ''
                        displayText += ' '
                    }
                    if (el.entry3.value != 'initial') {
                        displayText += el.entry3.text || ''
                        displayText += ' '
                    }
                    if (!isNaN(el.input.text)) {
                        displayText += el.input.text
                    } else {
                        displayText += '"' + el.input.text + '"'
                    }
                    return true
                    // if (index < (condition.data.length - 1)) {
                    //     displayText += ' && '
                    // }
                })
                displayText += ' ... '
                return true
                // if (i < (el.conditions.length - 1)) {
                //     displayText += ' || '
                // }
            })
        }
        if (shape.properties.defaultflow != 'true') {
            window.setPropertyAdvance({ key: 'oryx-name', value: displayText }, shape)
        }
    })
}


global.updateBranchText = updateBranchText
export default updateBranchText