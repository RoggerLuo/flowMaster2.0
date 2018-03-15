import React from 'react'
import SectionTitleContainer from './SectionTitleContainer'
import ContentBody from './ContentBody'
import './style'

 const branchSf = ({put}) => {
    const unfold = () => {
        try {
            fm.closeCurrDpdw && fm.closeCurrDpdw()
        } catch (error) {

        }
    }
    return(
        <div className="react-approve" onClick={unfold}>
            <SectionTitleContainer text={put('branch.sectionTitle')}/>   
            <ContentBody />
            <div style={{height:'100px',width:'100%'}}></div>
        </div>
    )
}
export default rdx.i18nPut(branchSf)

//import Radios from './Radios'
//            <Radios />
