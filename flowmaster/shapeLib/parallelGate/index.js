import isInGates from './isInGates'
import isPaired from './isPaired'
import isCorrectlyLinked from './isCorrectlyLinked'
global.fm = global.fm || {}
fm.parallelGate = {}
fm.parallelGate.isPaired = isPaired
fm.parallelGate.isCorrectlyLinked = isCorrectlyLinked

fm.parallelGate.isReadyForSave = () => {
    let isOk = true
    if(!isPaired()) isOk = false
    if(!isCorrectlyLinked()) isOk = false
    return isOk
}
fm.parallelGate.isShapeIn = isInGates
// fm.parallelGate.everyMoveCheck = () => {
