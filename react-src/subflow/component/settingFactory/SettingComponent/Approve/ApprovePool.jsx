import React from 'react'

function ApprovePool({ currentRepo }){
    if(!currentRepo) return null
    const data = currentRepo.data || []

    const del = (index) => rdx.dispatch({type:'subflow/deleteRole',index})
    const add = (item) => rdx.dispatch({type:'subflow/addRole',item})
    const clear = () => rdx.dispatch({type:'subflow/clear'})

    const cate = data[0] && data[0].cate || false
    const approvePool_factory = fm.common.ApprovePool_factory_not4multi
    return approvePool_factory(cate, data, { del, add, clear })   
}
export default rdx.connect('subflow',ApprovePool)

