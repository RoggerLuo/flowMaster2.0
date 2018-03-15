import React,{createClass} from 'react';
import { render } from 'react-dom'
const CharactersList = ({data,clickCross}) => {
    
    return(
       <div className="characters">
           {
                data.map((el,index)=>{
                   let or = ''
                   
                   if( index >= 1 ){
                       or = <span className="or">或</span>
                   }
                   
                   return (
                       <div key={index} className="single-container">
                           {or}
                           <div className="character">
                               <span className="name">{el.text}</span><span className="cross" data-index={index} onClick={clickCross}>X</span>
                           </div>
                       </div>
                   )
               })
            }
       </div>
    )
}

export default CharactersList