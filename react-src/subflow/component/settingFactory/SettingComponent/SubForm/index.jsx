import React from 'react'
import Header from '../Form/Header'
import SubGroup from './SubGroup'

const SubForm = ({ currentRepo, dispatch }) => {
    if(!currentRepo) return null
    const leftFields = currentRepo.leftFields || []
    const filtered = leftFields
        .filter(el => el.type == 'sub_form')
        
    const SolidFrame = fm.common.SolidFrame
    return(
        <SolidFrame innerStyle={{padding:'0px'}} outerStyle={{width:'620px'}}>
            <Header />
            <div style={{padding:'10px 20px'}}>
                {
                    filtered.map((el,ind)=>(<SubGroup key={ind} data={el} isLast={(filtered.length-1)==ind}/>))
                }
            </div>
        </SolidFrame>
    )
}
export default rdx.connect('subflow',SubForm)

