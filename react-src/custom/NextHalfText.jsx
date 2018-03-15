import React from 'react'
import { connect } from 'react-redux'
import  './style'

const ApproveNode = ({ put, currentRepo, dispatch }) => {
    // const withdrawChange = () => {
    //     dispatch({type:'approve/withdrawChange'})
    //     activeSave() 
    // }
    // const previousNodeSpecifiedChange = () => {
    //     dispatch({type:'approve/previousNodeSpecifiedChange'})
    //     activeSave() 
    // }
    // const enableSingleSelectChange = () => {
    //     dispatch({type:'approve/enableSingleSelectChange'})
    //     activeSave() 
    // }
    // const previousNodeSpecified = currentRepo[0] && currentRepo[0].previousNodeSpecified
    // const withdraw = currentRepo[0] && currentRepo[0].withdraw 
    // const enableSingleSelect = currentRepo[0] && currentRepo[0].enableSingleSelect 
    return(
        <div>
            
            <div className="property-row-title" > 
                回调地址及规范
            </div>
            <div className="property-row-content" > 
            推送参数：流程实例ID <br/>
            推送方法POST<br/>
            {`业务系统响应格式：{"status":0} 成功0,失败-1`}
            </div>

            
            <div className="property-row-title" > 
                审批规则
            </div>
            <div className="property-row-content" > 
            用于自定义任务，BPM会通过外部URL推送当前流程相关数据给业务系统，以便定制任务行为
            </div>             
            
        </div>
    )
}
/*
<div className="property-row-title">{put('approveNode.remark.title')}</div>
<div className="property-row-content">{put('approveNode.remark.content')}</div>
*/
const mapStateToProps = (state) => {
    const repo = state.approve.repo
    const id = state.approve.id
    const currentRepo = repo.filter((el,index)=>el.id == id) || false
    return {currentRepo} 
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApproveNode)
