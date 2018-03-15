import React from 'react'
import  './style'
import Menu from './Menu'
import ApprovePool from './ApprovePool'
import ApproveSetting from './ApproveSetting'

const Circulation = ({ data, put }) => {
    const isEmpty = data.length == 0
    const unfold = () => {
        try {
            fm.closeCurrDpdw && fm.closeCurrDpdw()
        } catch (error) {

        }
    }

    return(
        <div className="react-approve" onClick={unfold}>
            <div className="row-title" style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{lineHeight: '30px'}} className="property-row-title-only-font">
                    {'传阅人员'/*put('approveNode.title.staff')*/}
                </div>
                {!isEmpty?(
                    <Menu>    
                        <i style={{paddingLeft: '1px'}} className="icon iconfont icon-tianjia"></i>
                    </Menu>    
                ):null}
            </div>    

            {isEmpty?(
                <Menu>    
                    <div className="mybutton" >
                        {'添加传阅人员'/*put('approveNode.button.add')*/}
                            <i className="icon iconfont icon-tianjia"></i>
                    </div>
                </Menu>    
            ):null}

            {!isEmpty?(<ApprovePool data={data} />):null}

            <ApproveSetting put={put}/>
            <div style={{height:'270px',width:'1px'}}></div>
        </div>
    )
}

export default rdx.i18nPut(Circulation)
