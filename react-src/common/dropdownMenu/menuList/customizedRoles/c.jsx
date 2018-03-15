import React, { createClass } from 'react'
import { connect } from 'react-redux'
import Comp from './p'

export default (roles) => {
    const seletedCustomizedRoles = roles.filter(role => role.cate == "customizeRole")
    rdx.dispatch({ type: 'popup/update', data: seletedCustomizedRoles }) 

    const Component = ({ dispatch, put, customRoles }) => {
        
        const onclick = (id, name, selectedStatus) => {
            let newCustomRoles = customRoles
            
            if(!selectedStatus){// 不是已选择  就删除
                
                customRoles.some((el,ind) =>{
                    if(el.value == id)  {
                        newCustomRoles.splice(ind,1)
                        return true
                    } 
                })

            }else{
                newCustomRoles.push({ value: id, text: name, cate: 'customizeRole' })
            }
            dispatch({ type: 'popup/update', data: [] }) 
            dispatch({ type: 'popup/update', data: newCustomRoles }) 
        }

        const current = window.customRoles && window.customRoles.filter(el => el.orgType == 'CURRENT') || false
        const inherit = window.customRoles && window.customRoles.filter(el => el.orgType == 'INHERIT') || []
        return (<Comp current={current} inherit={inherit} onclick={onclick} seletedCustomizedRoles={seletedCustomizedRoles}/>)
    }

    const mapStateToProps = (state) => {
        return { customRoles: state.popup.customRoles }
    }

    const mapDispatchToProps = (dispatch) => {
        return { dispatch }
    }

    const ComponentContainer = connect(
        mapStateToProps,
        mapDispatchToProps
    )(rdx.i18nPut(Component))

    return ComponentContainer
}