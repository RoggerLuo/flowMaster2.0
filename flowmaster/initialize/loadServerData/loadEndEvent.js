export default function(el,index,modelData){
    let endData2 = []
    if(!el.properties.deliverToUsers) return
    endData2 = el.properties.deliverToUsers.map((el2)=>{ //会签组12345
        let obj = {cate:el2.cate,value:el2.id,text:el2.text}
        if(el2.value2) obj.value2 = el2.value2
        return  obj
    })  
    window.reduxStore.dispatch({type:'endpoint/init',data:{data:endData2,id:el.resourceId}})
    delete modelData.childShapes[index].properties.deliverToUsers
}