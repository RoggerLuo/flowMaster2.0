import React,{createClass} from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

const Component = ({active,put}) => {
    const saveDeactive = () => rdx.dispatch({type:'saveDeactive'})
    let save = function(){}
    let style = {backgroundColor: 'rgb(133, 217, 255)'}
    if(active){
        save = () => fm.saveModel(saveDeactive)            
        style = {backgroundColor: 'rgb(0,176,255)'}
    }
    return (
        <div id="bottom-save" className="bottom-text-div" style={style} onClick={save}>
            <div className="save">{put('button.save')}</div>
        </div>
    )
}
    
const mapStateToProps = (state) => {
    return {active:state.common.active}
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}
const ConnectedApp = rdx.i18nPut(Component)
const ComponentContainer = connect(mapStateToProps,mapDispatchToProps)(ConnectedApp)


export default function(){
    render(
        <Provider store={rdx.store}>
            <ComponentContainer />
        </Provider>
        ,
        document.getElementById('bottom-save')
    )
}