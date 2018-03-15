import React from 'react'

export default ({title, required}) => {
    return (
        <div  style={{width:'152px'}}>
            <div className="drop-down"  style={{width:'152px',height:'34px',marginTop:'10px'}}>
               <div className="title-tr" style={{fontSize:'13px',paddingLeft:'10px',width:'150px',lineHeight:'32px',height:'32px'}}>
                  {title}
               </div>
            </div>
            {required?(<div 
                style={{
                    color:'red',
                    marginTop: '-20px',
                    height: '20px',
                    position: 'relative',
                    bottom: '10px',
                    left: '158px'
                }}
            >*
            </div>):null}
        </div>
    )
}
