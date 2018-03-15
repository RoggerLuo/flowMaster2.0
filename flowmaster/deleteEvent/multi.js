export default function({
    selectionTitle,
    selectionSonTitle,
    selectionGrandSonTitle,
    selectionFatherTitle,
    selection,
    that
}) {
    const incomings = selection[0].incoming
    /* 会签、会签分支 */
    /* 如果是会签节点，则把后面的线和分支节点删掉 */
    if (selectionTitle == "Multi user task") {
        if (selectionGrandSonTitle == 'Exclusive gateway') {
            that.editDeleteCounterPart(selection[0].outgoing[0].outgoing)
        }
        if (selectionSonTitle == 'Sequence flow') {
            that.editDeleteCounterPart(selection[0].outgoing)
        }
    }

    /* 如果是会签中间的连线，则把前后两个节点删掉 */
    if (selectionTitle == "Sequence flow") {
        if (selectionFatherTitle == "Multi user task") {
            /* 在上一个node是Multi的基础上，下一个如果是Exclusive gateway就删掉它 */
            if (selectionSonTitle == 'Exclusive gateway') {
                that.editDeleteCounterPart(selection[0].outgoing)
            }
            that.editDeleteCounterPart(incomings)
            global.globalLockForMultiWarning = false
            return 'stop'
        }
    }

    /* 如果是会签分支，则把后面的线和分支节点删掉 */
    if (fm.multi.is.gateway(selection[0])) {
        that.editDeleteCounterPart(selection[0].incoming[0].incoming)
    }
}
