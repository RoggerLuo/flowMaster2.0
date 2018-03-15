// import React from 'React'
import SettingComponent from './SettingComponent'
import isMainformOk from './isMainformOk'

export default (currentRepo) => {    
    const data = currentRepo.data || []
    const subProcess = currentRepo.subProcess
    
    fm.subflowCurrentRepo = currentRepo // 为了保持动态更新 ，如果不是全局变量， 函数作用域 就只会保存当时的值
    
    return () => {
        if(fm.isSpecificVersionEditMode) return
        if(subProcess.subProcDefKey){
            fm.subflow.fetch_leftFields(subProcess) // 拉取最新的数据 and required
        }
        fm.subflowTempData = JSON.parse( JSON.stringify(currentRepo) ) //为了点击取消还原数据
        
        rdx.dispatch({
            content:SettingComponent, //(<div>abc</div>), // data
            confirm(){
                if(isMainformOk(fm.subflowCurrentRepo)){
                    return true                    
                }else{
                    return false
                }
            },
            onCancel(){
                rdx.put('subflow','replace',[],fm.subflowTempData)
            },
            type:'callPopupX',
            height:'auto',
            title:'子流程设置',
            width:'988px',
            style:{margin:'10px 40px',width:'100%'}
        })
    }
}
