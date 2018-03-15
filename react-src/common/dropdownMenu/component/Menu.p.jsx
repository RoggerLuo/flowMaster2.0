import React,{createClass} from 'react'
import Options from './Options.p'

export default createClass({ 
    getInitialState(){
        return {display:'none'}
    },
    render(){
        const close = () => this.setState({display:'none'})
        const toggle = (e) => {

            if(this.state.display=='none'){
                this.setState({display:''})

            }else{
                this.setState({display:'none'})
            }

            // 点击消失
            fm.closeCurrDpdw = () => this.setState({display:'none'})
            e.stopPropagation()

        }
        const display = this.state.display
        const menuClass = Object.assign({}, this.props.xClass||{}, {display})
        return (
            <div className="boardbutton">
                <div onClick={toggle}>
                    {this.props.children}
                </div>
                <div className="myoption" style={menuClass} >
                    <Options data={this.props.optionData} close={close} />
                </div>
            </div>  
        )
    }
})

/*
<div className="big-cover" style={{display}} onClick={close}></div>
*/


