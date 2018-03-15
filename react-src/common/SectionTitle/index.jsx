import React from 'react'
import './style'

const SectionTitle = ({text,mode,add,del,cancel,put}) => {
    let rightSide=''
    if(mode == 'icon'){
        rightSide = (
            <span>
                <i className="icon iconfont icon-tianjia" onClick={add}></i>
                <i className="icon iconfont icon-shanchu" onClick={del}></i>
            </span>
        )
    }else{
        rightSide = (
            <span style={{color:'#00B1FD',cursor:'pointer',    lineHeight: '25px'}} onClick={cancel}>
                {put('global.cancel')}
            </span>
        )
    }
    return (
        <div className="section-title">
            <span className="property-row-title-only-font" style={{lineHeight: "25px"}}>
                {text}
            </span>
            {rightSide}
        </div>
    )
}

export default rdx.i18nPut(SectionTitle)
