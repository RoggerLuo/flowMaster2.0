import React from 'react'
export default ({ clear, edit }) => {
    return ({ data }) => {
        const text = data && data[0] && data[0].sql|| '' // && data[0].currentDataSourceRef.sql||''
        return (
            <div>
                <div style={{padding:'2px 5px 8px 5px',fontSize: '12px',color: '#333333'}}>{text}</div>
                <div style={{textAlign:'right',paddingTop: '20px'}}>
                    <i onClick={edit} style={{paddingLeft: '1px'}} className="icon iconfont icon-edit"></i>
                    <span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                    <i onClick={clear} style={{paddingLeft: '1px'}} className="icon iconfont icon-shanchu"></i>
                </div>
            </div>
        )   
    }
}