import React,{createClass} from 'react';
import './style'

const SolidFrame = ({del,mode,children,innerStyle,outerStyle}) => { //click点击删除,modeSwitch=='delete',children
    // let style = "1px solid #c5c5c5"
    let display = "none"
    let style

    if( mode =='delete'){
        // style = "1px solid red"
        display = ''
        style = {
            border:'1px solid red',
            opacity:'0.5',
            pointerEvents: 'none'
        }

    }else{
        // style = "1px solid #c5c5c5"
        display = 'none'
        style = {
            border:'1px solid #DDDDDD'
        }

    }
    return(
        <div className="solid-frame-container">
            <div className="solid-frame" style={style} style={outerStyle||{}}>
                <div style={innerStyle||{padding: '7px 7px'}}>{children}</div>
            </div>
            <i 
                onClick={del} 
                className="icon iconfont icon-guanbi2fill" 
                style={{zIndex:'9999',cursor:'pointer',display:display,margin: '-8px',color:'#E52F2F',backgroundColor:'white'}}>
            </i>
        </div>
    )
}

export default SolidFrame