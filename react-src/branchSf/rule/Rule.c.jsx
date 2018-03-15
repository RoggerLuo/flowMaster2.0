import React,{createClass} from 'react'
import { connect } from 'react-redux'
import Rule from './Rule.p'
import makeRuleData from './makeRuleData.js'

const RuleContainer = ({ branch, conditions,/*from redux*/key1, key2, ruleMode, cancelRuleDeleteStatus }) =>{
    
    const oninput = (inputData) => {
        rdx.dispatch({type:'ruleOnInput',key1,key2,inputData})
        // window.updateBranchText()
        fm.branch.update()
    }
    
    const del = () => {
        if(conditions[key1].data.length<=1){
            window.showAlert('每组条件中至少保留一条规则')
            cancelRuleDeleteStatus()
            return 
        }
        rdx.dispatch({type:'deleteRule',groupIndex:key1,ruleIndex:key2})
        fm.branch.update()
        // window.updateBranchText()
    }
    
    const chooseFactory = (entryIndex) => {
        return (optionItem)=>{
            rdx.dispatch({optionItem,type:'branchUpdate',groupIndex:key1,ruleIndex:key2,entryIndex})
            // window.updateBranchText()
            fm.branch.update()
        }
    }

    const dropdownData = makeRuleData(conditions,chooseFactory,branch,key1,key2)
    if(!dropdownData) return null //切换的时候，可能返回null，不显示就好了
    return (<Rule {...{dropdownData,ruleMode,del,oninput,branch}} />)
}

const mapStateToProps = (state) => {
    const elementFound = state.branch.repo.filter((el,index)=>{
        return el.id == state.branch.id
    })
    const conditions = elementFound[0] && elementFound[0].conditions || []
    return {conditions, branch:state.branch}
}
export default connect(mapStateToProps)(RuleContainer)
