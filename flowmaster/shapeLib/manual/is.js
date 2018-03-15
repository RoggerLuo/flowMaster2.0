const is = {}
is.gateway = function(shape){
    if (shape && (fm.getTitle(shape) == "Exclusive gateway")) {
        if (shape.incoming[0] && 
            shape.incoming[0].incoming[0] &&
            (fm.getTitle(shape.incoming[0].incoming[0]) == 'Manual task')
        ){
            return true
        } 
    }     
    return false
}
is.sf = function(shape){
    if (shape && (fm.getTitle(shape) == "Sequence flow")) {
        if (!shape.incoming[0]) return false
        const incomingShape = shape.incoming[0]
        if(is.gateway(incomingShape)) return true
    }
    return false
}
is.sfInTheMiddle = function(shape){
    if (shape && (fm.getTitle(shape) == "Sequence flow")) {
        if(fm.getTitle(shape.incoming[0]) == 'Manual task'){
            return true
        }
    }
    return false
}

global.isManualGateway = is.gateway
export default is