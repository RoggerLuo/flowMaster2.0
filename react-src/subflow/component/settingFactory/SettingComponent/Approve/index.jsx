import React from 'react'
import ApprovePool from './ApprovePool'
import Menu from './Menu'

export default ({ data ,put }) => {//data,
    const isEmpty = (data.length == 0)
    return(
        <div>

            <div style={{fontSize:'14px',fontWeight:'600',marginBottom:'10px'}}> 
                设置子流程发起后第一个节点的审批人范围
            </div>
            <div style={{display:'flex',marginTop:'10px'}}>
                

                <div style={{width:'300px'}}>
                    {
                        isEmpty?
                            (<div style={{height:'43px', width:'300px',border: '1px solid #c5c5c5'}}></div>):
                            (<ApprovePool data = {data}/>)
                    }
                </div>


                <div style={{position:'relative',top: '6px',left: '5px'}}>
                    <Menu >
                        <i style={{paddingLeft: '1px'}} className="icon iconfont icon-tianjia"></i>
                    </Menu>
                </div>
            </div>
      
        </div>
    )
}

//,height:'49px'