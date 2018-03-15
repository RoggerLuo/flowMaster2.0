import React from 'react'
import { connect } from 'react-redux'

const SingleButton = ({ customRoles, id, name, onclick }) => {
    let className = "customRoleSingleBtn"
    const selected = customRoles.some(role=>{
        return role.value == id
    })
    if(selected) className = 'customRoleSingleBtnActive' 
    const toggleView = (id,name,selected) => onclick(id,name,!selected) 
    return (
        <div 
            className={className}  
            onClick={()=>toggleView(id,name,selected)}
        >
            <div style={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    maxWidth: '100px',
                    display:'inline-block'
                }}
            >
                { name }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { customRoles: state.popup.customRoles }
}

export default connect(mapStateToProps)(SingleButton)
