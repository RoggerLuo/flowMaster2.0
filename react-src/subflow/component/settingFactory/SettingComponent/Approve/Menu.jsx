import React from 'react'

const MenuContainer = ({ currentRepo, children }) => {
    const cate = currentRepo.data && currentRepo.data[0] && currentRepo.data[0].cate

    const add = (item) => rdx.dispatch({ type: 'subflow/addRole', item })

    const xClass = { marginTop: '5px', marginLeft: '-105px' }

    const optionsCtrl = { onConfirm: add, cate, groupInd: 0, buttonMode:'subflow' }

    const Menu = fm.common.dropdownMenu.component
    return (
        <Menu xClass={xClass} optionsCtrl={optionsCtrl}>
            {children}
        </Menu>
    )
}
export default rdx.connect('subflow', MenuContainer)

