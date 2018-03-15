// 不可能两根线都有同样的标签，// 也不可能两根都没有标签
export default function(gateway) { 
    // 如果只有一根线
    if(gateway.outgoing.length == 1){
        const sf = gateway.outgoing[0]
        if(!sf.properties['oryx-name']){ // 如果还没有名字
        //if(!sf.properties['conditionsequenceflow']){ // 如果还没有名字
            window.setPropertyAdvance({ key: 'oryx-name', value: '  会签通过' }, sf)
            window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${CBPass}" }, sf)
        }
    }
    if(gateway.outgoing.length == 2){
        if(gateway.outgoing[0].properties['oryx-name'] && gateway.outgoing[1].properties['oryx-name']){
            return 
        }
        let sf_shape
        let pass

        // 第一条线有conditionsequenceflow
        if(gateway.outgoing[0].properties['oryx-name']){
            sf_shape = gateway.outgoing[1]
            if(gateway.outgoing[0].properties['oryx-name'] == '  会签通过'){
                pass = false
            }else{
                pass = true
            }
        }else{
            // 第一条线没有conditionsequenceflow
            sf_shape = gateway.outgoing[0]
            if(gateway.outgoing[1].properties['oryx-name'] == '  会签通过'){
                pass = false
            }else{
                pass = true
            }
        }
        
        if(pass){
            window.setPropertyAdvance({ key: 'oryx-name', value: '  会签通过' }, sf_shape)
            window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${CBPass}" }, sf_shape)            
        }else{
            window.setPropertyAdvance({ key: 'oryx-name', value: '  会签不通过' }, sf_shape)
            window.setPropertyAdvance({ key: "conditionsequenceflow", value: "!${CBPass}" }, sf_shape)            
        }
    }
}
