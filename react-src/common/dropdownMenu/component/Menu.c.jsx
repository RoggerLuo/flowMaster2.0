import React from 'react'
import optionDataFactory from '../optionDataFactory'
import MenuView from './Menu.p'

function ConfigComp({ xClass, optionsCtrl, children, isEmpty }){ 
    if(['form','historicTask','fromDb','callBack'].indexOf(optionsCtrl.cate) != -1){
        if(!isEmpty) return null
    }
    const optionData = optionDataFactory(optionsCtrl) 
    return (
        <MenuView xClass={xClass} optionData={optionData} roles>
            {children}
        </MenuView>
    )
}

export default ConfigComp
