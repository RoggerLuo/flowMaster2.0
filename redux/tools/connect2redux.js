import {connect} from 'react-redux'
const connect2redux = (reduceName,reactComp) => {
    const mapStateToProps = (state) => {
        if(!state[reduceName]){
            // debugger
            throw "reduce name 不存在"
        }
        const repo = state[reduceName].repo
        const id = state[reduceName].id
        const currentRepo = repo.filter((el,index)=>el.id == id) 
        if(currentRepo.length==0) return { currentRepo: false } 
        return { currentRepo: currentRepo[0] } 
    }
    const mapDispatchToProps = (dispatch) => ({dispatch})
    return connect(mapStateToProps,mapDispatchToProps)(reactComp)    
}
global.connect2redux = connect2redux
export default connect2redux
