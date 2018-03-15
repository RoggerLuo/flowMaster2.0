export default function(cb){
    return function(){
        const state = rdx.getState().temp
        const ind = rdx.findCurrentRepoInd(state)
        const currentRepo = state.repo[ind]

        if(!currentRepo.callback_textarea) return
        const item = {
            cate:'callBack',
            value:currentRepo.callback_textarea,
            text:'外部回调'
        }

        cb(item)
        rdx.put('temp','replace',['callback_textarea'],'')
        return true
    }
}
