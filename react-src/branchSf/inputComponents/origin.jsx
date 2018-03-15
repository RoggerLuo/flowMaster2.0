import React,{createClass} from 'react';
import Dropdown from '../../basicComp/branch-dropdown'
/* 
    ruleMode: 是否显示规则的 删除按钮
*/

class InputTest extends React.Component { 
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }
    click(event){
        const chooseCallback = (e) => {            
            if(e.data.type=='selectedDate'){
                console.log("roger's console")
                console.log(e.data.value)
            }
            window.removeEventListener("message",chooseCallback, false)
        }
        // window.addEventListener('message',chooseCallback,false)        
        // let message = {type:"openCalendar",left:event.currentTarget.getBoundingClientRect().left - 20,top:event.currentTarget.getBoundingClientRect().top}
        // window.parent.postMessage(message,'*')
    }
    render(){
        return (
            <div className="input-text-container">
                <input onClick={this.click} ref='myInput' type='text' className="input-text" value={this.props.value} onChange={this.props.oninput}/>
            </div>
        )
    }
}

const Rule = ({dropdownData,ruleMode,del,oninput}) => {
    let border = '1px solid white'
    let display = 'none'
    if(ruleMode =='delete'){
        border = '1px solid red'//#dde4ef
        display = ''
    }else{
        border = '1px solid white'
        display = 'none'
    }
    return (
        <div className="delete-frame" style={{border:border}}>
            <div style={{display:display,
                left: '22px',
                right: '22px',
                height: '66px',
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0.63)',
                zIndex: '999',
            }}></div>
            <div className="container-row">
                <Dropdown {...dropdownData.entry1}/>
                <Dropdown {...dropdownData.entry2}/>
                <Dropdown {...dropdownData.entry3}/>
                <i className="icon iconfont icon-guanbi2fill icon-red-close-for-rule" 
                    onClick={del}
                    style={{display:display}}>
                </i>
            </div>    
            <div className="container-row-placeholder"></div>
            <InputTest value={dropdownData.input} oninput={oninput}/>
        </div>
    )
}
export default Rule

