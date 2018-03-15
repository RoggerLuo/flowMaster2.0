import Comp from './Comp'
export default function(cb){
    return {
        id:'second',
        add(){
            const item = {
                cate:'EXTERNAL',
                value:'二次开发',
                text:'二次开发'
            }
            cb(item)        
        }
    }

    // return {
    //     confirm(){
    //         const item = {
    //             cate:'EXTERNAL',
    //             value:'二次开发',
    //             text:'二次开发'
    //         }
    //         cb(item)

    //         // global.reduxStore.dispatch({type:'approve/clearPool'})
    //         // global.reduxStore.dispatch({type:'getBackToDefaultDp1'})
    //     },
    //     content:Comp,
    //     type:'callPopup',
    //     height:'300px',
    //     title:'button.option8',
    //     width:'500px'
    // }
}
