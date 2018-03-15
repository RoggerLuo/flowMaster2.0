export default function(repo) {
    let returnFlag = true

    /* 针对子表单的检测 */
    const isExistSubform = repo.leftFields.some(el => el.type == 'sub_form')

    if (isExistSubform) {

        if(repo.leftFields
            .filter(el => el.type == 'sub_form')
            .some(el=>el.required)
        ){
            if (!repo.subRights) {
                window.showAlert('必填子表单尚未匹配')
                returnFlag = false
                return returnFlag
            }            
        }

        const formMatchCheckNotPass = repo.leftFields
            .filter(el => el.type == 'sub_form')
            .some((el, ind) => {

                if(!repo.subRights) return false //如果没选择，就跳过
                
                const subItem = repo.subRights[el.name]
                if (!subItem) { //如果选项尚未选择过

                    if(el.required){
                        window.showAlert('子表单"' + el.title + '"尚未匹配')
                        returnFlag = false
                        return true
                    }else{
                        return false
                    }

                } else {
                    
                    //如果选项 已经选择过
                    if (!subItem.rightFormId) {  //但是为'请选择'(false)
                        window.showAlert('子表单"' + el.title + '"尚未匹配')
                        returnFlag = false
                        return true
                    }
                }
                // 表单 对应过了，接下来校验 表单中的每一个字段
                const subForm = el.children
                subForm.forEach(el2=>{
                    if(!subItem.map[el2.name]){
                        window.showAlert('子表单'+el.title+'中，字段"' + el2.title + '"尚未匹配')
                        returnFlag = false
                        return true
                    }
                    if(!subItem.map[el2.name].value){
                        window.showAlert('子表单'+el.title+'中，字段"' + el2.title + '"尚未匹配')
                        returnFlag = false
                        return true
                    }

                })
        })
    }

    
    return returnFlag
}