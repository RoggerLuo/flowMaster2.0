import React from 'react';
import EntryGroup from './EntryGroup'

export default ({ value, oninput }) => {
    const Dropdown = fm.common.Dropdown
    return (
        <div style={{width:'701px',padding:'0 40px'}}>
                
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
                    value={value||''}
                >
                </textarea> 
            {`必须以"http://"或"https://"开头，分别支持80端口和443端口（暂不支持加密协议)`}
            
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
