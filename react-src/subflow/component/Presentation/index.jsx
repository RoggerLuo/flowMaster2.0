import React from 'react'
import  './style'
import Choke from './Choke'

const SubflowPresentation = ({ name, isEmpty, add, setting, del }) => { //put
    const SolidFrame = fm.common.SolidFrame
    return(
        <div className="react-approve">
            <div className="row-title" style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{lineHeight: '30px'}} className="property-row-title-only-font">
                    {`触发的子流程`}
                </div>
            </div>    
            
            {isEmpty?(
                <div className="mybutton" onClick={add}>
                    {`添加触发的子流程`}
                    <i className="icon iconfont icon-tianjia"></i>
                </div>
            ):(
                <SolidFrame>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{textOverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden',maxWidth: '210px'}}>{name}</div> 
                        <div>
                            <i 
                                onClick={setting} 
                                style={{paddingLeft: '1px',cursor:'pointer',marginRight:'10px'}} 
                                className="icon iconfont icon-shezhi">
                            </i>
                            <i 
                                onClick={del} 
                                style={{paddingLeft: '1px',cursor:'pointer',margin:'-6px 0 0 0',position:'relative',top:'3px'}} 
                                className="icon iconfont icon-shanchu">
                            </i>
                        </div>
                    </div>
                </SolidFrame>
            )}
            <Choke/>
        </div>
    )
}
export default rdx.i18nPut(SubflowPresentation) 


