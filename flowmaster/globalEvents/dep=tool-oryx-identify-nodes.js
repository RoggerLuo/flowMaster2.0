'use strict'

global.isMultiGateway = (selectedShape) => {
    if (selectedShape && (selectedShape._stencil._jsonStencil.title == "Exclusive gateway")) {
        if ( selectedShape.incoming[0] && selectedShape.incoming[0].incoming[0] &&
            (selectedShape.incoming[0].incoming[0]._stencil._jsonStencil.title == 'Multi user task')
        ){
            return true
        } 
    }     
    return false
}
global.isManualGateway = (selectedShape) => {
    if (selectedShape && (selectedShape._stencil._jsonStencil.title == "Exclusive gateway")) {
        if (
            selectedShape.incoming[0].incoming[0] &&
            (selectedShape.incoming[0].incoming[0]._stencil._jsonStencil.title == 'Manual task')
        ){
            return true
        } 
    }     
    return false
}
