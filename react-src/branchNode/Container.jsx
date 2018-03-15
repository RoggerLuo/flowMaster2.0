import React,{createClass} from 'react';
import { render } from 'react-dom'
import store from '../../redux/configureStore.js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Presentation from './Presentation.jsx'

const BranchNode = ({repo,id,dispatch}) => {
    const currentRepo = repo.filter((el,index)=>{
        return el.resourceId == id
    })
    const dataRaw = currentRepo && currentRepo[0] && currentRepo[0].data||[]
    
    /* 
        做了映射，redux里存的是name和resourceId
        这里把options数据映射了一下
    */
    const data = dataRaw.map((el)=>{
        return {text:el.name,value:el.branchResourceId}
    })
    const choosedOption = currentRepo[0] && currentRepo[0].choosed || {text:'请选择',value:'请选择'} //currentRepo[0] && currentRepo[0].choosed.text||'请选择' //choosed的default的值映射在redux里
    /* 后期选择就不需要映射了 */

    const choosed = (item)=>{
        activeSave()
        dispatch({type:'branchNodeDropdownChoose',item})
        
        /*
             黑魔法：如果name==请选择，那么item.value是exclusive的
        */
        let theExclusiveGate
        if(item.text =='请选择'){
            theExclusiveGate =  window.windowCanvas.getChildShapeByResourceId(item.value)
        }else{
            /* 
                所选择的item.value是sequenceflow的resourceId 
                用来获取它所属的exclusiveGate
            */
            theExclusiveGate = window.windowCanvas.getChildShapeByResourceId(item.value).incoming[0]
        }

        /* 
            遍历所有exclusivegate节点下的sequenceflow 
            还原defaultflow属性
        */
        theExclusiveGate.outgoing.forEach((elOfEx)=>{
            elOfEx.setProperty('defaultflow','false')
        })
        
        if(item.text =='请选择'){ //直接跳过，
            return 
        }

        /* 
            把选择的分支defaultflow设成true
         */
        let currentElement = window.windowCanvas.getChildShapeByResourceId(item.value)
        currentElement.setProperty('defaultflow','true') // 直接调用setProperty,少了很多EventUpdate 
        
        /*
            清空这个branch之前的设置信息
            在设置的时候就清空，而不是取消的时候
        */
        dispatch({type:"clearSFData",id:item.value})
        currentElement.setProperty('conditionsequenceflow','')
        currentElement.setProperty('reduxdata','')
        window.setPropertyAdvance({key:'oryx-name',value:''},currentElement) //使用setPropertyAdvance可以马上更新到canvas视图上，但是会触发不必要的事件，尽量少用
    }
    return(
        <Presentation data={data} choosedOption={choosedOption} choosed={choosed} />
    )
}

const mapStateToProps = (state) => {
    return {repo:state.branchNode.repo,id:state.branchNode.id}
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ApproveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BranchNode)

export default function(){
    render(
        <Provider store={store}>
                <ApproveContainer />
        </Provider>
        ,
        document.getElementById('branchNodePropertyCtrl')
    );
}
