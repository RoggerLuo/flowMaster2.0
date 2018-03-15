import React from 'react'

const MenuContainer = ({ currentRepo, children, index, xClass }) => { 
    if(!currentRepo) return null
    const add = (item) => rdx.dispatch({type:'multi/addChar',item,index}) //index是group index        
    const clear = () => rdx.dispatch({type:'multi/clear',index}) //index是group index
    const cate = ( //reduxCate是从现有的第一个item上获取的
        currentRepo.data 
        && currentRepo.data[index]
        && currentRepo.data[index][0]
        && currentRepo.data[index][0].cate || false)
    const optionsCtrl = { onConfirm: add, cate, groupInd: index, roles: currentRepo.data }
    const Menu = fm.common.dropdownMenu.component
    return ( 
        <Menu xClass={xClass} optionsCtrl={optionsCtrl}>
            {children}
        </Menu>
    )
}
export default rdx.connect('multi', MenuContainer)

