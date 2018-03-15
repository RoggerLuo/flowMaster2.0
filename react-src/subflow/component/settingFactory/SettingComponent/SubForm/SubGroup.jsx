import React from 'react'
import Group from './GroupContainer'

const initialObject = () => ({ text: '请选择', value: false })
const SubGroup = ({ data, currentRepo, dispatch, isLast }) => {
    // data就是leftField里面的el

    const leftFormId = data.name
    const optionsData = window.formPropertiesTotal || []

    // 下拉选项
    const newOptions = optionsData
        .filter(el => el.subform_type == 'sub_form')
        .filter(el => el.subform_type != "description")
        .map(el => ({ text: el.title, value: el.value }))
    
    newOptions.unshift(initialObject())

    let subOptions = [initialObject()]
    let selectedOption = initialObject()

    const subRight = currentRepo.subRights && currentRepo.subRights[data.name] || false
    if (subRight) {
        const rightFormId = subRight.rightFormId
        const foundSelectedOption = newOptions.filter(el => el.value == rightFormId)
        //筛选出来是 主表单的 text, value
        if (foundSelectedOption.length != 0) {
            selectedOption = foundSelectedOption[0]
        }

        const foundSubOptions = optionsData.filter(el => el.value == rightFormId)
        //筛选出来是 原始的form接口数据
        if (foundSubOptions.length != 0) {
            // 筛选出来之后的children才是可用的 子表单组件
            subOptions = foundSubOptions[0].children.map(el => ({ text: el.title, value: el.name, type: el.type, cate: el.type }))
            subOptions.unshift(initialObject())
        }
    }

    const select = (item) => {
        rdx.dispatch({ type: 'subflow/subRights/rightFormId', leftFormId, rightFormId: item.value })
    }
        
    const required = data.required
    const Dropdown = fm.common.Dropdown

    const filterList = ['description','database_view','calculate']

    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between',width:'400px',height:'16px'}}>
                <div style={{color: '#999999', fontSize: '13px'}}>
                    {data.title}  
                    {required?(<span style={{color:'red'}}> * </span>):null}
                </div>
                <div style={{width:'210px',position:'relative',top:'16px'}}>
                    <Dropdown data={newOptions} width={'185px'} choosedOption={selectedOption} choosed={select} />
                </div>
            </div>
            <div>
                {data.children
                    .filter(el => filterList.indexOf(el.type) == -1)
                    .map((el2,ind2)=>(
                        <Group leftData={el2} key={ind2} leftFormId={leftFormId} subOptions={subOptions} />
                    ) 
                )}
            </div>
            {isLast?(<div style={{height:'20px',width:'100%'}}></div>):(<div style={{margin:'20px 0 10px 0',height:'1px',borderTop:'0.5px solid #dcdcdc',width:'100%'}}></div>)}
        </div>
    )
}
export default rdx.connect('subflow', SubGroup)
