import React from 'react'
import  './style'
import Button from './ButtonConf'
// import RolesFrame from './RolesFrameConf'
import NextHalfText from './NextHalfText'
// import SolidFrame from '../presentations/SolidFrame/SolidFrame'
const ApproveNode = ({ put, oninput,value }) => {
    // const isListEmpty = data.length == 0
    return(
        <div className="react-approve">
            <div className="row-title" style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{lineHeight: '30px'}} className="property-row-title-only-font">
                    {`外部URL`}
                </div>                
            </div>    
                <textarea onInput={oninput} 
                    style={{
                        padding:'6px',
                        outline:'none',
                        border:'1px solid rgb(221, 221, 221)',
                        height:'72px',
                        width: '100%'
                    }} 
                    value={value}
                >
                </textarea> 
            {`必须以"http://"或"https://"开头，分别支持80端口和443端口（暂不支持加密协议)`}
            <NextHalfText put={put}/>
        </div>
    )
}

import connectPut from 'react-put'
const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(ApproveNode)

export default ConnectedApp
