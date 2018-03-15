import React,{createClass} from 'react';
import { render } from 'react-dom'


const Dropdown = createClass({
    getInitialState(){
        // let choosedOption = this.props.choosedOption
        let choosedOption = this.props.options[0]?this.props.options[0].text:''
        return {visibleStatus:'none',zIndex:'1',choosedOption:choosedOption}
    },
    toggle(e){
        // this.publicOnClick(e)
        if(this.state.visibleStatus != ''){
            this.setState({'visibleStatus':'',zIndex:'99999'})
        }else{
            this.setState({'visibleStatus':'none',zIndex:'1'})
        }
    },
    close(e){
        this.setState({'visibleStatus':'none',zIndex:'1'})
        this.publicOnClick(e)
    },
    publicOnClick(e){
        // e.stopPropagation()
        // e.preventDefault()
        // choosedOption
    },
    render(){
        return(
            <div className="drop-down">
                <div className="drop-down-placeholder">
                {this.state.choosedOption}
                </div>

                <table className="drop-down-table" style={{zIndex:this.state.zIndex}} >
                    <tbody>
                        <tr>
                            <td className="drop-down-choosed stop-propagation" onClick={this.toggle}>
                                {this.state.choosedOption} <span className="inverted-triangle">▼</span>
                            </td>
                        </tr>
                            <tr className="drop-down-options" style={{display:this.state.visibleStatus}}>
                                <td>
                                    {this.props.options.map((el,index)=>{
                                        return(
                                            <div 
                                                key={index} 
                                                className="drop-down-option" 
                                                onClick={
                                                    (e)=>{
                                                        el.onClick(e)
                                                        this.close(e)
                                                        this.setState({choosedOption:el.text})
                                                    }
                                                }
                                            >
                                                {el.text}
                                            </div>                                                    
                                        )
                                    })}
                                </td>                
                            </tr>    
                    </tbody>
                </table>   
                <div className="big-cover" style={{display:this.state.visibleStatus}} onClick={this.close}></div>
            </div>
        )
    }
})

export default Dropdown

