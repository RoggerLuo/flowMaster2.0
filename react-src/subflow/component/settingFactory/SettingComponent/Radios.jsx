import React from 'react'
const Radios =  ({dispatch,currentRepo}) => {
    const isOne = currentRepo.isOne
    const mode1 = () => {
        dispatch({type:'subflow/isOne',isOne:true})
        activeSave() 

    }
    const mode2 = () => {
        dispatch({type:'subflow/isOne',isOne:false})
        activeSave() 
    }
    let view = ''
    if(isOne){
        view = (
            <div className="radio-box">
                <div >
                    <div className="radio-lable" style={{cursor:'pointer'}}>
                        <span className="radio-img" style={{position:'relative',bottom:'2px'}}><img width="20" height="20" src={require("../selected.png")} /></span>
                        &nbsp;<span className="radio-text" style={{lineHeight:'30px'}}>{`只发起一个子流程，多个审批人时，均收到同个流程的待办消息`}</span> 
                    </div> 

                </div>

                <div >

                    <div className="radio-lable" onClick={mode2} style={{cursor:'pointer'}}>
                        <span className="radio-img" style={{position:'relative',bottom:'2px'}}><img width="20" height="20" src={require("../unselected.png")} /></span>
                        &nbsp;<span className="radio-text" style={{lineHeight:'30px'}}>{`多个审批人时，发起多个子流程，不同审批人收到不同子流程的待办消息`}</span> 
                    </div>  
                </div>
            </div>

        )
        
    }else{
        view = (
            <div className="radio-box">
                
                <div >
                    <div className="radio-lable" onClick={mode1} style={{cursor:'pointer'}}>
                        <span className="radio-img" style={{position:'relative',bottom:'2px'}}><img width="20" height="20" src={require("../unselected.png")} /></span>
                        &nbsp;<span className="radio-text" style={{lineHeight:'30px'}}>{`只发起一个子流程，多个审批人时，均收到同个流程的待办消息`}</span> 
                    </div> 
                </div>

                <div >

                    <div className="radio-lable" style={{cursor:'pointer'}}>
                        <span className="radio-img" style={{position:'relative',bottom:'2px'}}><img width="20" height="20" src={require("../selected.png")} /></span>
                        &nbsp;<span className="radio-text" style={{lineHeight:'30px'}}>{`多个审批人时，发起多个子流程，不同审批人收到不同子流程的待办消息`}</span> 
                    </div> 
                </div>
            </div>
        )
        
    }
    return view
}

export default rdx.connect('subflow',Radios)

