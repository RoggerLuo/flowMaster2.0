import React from 'react'
import Group from './Group'
function dataMap(list, category){
    const currentPid = window.getQueryString("pid")
    return list
        .filter(o => o.status == 'Normal')
        .filter(o => o.id != currentPid)
        .filter(o => o.categoryName == category)
        .map(o => (
            {
                versionId:o.versionId,
                text:o.name,
                value:o.id,
                checked:false
            }
        ))        
}
function dataPush(list,category){
    const data2Push = { groupTitle:category.name, data:dataMap(list,category.name) }
    if(category.children){
        data2Push.children = []
        category.children.forEach(child=>{
            data2Push.children.push(dataPush(list,child))
        })
    }
    return data2Push
}

const dataProducer = (list) => {
    const data = []
    const currentPid = window.getQueryString("pid")
    window.processCategory.forEach(el=>data.push(dataPush(list,el)))
    data.forEach(el=>{
        if(el.groupTitle == 'defaultCategory') el.groupTitle = "默认分类"
    })
    //暂时兼容null
    data.forEach(el=>{
        if(el.groupTitle == "默认分类"){
            const nullList = list
                .filter(el2=>el2.categoryName === null)
                .filter(el2 => el2.status == 'Normal')
                .filter(el2 => el2.id != currentPid)
                .map(el2 => (
                    {
                        versionId:el2.versionId,
                        text:el2.name,
                        value:el2.id,
                        checked:false
                    }
                ))            
            el.data = [...el.data,...nullList]
        }
    })
    return data
}

const AddComp = ({ currentRepo, put, add }) => {
    if(!currentRepo) return null
    const data = dataProducer(global.processList)    
    return(
        <div className="add-subflow" style={{width:'520px'}}>
            {data.map((el,ind)=><Group key={ind} index={ind} data={el}/>)}
            <div style={{height:'12px',width:'1px'}}></div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}

export default rdx.connect('subflow',rdx.i18nPut(AddComp))

