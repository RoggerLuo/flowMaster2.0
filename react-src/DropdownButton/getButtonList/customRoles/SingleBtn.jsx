import React,{createClass} from 'react'

export default class SingleBtn extends React.Component { 
    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = {choosed:false}
    }
    toggleView(id,name){
        this.setState({choosed:!this.state.choosed})
        this.props.onclick(id,name,this.state.choosed)            
    }
    render(){
        let className = "customRoleSingleBtn"
        if(this.state.choosed) className = 'customRoleSingleBtnActive'
        return (
            <div 
                className={className} 
                onClick={()=>this.toggleView(this.props.id,this.props.name)}
            >
                <div style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        maxWidth: '100px',
                        display:'inline-block'
                    }}
                >
                    {this.props.name}
                </div>
            </div>
        )
    }
}
