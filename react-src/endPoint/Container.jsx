import React,{createClass} from 'react';
import { render } from 'react-dom'
import store from '../../redux/configureStore.js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import Presentation from './Presentation'

const Approve = ({repo,id}) => {
    const currentRepo = repo.filter((el,index)=>el.id == id)
    const data = currentRepo && currentRepo[0] && currentRepo[0].data||[]
    return(
        <Presentation data={data} />
    )
}

const mapStateToProps = (state) => {
    return {repo:state.endpoint.repo,id:state.endpoint.id}
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
        </Provider>,
        document.getElementById('endPointPropertyCtrl')
    )
}
