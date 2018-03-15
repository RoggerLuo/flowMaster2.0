import rolesJsonSpeller from '../rolesJsonSpeller'
import servicetaskfields from './servicetaskfields'
import formMapping from './formMapping'

export default function(canvas) {
    let returnFlag = true
    const procDefKey = window.getQueryString("pid")
    const versionId = window.getQueryString("versionId")
    const sub_properties = { versionId, procDefKey, subSettings: [] }
    
    const subflowReducer = window.reduxStore.getState().subflow
    subflowReducer.repo.forEach((repo) => {
        if(!returnFlag) return 
        
        let currentElement = fm.getNodeById(repo.id)
        if (!currentElement) return
        

        if(!repo.leftFields){
            window.showAlert('子流程节点未添加和配置')
            returnFlag = false
            return 
        }


        if( !fm.subflow.checkMainform(repo) || !fm.subflow.checkSubform(repo)){
            returnFlag = false
        }
       
        const candidateUsers = rolesJsonSpeller([],repo.data)
        if(candidateUsers.length == 0){
            window.showAlert('子流程中审批人范围未选择')
            returnFlag = false
            return returnFlag
        }

        const subSetting = {
            "subVersionId": repo.subProcess.versionId||'',
            "subProcDefKey": repo.subProcess.subProcDefKey,
            "startType": repo.isOne ? "One" : "ByApproved",

            "actId": currentElement.resourceId,

            "candidateUsers": JSON.stringify(candidateUsers), //"{\"candidateOwners\" : [{\"cate\" : \"fromDb\",\"id\" : \"1\",\"text\" : \"从DB中获取\",\"value\" : \"fromDb(1)\"}]}",
            "formMapping":JSON.stringify(formMapping(repo)), // "[{\"left\":\"field_1510555486841\",\"right\":\"field_1510296977961\",\"type\":\"text\",\"subForms\":[]},{\"left\":\"field_1510555506743\",\"right\":\"field_1510297609155\",\"type\":\"sub_form\",\"subForms\":[{\"left\":\"field_1510555521126\",\"right\":\"field_1510297625044\",\"type\":\"text\",\"subForms\":[]},{\"left\":\"field_1510555534868\",\"right\":\"field_1510297639134\",\"type\":\"text\",\"subForms\":[]}]}]",

            "startUserSource": "Parent",
            "startUserValue": "",
            "processType": "Normal"
        }
        if(subSetting.subVersionId == ''){
            window.showAlert('子流程中子表单versionId未获得')
            returnFlag = false
            return returnFlag
        }
        sub_properties.subSettings.push(subSetting)
        
        currentElement.setProperty('servicetaskexpression', "")
        currentElement.setProperty('servicetaskfields', servicetaskfields(repo))
        currentElement.setProperty('reduxData', repo)
        currentElement.setProperty('servicetaskdelegateexpression', "${subProcessServiceTask}")
        currentElement.setProperty('classify', "SubProcess")
    })
    window.sub_properties = sub_properties
    return returnFlag
}