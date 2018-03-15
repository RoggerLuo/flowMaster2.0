// import './isMultiGateway'
import {
    naming_multiBranch_usingSF,
    naming_multiBranch_usingGateway,
    naming_multiBranch_usingElementAfterSF
} from './mainLogic'

export default function($scope, event) { //selectedShape不是那条线本身，而是前面和后面的
    const selectedShape = event.elements.first()
    if (!selectedShape) return false

    /* 如果选中的是那根线 */
    if (global.isMultiSequenceflow(selectedShape)) naming_multiBranch_usingSF(selectedShape)

    /* 如果是采用手动连线的方式, 则选中的节点是会签分支节点 */
    if (global.isMultiGateway(selectedShape)) naming_multiBranch_usingGateway(selectedShape)

    /* 如果是采用拖动的方式, 则选中的节点是连线后的节点 */
    naming_multiBranch_usingElementAfterSF(selectedShape)
}