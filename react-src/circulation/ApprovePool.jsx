import React from 'react'
import approvePool_factory from '../approvePoolFactory_not4Parallel'

export default ({ data }) => {
    const del = (index) => rdx.dispatch({type:'circulation/deleteRole',index})
    const add = (item) => rdx.dispatch({type:'circulation/addRole',item})
    const clear = () => rdx.dispatch({type:'circulation/clear'})

    const cate = data[0] && data[0].cate || false
    return approvePool_factory(cate, data, { del, add, clear }, 0)
}


