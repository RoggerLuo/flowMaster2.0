import React from 'react'
import RoleCube from './RoleCube'

export default function(del){
    return function({ data }){
        return (
            <div>
                {data.map((el,index)=><RoleCube text={el.text} click={del(index)} key={index}/>)}
            </div>
        )
    }
}

