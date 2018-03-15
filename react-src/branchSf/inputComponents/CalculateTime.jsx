import React,{createClass} from 'react'

function Comp({ inputData, oninput }){
    let text = inputData.text || '' //不加这一句就会报错，因为没有初始值，所以就变成了uncontrolled组件
    
    let part1 = text.split('天')
    let part2 = part1[1] && part1[1].split('小时') || ''
    let part3 = part2[1] && part2[1].split('分钟') || ''

    let days = part1[0]||''
    let hours = part2[0]||''
    let mins = part3[0]||''

    const whenChange1 = (event) => {
        if(isNaN(event.target.value)){
            window.showAlert('当前控件只能输入数字')
            return 
        }
        const newInputData = {
            text:event.target.value+'天' + event.target.parentNode.children[1].value+'小时' + event.target.parentNode.children[2].value+'分钟',
            value: (event.target.value*60*60*24 + event.target.parentNode.children[1].value*60*60 + event.target.parentNode.children[2].value*60)*1000 //  '"' + event.target.value+'天'+event.target.parentNode.children[1].value+'小时' +'"'
        }
        console.log(newInputData.value)
        oninput(newInputData)
    }

    const whenChange2 = (event) => {
        if(isNaN(event.target.value)){
            window.showAlert('当前控件只能输入数字')
            return 
        }
        if(event.target.value>24){
            window.showAlert('输入值请勿大于24')
            return 
        }
        const newInputData = {
            text: event.target.parentNode.children[0].value + '天' + event.target.value + '小时' + event.target.parentNode.children[2].value+'分钟',
            value: (event.target.value*60*60 + event.target.parentNode.children[0].value*60*60*24 + event.target.parentNode.children[2].value*60 )*1000  //'"' + event.target.parentNode.children[0].value + '天' + event.target.value + '小时' +'"'
        }
        console.log(newInputData.value)
        oninput(newInputData)
    }

    const whenChange3 = (event) => {
        if(isNaN(event.target.value)){
            window.showAlert('当前控件只能输入数字')
            return 
        }
        if(event.target.value > 60){
            window.showAlert('输入值请勿大于60')
            return 
        }
        const newInputData = {
            text: event.target.parentNode.children[0].value + '天' + event.target.value + '小时' + event.target.parentNode.children[2].value+'分钟',
            value: (event.target.value*60 + event.target.parentNode.children[0].value*60*60*24 + event.target.parentNode.children[1].value*60*60)*1000 //'"' + event.target.parentNode.children[0].value + '天' + event.target.value + '小时' +'"'
        }
        console.log(newInputData.value)
        oninput(newInputData)
    }

    return (
        <div className="input-text-container input-text-container-calculate">
            <input className="input-text" style={{width:'25%'}} type='text' value={days} onChange={whenChange1}/>天
            <input className="input-text" style={{width:'25%'}} type='text' value={hours} onChange={whenChange2}/>小时
            <input className="input-text" style={{width:'25%'}} type='text' value={mins} onChange={whenChange3}/>分钟
        </div>
    )
}

export default Comp
