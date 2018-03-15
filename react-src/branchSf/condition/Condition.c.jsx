import React,{createClass} from 'react'
import Condition from './Condition.p'

const ConditionContainer = createClass({ 
    getInitialState(){
        return {
            menuDisplay:'none'
        }
    },
    render(){
        const conditions = this.props.currentRepo.conditions
        if(!conditions) return null
        const deleteCondition = (index) => { //这是删除条件
            if(conditions.length <=1){
                window.showAlert('至少保留一组条件')
                rdx.dispatch({type:'closeConditionDeleteMode'})
                return 
            }
            rdx.dispatch({type:'deleteCondition',conditionIndex:index})        
            fm.branch.update()
        }
        const ruleData = conditions[this.props.index] && conditions[this.props.index].data||[]
        const conditionMode = this.props.currentRepo.conditionMode //got problem

       

        /* 考虑到condition删除状态的影响,每次进行判断 */

        const ruleMode = this.props.conditionMode == 'delete'?'normal': conditions[this.props.index] && conditions[this.props.index].ruleMode || 'normal'

        /* 准备header的数据 */
        const closeMenu = () => {
            this.setState({menuDisplay:'none'})        
        }
        const toggleMenu = () => {
            if(this.state.menuDisplay=='none'){
                this.setState({menuDisplay:''})
            }else{
                this.setState({menuDisplay:'none'})
            }
        }

        

        /* ruleMode */

        const deleteStart = ()=>{
            rdx.dispatch({type:'allRuleModeEQdelete',index:this.props.index})
            closeMenu()
        }
        const deleteCancel = ()=>{
            rdx.dispatch({type:'allRuleModeEQnormal',index:this.props.index})
            closeMenu()
        }

        const index1 = this.props.index
        const addRule = () => {
            rdx.dispatch({type:'addRule',index:this.props.index})
            closeMenu()
            activeSave()
        }

        const headerProps = {
            close:closeMenu,
            toggleMenu:toggleMenu,
            display:this.state.menuDisplay,

            startRuleDeleteStatus:deleteStart,
            cancelRuleDeleteStatus:deleteCancel,
            isDots:!((ruleMode=='delete') && (ruleData.length != 0)),
            
            addRule,
            index:this.props.index
        }
        return (
            <Condition {...{ruleData,headerProps,index1,ruleMode,conditionMode,deleteCondition}}/>
        )
    }
})

export default rdx.connect('branch', ConditionContainer)
