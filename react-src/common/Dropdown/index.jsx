import React from 'react'
import './style'
// const Dropdown = createClass({
export default class Dropdown extends React.Component { 
    // getInitialState(){
    //     const choosedOption = this.props.data && this.props.data[0] || []
    //     return {visibleStatus:'none',zIndex:'1',choosedOption:choosedOption}
    // },
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.close = this.close.bind(this)
        const choosedOption = this.props.data && this.props.data[0] || []
        this.state = {visibleStatus:'none',zIndex:'1',choosedOption:choosedOption}
    }

    toggle(e){
        if(this.state.visibleStatus != ''){
            this.setState({'visibleStatus':'',zIndex:'99999'})
        }else{
            this.setState({'visibleStatus':'none',zIndex:'1'})
        }
    }
    close(e){
        this.setState({'visibleStatus':'none',zIndex:'1'})
    }
    render(){
        let color={}
        if(this.state.visibleStatus!='none'){
            color={color:'#00b0ff'}
        }
        let bigcoverstyle = {display:this.state.visibleStatus}
        if(this.props.position) bigcoverstyle = {display:this.state.visibleStatus,position:this.props.position}
        return(
            <div className="drop-down" style={{flex:'1',margin: this.props.margin||'0 10px'}}>
                <div style={{width: this.props.width||'152px',display: 'flex',visibility:'hidden'}} className="drop-down-choosed" onClick={this.toggle}>
                    <div className="choosed-text">{this.props.choosedOption && this.props.choosedOption.text}</div>
                    <div className="inverted-triangle" style={color}></div>
                </div>

                <table className="drop-down-table" style={{zIndex:this.state.zIndex}} >
                    <tbody>
                        <tr className="title-tr" style={{}}>
                            <td className="drop-down-choosed stop-propagation" onClick={this.toggle} style={{width: this.props.width||'152px',color:'black',display:'flex',justifyContent: 'space-between'}}>
                                <div className="choosed-text" style={{maxWidth:this.props.width||'130px'}}>{this.props.choosedOption && this.props.choosedOption.text}</div> <div className="inverted-triangle"></div>
                            </td>
                        </tr>
                        <tr className="drop-down-options" style={{display:this.state.visibleStatus}}>
                            <td><div style={{maxHeight: '192px',overflow: 'auto'}} className="scrollbar">
                                {this.props.data && this.props.data.map((el,index)=>{
                                    
                                    let className="text-wrap "
                                    if(el.value == (this.props.choosedOption && this.props.choosedOption.value)){
                                        className="text-wrap checkok"
                                    }

                                    return(
                                        <div 
                                            key={index} 
                                            className="drop-down-option" 
                                            onClick={
                                                (e)=>{
                                                    this.close(e)
                                                    this.setState({choosedOption:el})
                                                    this.props.choosed(el,index)
                                                }
                                            }
                                        >
                                            <div style={{maxWidth:this.props.width||'130px'}} className={className}>{el.text}</div>
                                        </div>                                                    
                                    )
                                })||null}
                            </div></td>                
                        </tr>    
                    </tbody>
                </table>
                {this.props.cover=='no'?null:(<div className="big-cover" style={bigcoverstyle} onClick={this.close}></div>)}
            </div>
        )
    }
}
// export default Dropdown

