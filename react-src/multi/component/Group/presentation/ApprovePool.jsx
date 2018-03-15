import React from 'react'
import ApproveFactory from './ApproveFactory'

export default function({ data, cate, index }) { //index是groupIndex
    const del = (characterIndex) => () => rdx.dispatch({ type: 'multi/delelteRole', groupIndex: index, characterIndex })
    const add = (item) => rdx.dispatch({ type: 'multi/addChar', item, index })
    const clear = () => rdx.dispatch({ type: 'multi/clear', index })
    const edit = () => {
        const cb = (item) => {
            clear()
            add(item)
        }
        rdx.dispatch({type:'sql/reload',savedSqlState:data[0].sqlState})
        rdx.dispatch(fm.common.dropdownMenu.menuList.sql(cb)(index))
    }
    

    const { DefaultContainer, DbRoleContainer } = ApproveFactory({ edit, del, add, clear })
    switch(cate){
        case 'fromDb':
            return (<DbRoleContainer data={data} index={index}/>)
        default:
            return (<DefaultContainer data={data}/>)
    }
}
