import i18n from '../../i18n'
import { addUserFieldOptions } from '../userField.conf.js'
export default (currentRuleData, template) => {
    const dropdown2cate = currentRuleData.entry2template || '0'
    //二级联动
    switch (dropdown2cate) {
        case '0':
            template.entry2.options = [{ text: '请选择', value: false, index: 0 }]
            break
        case '1': //表单字段
            template.entry2.options = window.formProperties || [] //branch.formProperties  
            break
        case '2': //用户字段
            let UsersClone = window.userProperties.map(el => JSON.parse(JSON.stringify(el))) //克隆子对象，断开引用
            template.entry2.options = UsersClone.map(el => {
                el.text = i18n[el.text]
                return el
            })
            template.entry2.options = addUserFieldOptions(template.entry2.options)
            break
            // case '3':
            //     template.entry2.options = branch.environmentVariable || []
            //     break
    }
    return template
}

