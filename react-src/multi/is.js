const is = {}
is.gateway = (shape) => {
    if (shape && (fm.getTitle(shape) == "Exclusive gateway")) {
        const prevShape = shape.incoming[0]
        if (prevShape) {
            const prevPrevShape = prevShape.incoming[0]
            if (prevPrevShape) {
                if (fm.getTitle(prevPrevShape) == 'Multi user task') return true
            }
        }
    }
    return false
}

is.sf = (shape) => {
    if (shape && (fm.getTitle(shape) == "Sequence flow")) {
        if (!shape.incoming[0]) return false
        const prevShape = shape.incoming[0]
        return is.gateway(prevShape)
    }
    return false
}

is.sfInTheMiddle = function(shape){
    if (shape && (fm.getTitle(shape) == "Sequence flow")) {
        if(fm.getTitle(shape.incoming[0]) == 'Multi user task') return true
    }
    return false
}

global.isMultiGateway = is.gateway
export default is