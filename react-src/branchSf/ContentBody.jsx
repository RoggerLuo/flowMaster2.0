import React from 'react'
import { connect } from 'react-redux'
import ConditionContainer from './condition/Condition.c'

const dropdownMode = () => rdx.dispatch({type:'modeChange',value:'dropdown'})
const textMode = () => rdx.dispatch({type:'modeChange',value:'text'})
const addRule = (index) => rdx.dispatch({type:'addRule',index})    
const onchange = (event) => rdx.dispatch({type:'radioTextChange',text:event.target.value})
const Options =   ({conditions,element,put,nextElement}) => {
    if(element.radio){
        /*
        <p>{put('branch.remark.content3')}</p>
        <p>{put('branch.remark.content4')}</p>
        <p>{put('branch.remark.content5')}</p>
        <p>{put('branch.remark.content6')}</p>
        */
        return (
            <div>
                <div className="section-content">
                    {put('branch.sectionContent',nextElement)}
                </div>

                <textarea 
                    placeholder='点击输入条件公式...'
                    value={element.text}
                    onChange={onchange}
                    style={{padding:'5px',outline:'none',border:'1px solid #ccc',width:'100%',height:'100px'}} 
                ></textarea>
                
                <div className="section-title">{put('branch.remark.title')}</div>
                <div className="property-row-content" style={{}}>
                    <p>{put('branch.remark.content7')}</p>
                </div>
            </div>
        )
    }else{
        if(conditions.length == 0){
            return (<div></div>)
        }else{
            return (
                <div>
                    <div className="section-content">
                        {put('branch.sectionContent',nextElement)}
                    </div>

                    {conditions.map((el,index)=>{
                        return (<ConditionContainer index={index} key={index}/>)
                    })}
                    <div className="section-title">{put('branch.remark.title')}</div>
                    <div className="property-row-content">
                        {put('branch.remark.content1')}；<br/>
                        {put('branch.remark.content2')}。
                    </div>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    const nextElement = state.common.nextElOfSF
    const elementFound = state.branch.repo.filter((el,index)=>el.id == state.branch.id)
    const conditions = elementFound[0] && elementFound[0].conditions || []
    const element = elementFound[0] && elementFound[0]||{}
    return {conditions,element,nextElement}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const OptionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(rdx.i18nPut(Options))

export default OptionsContainer

