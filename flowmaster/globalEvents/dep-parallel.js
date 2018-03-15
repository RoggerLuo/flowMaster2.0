'use strict'

global.deleteNode = (selection, that) => {

    /* 会签、会签分支 */
    /* 如果是会签节点，则把后面的线和分支节点删掉 */
    if (selection[0] && (selection[0]._stencil._jsonStencil.title == "Multi user task")) {
        if (
            selection[0].outgoing[0].outgoing[0] &&
            (selection[0].outgoing[0].outgoing[0]._stencil._jsonStencil.title == 'Exclusive gateway')
        ) that.editDeleteCounterPart(selection[0].outgoing[0].outgoing)

        if (
            selection[0].outgoing[0] &&
            (selection[0].outgoing[0]._stencil._jsonStencil.title == 'Sequence flow')
        ) that.editDeleteCounterPart(selection[0].outgoing)
    }

    /* 如果是会签中间的连线，则把前后两个节点删掉 */
    if (selection[0] && (selection[0]._stencil._jsonStencil.title == "Sequence flow")) {
        var incomings = selection[0].incoming
        if (incomings && incomings[0] && incomings[0]._stencil._jsonStencil.title == "Multi user task") {
            /* 在上一个node是Multi的基础上，下一个如果是Exclusive gateway就删掉它 */
            if (
                selection[0].outgoing[0] &&
                (selection[0].outgoing[0]._stencil._jsonStencil.title == 'Exclusive gateway')
            ) {
                that.editDeleteCounterPart(selection[0].outgoing)
            }
            that.editDeleteCounterPart(incomings)
        }
        return 'stop'
    }
    /* 如果是会签分支，则把后面的线和分支节点删掉 */
    if (selection[0] && (selection[0]._stencil._jsonStencil.title == "Exclusive gateway")) {
        if (
            selection[0].incoming[0].incoming[0] &&
            (selection[0].incoming[0].incoming[0]._stencil._jsonStencil.title == 'Multi user task')
        ){
            that.editDeleteCounterPart(selection[0].incoming[0].incoming)
        } 
    }


    var incomings = selection[0].incoming
    var outgoings = selection[0].outgoing

    if (selection[0] && (selection[0]._stencil._jsonStencil.title == "Sequence flow")) {

    } else {
        incomings && that.editDeleteCounterPart(incomings)
        outgoings && that.editDeleteCounterPart(outgoings)
    }


}