import React from 'react'

export default ({ optionsData, selectedOption, select, children }) => {
    
    const Dropdown = fm.common.Dropdown
    return ( <div  style={{width:'392px',display: 'flex'}}>
        <div  style={{width:'185px',marginRight: '10px'}}>
            {children}
        </div>
        <div style={{width:'185px'}}>
            <Dropdown data={optionsData} width={'185px'} choosedOption={selectedOption} choosed={select}/>
        </div>
    </div>
    )
}
