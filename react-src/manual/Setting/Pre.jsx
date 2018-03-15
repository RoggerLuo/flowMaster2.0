import React from 'react'
const Pre = ({ 
        index,title,
        oncheck,checked,defaultValue,  //check
        onchange,inputValue //input
    }) => {
    return(            
        <div style={{margin:'10px 0 10px 0'}}>
            <div>
                <label htmlFor={`usertasksetting${index}`} style={{cursor:'pointer'}}>
                    <div className="property-row-content"> 
                        {title}
                    </div>
                </label>
                &nbsp;
                <input 
                    onChange={oncheck} 
                    checked={checked||false} 
                    value={checked||false}
                    style={{cursor:'pointer'}} 
                    id={`usertasksetting${index}`} 
                    name={`usertasksetting${index}`} 
                    type="checkbox" 
                /> 
            </div>
            <div style={{display:'flex'}}>
                <div className="property-row-content" style={{lineHeight:'25px',fontSize:'12px',color: '#999999'}}> 
                    审批名称设置
                </div>
                &nbsp;&nbsp;
                <input 
                    className="border-hover"
                    onChange={onchange} 
                    value={inputValue||''}
                    style={{height:'25px',lineHeight:'25px',outline:'none',border: '1px solid #DDDDDD',fontSize:'12px',padding:'0 3px'}} 
                    type="text" 
                    placeholder={defaultValue}
                /> 
            </div>
        </div>
    )
}
export default Pre

