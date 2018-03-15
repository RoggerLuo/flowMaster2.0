import { naming_multiBranch_usingGateway } from './nameMultiBranch/mainLogic' //handleMultiBranch

export default function() {
    window.windowCanvas.getChildNodes()
        .filter((el) => el._stencil._jsonStencil.title == "Multi user task")
        .forEach((el) => {
            const selectedShape = el.outgoing[0] && el.outgoing[0].outgoing[0] || false
            selectedShape && naming_multiBranch_usingGateway(selectedShape)
        })
}