import React,{createClass} from 'react';
import  './style'
import CharacterContainer from './CharacterContainer'
import Button from './ButtonConfig.jsx'
import SolidFrame from '../presentations/SolidFrame/SolidFrame'

const ApproveNode = ({data,put}) => {
    return null
    let list = ''
    let display1 = 'none'
    let display2 = ''
    if(data.length != 0){
        list = (
            <SolidFrame>
                <div style={{padding:'2px'}}>
                    {data.map((el,index)=>{ //data 是 会签组, el是 一组character对象的array
                        return (<CharacterContainer index={index} el={el} key={index} />) //el 需要包含上一级 groupIndex
                    })}
                </div>
            </SolidFrame> 
        )
        display2 = 'none'
        display1 = ''
    }
    return(
        <div className="react-approve">
            <div className="property-row-title" style={{display:'flex',justifyContent:'space-between'}}>
                <div>{put('endPoint.title')}</div>
                
                <div style={{display:display1}}>
                    <Button>
                        <i style={{paddingLeft: '1px'}} className="icon iconfont icon-tianjia"></i>
                    </Button>
                </div>
            </div>            
            <div style={{display:display2}}>
                <Button>
                    <div className="mybutton" >
                        {put('endPoint.button.title')}
                            <i className="icon iconfont icon-tianjia"></i>
                    </div>
                </Button>
            </div>
            {list}
        </div>
    )
}
import connectPut from 'react-put'
const options = {mapPropToDictionary: (props)=>window.reactI18n}
const ConnectedApp = connectPut(options)(ApproveNode)

export default ConnectedApp
