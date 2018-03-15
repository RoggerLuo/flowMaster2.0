export default function() {
    fm.getNodes().forEach(el => { //遍历 所有的元素 进行判断是否在并行汇聚节点中
        
        const parallelGate = fm.parallelGate.isShapeIn(el)
        el.setProperty('isInGates', !!parallelGate)
        
        if (parallelGate) {
            const sf_before_parallel = parallelGate.incoming[0]
            /* 所有在parallel gate里面的sf，用它所在的parallel gate的前一根连线的 业务状态businessStatusId*/
            if (sf_before_parallel && sf_before_parallel.properties.businessStatusId) {
                const bsid = sf_before_parallel.properties.businessStatusId
                el.setProperty('businessStatusId', bsid)
            }
        }
    })
}