import React from 'react'
import Header from '../Form/Header'
import Group from './GroupContainer'

const MainForm = ({ currentRepo }) => {
    if(!currentRepo) return null
    const filterList = ['sub_form','description','database_view','calculate']
    const leftFields = currentRepo.leftFields || []
    const SolidFrame = fm.common.SolidFrame
    return(
        <SolidFrame innerStyle={{padding:'0px'}} outerStyle={{width:'620px'}}>
            <Header />
            <div style={{padding:'10px 20px'}}>
                {
                    leftFields
                        .filter(el => filterList.indexOf(el.type) == -1)
                        .map((el,ind)=><Group leftData={el} key={ind} />)                        
                }
            </div>
            <div style={{height:'20px',width:'100%'}}></div>
        </SolidFrame>
    )
}
export default rdx.connect('subflow',MainForm)
// .filter(el => el.type != "database_view")
