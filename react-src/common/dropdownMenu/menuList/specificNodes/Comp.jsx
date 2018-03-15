import React from 'react'
import { connect } from 'react-redux'

const Component = ({ data, dispatch, put, choosedOption2, specificRolesData }) => {    
    let choosed2 = (item) => {
        dispatch({type:'dropdown2Choose',item})
    }

    if( !choosedOption2.value || (choosedOption2.value == 'initial')) {
        choosedOption2 = specificRolesData[0]
    }else{
        choosedOption2 = specificRolesData.filter(el=>el.value == choosedOption2.value)[0]
    }        
    const Dropdown = fm.common.Dropdown
    return (
        <div style={{textAlign:'center'}}>
            <div style={{height:"25px",width:'1px'}}></div>
            选择特定节点审批人
            <Dropdown width={'180px'} position={'absolute'} data={specificRolesData} choosedOption={choosedOption2} choosed={choosed2}/>
            <div style={{color: '#999999',fontSize:'13px',width:'390px',paddingTop:'26px'}}>            
                {'注：此处获取的是特定节点的实际审批人，如果获取的节点未流转，将因为无法获取审批人导致审批异常，请谨慎操作'}
            </div>
        </div>
    )
}
 
const mapStateToProps = (state) => {
    let specificRolesData = [{text:'暂无可选节点',value:false}]
    const filteredRepo = state.temp.repo.filter( el=> el.id == state.temp.id)
    if(filteredRepo[0]) {
        if(filteredRepo[0].specificRolesData){
            specificRolesData = filteredRepo[0].specificRolesData
        }
    }
    return {choosedOption2:state.dropdown.dropdown2,specificRolesData}
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(rdx.i18nPut(Component))

export default ComponentContainer

