import React from 'react'

const Menu = ({ currentRepo, children }) => { 
    if(!currentRepo) return null
    const cate = currentRepo.data && currentRepo.data[0] && currentRepo.data[0].cate || ''
    const add = (item) => rdx.dispatch({type:'circulation/addRole',item})   
    const xClass = {marginTop:'5px',right:'12px'}
    const optionsCtrl = { onConfirm: add, cate, groupInd: 0, roles: currentRepo.data }
    const Menu = fm.common.dropdownMenu.component
    return ( 
        <Menu xClass={xClass} optionsCtrl={optionsCtrl}>
            {children}
        </Menu>
    )
}
export default rdx.connect('circulation', Menu)
