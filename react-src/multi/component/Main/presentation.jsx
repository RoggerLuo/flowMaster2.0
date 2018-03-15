import React from 'react'
import Group from '../Group'
import './style'

const Component = ({sectionTitleData, data, put}) => {
    const SectionTitle = fm.common.SectionTitle
    const unfold = () => {
        try {
            fm.closeCurrDpdw && fm.closeCurrDpdw()
        } catch (error) {

        }
    }

    return(
        <div className="react-approve" onClick={unfold}>
            <SectionTitle {...sectionTitleData} text={put('parallel.contentTitle')} /> 
            {data.map((el,index)=>{ //data是state.parallel.data， el是会签组group
                return (<Group el={el} index={index} key={index}/>)
            })}
            <div className="property-row-title">{put('parallel.remark.title')}</div>
            <div className="property-row-content" 
                style={{padding:'0',fontSize:'13px',color:'#333333'}}
            >
                {put('parallel.remark.content')}
            </div>
            <div style={{height:'163px',width:'1px'}}></div>
        </div>
    )
}

export default rdx.i18nPut(Component)
