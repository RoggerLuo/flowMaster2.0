import React,{createClass} from 'react'

function Option({click,text}){
    return (
        <div className="option-wrap">
            <div onClick={click} className="option">{text}</div>
        </div>
    )
}

export default function({menuClass,data,close,put}){
    return (
        <div className="myoption" style={menuClass} >
            {data.map((el,key)=>{
                const click = () => {
                    el.click()
                    close()
                }
                const text = put(el.title)
                const param={key,click,text}
                return (<Option {...param}/>)
            })}
        </div>
    )
}
