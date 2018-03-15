import update from './updateBranchText'
global.fm = global.fm || {}
fm.branch = {}
// fm.branch.is = {}
fm.branch.is = (shape) => {
    const incoming = fm.getIncoming(shape)
    if(incoming){
        if(fm.getTitle(incoming) == 'Exclusive gateway') return true
    }
    return false
}
fm.branch.update = update
// fm.branch.is.mulit = () => {}
// fm.branch.is.manual = () => {}
// fm.branch.is.not = () => {}