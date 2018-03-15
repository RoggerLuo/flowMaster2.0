import React,{createClass} from 'react';
import { render } from 'react-dom'
import store from '../../redux/configureStore.js'

const Boardbutton = createClass({
    getInitialState(){
        return {visibleStatus:'hidden'}
    },
    toggle(){
        if(this.state.visibleStatus!=''){
            this.setState({visibleStatus:''})            
        }else{
            this.setState({visibleStatus:'hidden'})            
        }
    },
    close(){
        this.setState({visibleStatus:'hidden'})                    
    },
    render(){
        let myOptionStyle = {visibility:this.state.visibleStatus}
        myOptionStyle.display = 'block'
        return(
            <div className="boardbutton">
                <div className="mybutton" onClick={this.toggle}>
                    <span className="inverted-triangle">
                        <i className="icon qingicon icon-add"></i>
                    </span>
                    {this.props.options.title} 
                </div>
                <div className="myoption" style={myOptionStyle} >
                    {this.props.options.buttons.map((el,index)=>{
                        return (
                            <div key={index} className="option" 
                                onClick={()=>{
                                    store.dispatch(el)
                                    this.close()
                                }}
                            >
                                {el.title}
                            </div>                
                        )
                    })}
                </div>
                <div className="big-cover" style={myOptionStyle} onClick={this.close}></div>
            </div>
        )
    }
})


export default Boardbutton

