import { template, defaultOption } from '../../../redux/reducers/branch/basic'
import judgeList from '../judge.conf.js'
import cascader2 from './cascader2'

export default (conditions, chooseFactory, branch, key1, key2) => {
    const currentRuleData = conditions && conditions[key1] && conditions[key1].data[key2] && conditions[key1].data[key2] || undefined
    if (!currentRuleData) return null

    let templateCloned = JSON.parse(JSON.stringify(template))
    templateCloned = cascader2(currentRuleData, templateCloned)
    
    //inputCtrlInfoData 来自于 reducer的action，是第二个下拉的选中项
    // 这个是最后一个输入组件的 模版数据，是下拉选项，还是单行输入 等等
    const tempVar = currentRuleData.inputCtrlInfoData || { cate: 'text' }
    let inputCtrlInfoData = Object.assign({}, tempVar)
    if (inputCtrlInfoData.subform_type) { //如果是表单组件, 更新
        window.formProperties.forEach(el => {
            if (el.value == inputCtrlInfoData.value) {
                inputCtrlInfoData = el
            }
        })
    }


    //三级联动 //第三个下拉，判断符号，> = 
    templateCloned.entry3.options = judgeList[inputCtrlInfoData.cate] || judgeList.text
    if (inputCtrlInfoData.cate == 'calculate') {
        templateCloned.entry3.options = judgeList[inputCtrlInfoData.rule.type]
        //dateDiff //timeDiff //sum  //mean  //formula
    }

    //设置选中项
    templateCloned.entry1.choosedOption = currentRuleData.entry1
    templateCloned.entry2.choosedOption = currentRuleData.entry2
    templateCloned.entry3.choosedOption = currentRuleData.entry3
    templateCloned.input = currentRuleData.input
    templateCloned.inputCtrlInfoData = inputCtrlInfoData
    //方法
    templateCloned.entry1.choose = optionItem => chooseFactory('entry1')(optionItem)
    templateCloned.entry2.choose = optionItem => chooseFactory('entry2')(optionItem)
    templateCloned.entry3.choose = optionItem => chooseFactory('entry3')(optionItem)
    //是否翻译
    templateCloned.entry1.usePut = true
    templateCloned.entry2.usePut = false
    templateCloned.entry3.usePut = false
    return templateCloned
}