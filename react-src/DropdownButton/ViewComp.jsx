import React,{createClass} from 'react'
import OptionsComp from './OptionsComp'
export default createClass({ 
    getInitialState(){
        return {display:'none'}
    },
    render(){
        const close = () => this.setState({display:'none'})
        const toggle = () => {
            if(this.state.display=='none'){
                this.setState({display:''})
            }else{
                this.setState({display:'none'})
            }
        }
        const display = this.state.display
        const param = this.props.param
        const menuClass = Object.assign({}, param.xClass||{}, {display})
        const OptionsParam = { menuClass, data:param.config(), close, put:param.put }
        return (
            <div className="boardbutton">
                <div onClick={toggle}>{this.props.children}</div>
                <OptionsComp {...OptionsParam}/>
                <div className="big-cover" style={{display}} onClick={close}></div>
            </div>  
        )
    }
})



