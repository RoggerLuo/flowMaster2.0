import React from 'react'
import Menu from './Menu'
import ApprovePool from './ApprovePool'
import './style'

const ApproveGroup = ({data,mode,solidFrame,index,put}) => { 
    const cate = data && data[0] && data[0].cate || false
    const SolidFrame = fm.common.SolidFrame
    if(mode == 'initial'){
        return (
            <SolidFrame {...solidFrame}> 
                <div style={{display:'flex'}}>
                    <div style={{flex:'1'}}>
                        <div style={{fontSize:'13px',paddingLeft:'2px'}}>{put('parallel.group',(index+1))}</div>
                    </div>
                    <div>
                        <Menu xClass={{right: '13px'}} index={index} >
                            <div style={{cursor:'pointer',paddingLeft: '27px',color:'#00b0ff',fontSize:'12.5px'}} >
                                {put('parallel.addGroup')}
                            </div>
                        </Menu>
                    </div>
                </div>
            </SolidFrame>
        )
    }else{
        return (
            <SolidFrame {...solidFrame}>
                <div style={{display:'flex'}}>
                    <div style={{flex:'1',flexDirection:'column',justifyContent: 'space-around',paddingRight: '2px'}}>
                        <div style={{fontSize:'13px',paddingLeft:'6px',marginTop:'3px'}}>
                            {put('parallel.group',(index+1))}
                        </div>
                        <Menu index={index} 
                            xClass={{
                                marginTop:'-14px',left: '16px',
                                backgroundSize: '142px 140px',
                                backgroundPosition: '-1px 0px',
                                padding: '8px 5px 6px 5px',
                                boxShadow: '0px 0px 0px rgba(212, 212, 212, 0.43)', 
                                backgroundImage: "url(./editor-app/dist/"+require('./pad2.png')+")"
                            }}
                        >
                            <div style={{textAlign:'center',height: '50px',lineHeight: '50px'}}>
                                <i style={{cursor:'pointer',fontSize:'20px',color:'#00b0ff'}} className="icon iconfont icon-jiahao2fill"></i>
                            </div>
                        </Menu>
                    </div>
                    <div style={{flex:'3.5',whiteSpace:'normal',marginLeft: '4px',marginTop:'1px'}}>
                        <ApprovePool data={data} cate={cate} index={index}/>
                    </div>
                </div>
            </SolidFrame>
        )
    }
}
export default rdx.i18nPut(ApproveGroup)
