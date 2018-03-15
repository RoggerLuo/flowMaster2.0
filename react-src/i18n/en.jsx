
export default {
  'approveNode.remark.title':'Approval Rule',
  'approveNode.remark.content':'Approval passed if anyone on the Node has agreed',
  'approveNode.button.add':'Add Approval Staff',
  'approveNode.title.staff':'Approval Staff',
  
  'endPoint.title':'Auto Notify',
  'endPoint.button.title':'Add Staff',

  'parallel.remark.title':'Approval Rule',
  'parallel.remark.content':'Approval passed if each group has at least one person agreed',
  'parallel.contentTitle':'Approval Range',
  'parallel.group':(index)=>'Group'+index,//会签组
  'parallel.addGroup':'Add Approval Staff',//添加审批人员
  'branch.sectionContent':(nextElement)=>"Flowing to “"+nextElement+"”  if passed",//"满足以下条件则分支流向节点“"+nextElement+"”"
  'branch.sectionTitle':'Condition Setting',//条件设置'
  'branch.radio.manual':'Manual',//'手动选择',
  'branch.radio.formula':'Formula',//'编写公式',
  'branch.remark.title':'Instruction',//说明：
  'branch.remark.content1':'Relations among conditions are logical "or"',
  'branch.remark.content2':'relations among rules are logical "and"',
  // 条件与条件间是“或”的关系<br/>
  // 规则与规则间是“与”的关系
  'branch.remark.content3':'1. "$string" marks certain form fields, font color will be red if the field is not found;',//1、$字段名称来标识表单字段，若无法找到对应系统会显示红色；
  'branch.remark.content4':'2. "#string" marks initiator, red if not found;', //2、#人员属性来标识发起人的参数，支持参数有：性别、职级等，以个人资料中的信息字段为准，若无法找到对应系统会显示红色；
  'branch.remark.content5':'3. "%date" marks current date;', //3、%date来标识当前日期
  'branch.remark.content6':'4. Basic formulas are supported, such as ∑、+、-、*、/、>、>=、==、<、<=、AND、OR ;', //{"4、支持基础的计算公式，如：∑、+、-、*、/、>、>=、==、<、<=、AND、OR等；"}
  'branch.remark.content7':'5. Only English characters are supported;', //5、请使用英文的字符，文字除外。
  'branch.menu.add':'Add Rule',//添加规则
  'branch.menu.del':'Delete Rule',//删除规则
  'branch.condition':'Condition',//条件

  'guide.stopRemind':'Stop remind me',//不再提醒
  'guide.iknow':'Clear',//我知道了
  'guide.title1':'1. Function Node', //1、功能点
  'guide.content1':'Click or drag items to editing area',//点击或拖动至编辑区域
  'guide.title2':'2. Editing Area', //2、编辑区域
  'guide.content2':'Edit here',  //)}在此区域进行编辑
  'guide.title3':'3. Property Area',  //3、设置区域
  'guide.content3':'Set and modify property here',  //在此区域进行设置
  'global.cancel':'Cancel',
  'global.confirm':'Confirm',

  'button.option1':"Add Higher-ups",//'添加发起人上级'
  'button.option2':"Add Org Character",//添加机构角色
  'button.option3':"Add Certain Character",//添加特定人员
  'button.save':'Save',

  'popup.org1':"Nearest",//"最近"
  'popup.org2':"level",//"级分管"
  'popup.higherLevel1':"The",//发起人的上
  'popup.higherLevel2': "level leader",//级领导

}
