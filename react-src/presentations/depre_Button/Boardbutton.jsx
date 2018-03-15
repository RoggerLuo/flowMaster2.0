import React,{createClass} from 'react';
import './style'

const Boardbutton = ({data,toggle,close,display,children,xClass}) => { //data:{click,text}
    xClass = xClass || {}

    const newClass = Object.assign({}, xClass, {
        display: display
    })

    return(
        <div className="boardbutton">
            <div onClick={toggle}>
                {children}
            </div>
            <div className="myoption" style={newClass} >
                {data.map((el,index)=>{
                    return (
                        <div key={index} className="option-wrap">
                            <div onClick={()=>{el.click();close()}} className="option">{el.text}</div>                
                        </div>
                    )
                })}
            </div>
            <div className="big-cover" style={{display:display}} onClick={close}></div>
        </div>
    )
}

export default Boardbutton

