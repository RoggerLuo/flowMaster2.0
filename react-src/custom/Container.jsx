import React,{createClass} from 'react';
import { render } from 'react-dom'
import store from '../../redux/configureStore.js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Presentation from './Presentation'

const Approve = ({ currentRepo,dispatch }) => {
    const value = currentRepo.url || ''
    const oninput = (e) => {
        dispatch({type:'custom/oninput',url:e.target.value})
    }
    return(
        <Presentation value={value} oninput={oninput}/>
    )
}

const mapStateToProps = (state) => {
    const repo = state.custom.repo
    const id = state.custom.id
    const filteredRepo = repo.filter((el,index)=>el.id == id) || false
    const currentRepo = filteredRepo && filteredRepo[0] || false
    return {currentRepo} 
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const ApproveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Approve)

export default function(){
    render(
        <Provider store={store}>
                <ApproveContainer />
        </Provider>
        ,
        document.getElementById('customPropertyCtrl')
    )
}
