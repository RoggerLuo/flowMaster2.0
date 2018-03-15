import React from 'react'

export default ({ data }) => {
    const del = (index) => rdx.put('usertask', 'delete', ['data'], index)
    const add = (item) => rdx.dispatch({ type: 'usertask/addRole', item })
    const clear = () => rdx.dispatch({ type: 'usertask/clear' })
    const cate = data[0] && data[0].cate || false
    const approvePool_factory = fm.common.ApprovePool_factory_not4multi
    return approvePool_factory(cate, data, { del, add, clear }, 0)
}