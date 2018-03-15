import React from 'react'
import approvePool_factory from '../approvePoolFactory_not4Parallel'

export default function({ data }) {
    const del = (index) => rdx.dispatch({ type: 'manual/deleteRole', index })
    const add = (item) => rdx.dispatch({ type: 'manual/addRole', item })
    const clear = () => rdx.dispatch({ type: 'manual/clear' })
    const edit = () => rdx.dispatch({ type: 'popup/callPopupEdit' })
    const cate = data[0] && data[0].cate || false
    return approvePool_factory(cate, data, { edit, del, add, clear }, 0)
}
