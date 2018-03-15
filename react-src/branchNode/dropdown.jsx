/*
组件需传入以下参数
    options:this.props.options //options
    choose:this.props.choose   //when choosed
    choosedText:this.props.choosedText

    usePut:this.props.usePut   //是否用translate //默认为不使用
*/
import React,{createClass} from 'react';
import { render } from 'react-dom'
import './dropdown.less'

const Option = ({click,text,value,put,choosedOption}) =>{
    let className="inner-option "
    if(value == choosedOption.value){
        className="inner-option checkok"
    }
    if((choosedOption.text == '请选择')&&(text == choosedOption.text)){
        className="inner-option checkok"        
    }
    return (
        <div className="drop-down-option" onClick={click}>
            <div className={className} >
                {put(text)}
            </div>
        </div>
    )           
}
//这个文件后面还有一个 自带的 container ... 看完整个js文件再说
//这个 display是 由state控制的
const DropdownRaw = ({options,choose,choosedOption,display,toggle,close,put,usePut}) => {
    let nDisplay = display == 'none'? '':'none'
    if(!usePut){
        put = (value)=>value
    }
    return (
        <div>
            <div className="branch-node-dropdown" style={{flex:'1'}}>
                <div style={{display: 'flex'}} className="drop-down-choosed" onClick={toggle}>
                    <div className="choosed-text">{put(choosedOption.text)}</div> 
                    <div className="inverted-triangle">
                        <i style={{display: nDisplay,top:'0px'}} className="icon iconfont icon-sanjiao1"></i>
                        <i style={{paddingTop: '3px',color:'#00b0ff',transform:'rotate(180deg)',display:display}} className="icon iconfont icon-sanjiao1" ></i>
                    </div>
                </div>


                <table className="drop-down-table" style={{zIndex:'9999',width: '100%'}} >
                    <tbody>
                        <tr style={{display:'none'}}>
                            <td className="drop-down-choosed stop-propagation" onClick={toggle} style={{color:'black',display:'flex',justifyContent: 'space-between'}}>
                                <div>{put(choosedOption.text)}</div> 
                                <div className="inverted-triangle"><i className="icon qingicon icon-sanjiao1"></i></div>

                            </td>
                        </tr>
                        <tr className="drop-down-options" style={{display:display}}>
                            <td>
                                <div className="scrollbar" style={{overflow:'auto',maxHeight:'200px'}}>
                                    {options.map((el,index)=>{
                                        el.index = index
                                        return(<Option click={()=>{close();choose(el)}} text={el.text} value={el.value} key={index} put={put} choosedOption={choosedOption}/>)
                                    })}
                                </div>
                            </td>                
                        </tr>    
                    </tbody>
                </table>
            </div>
            <div className="big-cover" style={{display:display}} onClick={close}></div>
        </div>
    )
}

import connectPut from 'react-put'
const putOptions = {mapPropToDictionary: (props)=>window.reactI18n}
const Dropdown = connectPut(putOptions)(DropdownRaw)

const DropdownContainer = createClass({ 
    getInitialState(){
        return {
            display:'none',
        }
    },
    toggle(){
        if(this.state.display == 'none'){
            this.setState({display:''})
        }else{
            this.setState({display:'none'})
        }
    },
    close(){
        this.setState({display:'none'})
    },
    render(){        
        return (
            <Dropdown {...{usePut:this.props.usePut,options:this.props.options,choose:this.props.choose,choosedOption:this.props.choosedOption,display:this.state.display,toggle:this.toggle,close:this.close}}/>
        )
    }
})

export default DropdownContainer
