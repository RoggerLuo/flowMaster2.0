import autoNaming from './autoNaming'

function by_gateway(shape) { //这个shape是"Exclusive gateway"
    //总共就两根线，都判断一次好了
    const sf = shape.outgoing[0] || false
    if (!sf) return true
    if (!sf.properties['oryx-name']) autoNaming(sf, shape) //如果第一根线没有设置过
    
    //另一根线
    const sf2 = shape.outgoing[1] || false //接着判断第二根线
    if (!sf2) return true
    if (!sf2.properties['oryx-name']) autoNaming(sf2, shape)
    // debugger
    if( sf2.properties['oryx-name'] == sf.properties['oryx-name'] ){
        autoNaming(sf2, shape)        
    }
}

function by_sf(shape) {
    const prevShape = shape.incoming[0]
    by_gateway(prevShape)
}

function by_the_shape_after_sf(shape) {
    const prevShape = shape.incoming[0]
    if (prevShape) {
        const prevPrevShape = prevShape.incoming[0]
        if (prevPrevShape) {
            if (fm.multi.is.gateway(prevPrevShape)) autoNaming(prevShape)
        }
    }
    return false
}
export default { by_sf, by_gateway, by_the_shape_after_sf }