const isInGates = (shape) => {
    function isUnderParallelGate(shape,outerProofer) {
        let stackoverflowProofer = 0
        stackoverflowProofer += outerProofer
        stackoverflowProofer += 1
        if(stackoverflowProofer >= 40) return false

        const incomings = shape.incoming || []
        let returnValue = false
        incomings.some(incoming => {
            //中间隔了个sequence flow 
            if (fm.getTitle(incoming) == 'Parallel gateway') {
                returnValue = incoming //true
                return true
            }
            if (fm.getTitle(incoming) == 'Inclusive gateway') {
                returnValue = false
                return true
            }
            returnValue = isUnderParallelGate(incoming,stackoverflowProofer)
        })
        return returnValue
    }
    return isUnderParallelGate(shape,0)
}
export default isInGates