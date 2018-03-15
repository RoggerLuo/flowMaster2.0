import React from 'react'

const MenuContainer = ({ currentRepo, children}) => { 
    const cate = currentRepo.data && currentRepo.data[0] && currentRepo.data[0] .cate
    const add = (item) => rdx.dispatch({ type:'manual/addRole',item })
    const xClass = { marginTop:'5px',right:'12px' }
    const Menu = fm.common.dropdownMenu.component
    const optionsCtrl = { onConfirm: add, cate, groupInd: 0, roles: currentRepo.data }
    return ( 
        <Menu xClass={xClass} optionsCtrl={optionsCtrl}>
            {children}
        </Menu>
    )
}
export default rdx.connect('manual', MenuContainer)
