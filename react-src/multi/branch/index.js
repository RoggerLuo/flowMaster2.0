import naming_after_excecuted from './naming_after_excecuted'
import namingOnSave from './namingOnSave'

const branch = {}

branch.naming_after_excecuted = naming_after_excecuted
branch.namingOnSave = namingOnSave

export default branch



// branch.refreshName = () => {
//     fm.getNodes()
//         .filter((el) => fm.getTitle(el) == "Multi user task")
//         .forEach((el) => {
//             const shape = el.outgoing[0] && el.outgoing[0].outgoing[0] || false
//             shape && naming.by_gateway(shape)
//         })
// }

// branch.naming = function($scope, event) { //selectedShape不是那条线本身，而是前面和后面的
//     const shape = event.elements.first()
//     if (!shape) return false

//     /* 如果选中的是那根线 */
//     if (fm.multi.is.sf(shape)) naming.by_sf(shape)

//     /* 如果是采用手动连线的方式, 则选中的节点是会签分支节点 */
//     if (fm.multi.is.gateway(shape)) naming.by_gateway(shape)

//     /* 如果是采用拖动的方式, 则选中的节点是连线后的节点 */
//     naming.by_the_shape_after_sf(shape)
// }
