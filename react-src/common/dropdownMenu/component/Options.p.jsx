import React,{createClass} from 'react'

function Option({ click, text }){
    return (
        <div className="option-wrap">
            <div onClick={click} className="option">{text}</div>
        </div>
    )
}

function Options({ data, close, put }){
    return (<div>
        {data.map((el,key)=>{
            const click = () => {
                el.click()
                close()
            }
            const text = put(el.title)
            return (<Option click={click} text={text} key={key}/>)
        })}
    </div>)
}

export default rdx.i18nPut(Options)
 