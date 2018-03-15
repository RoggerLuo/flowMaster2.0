export default (selection,that) => {    
    const selectionTitle = selection[0] && (selection[0]._stencil._jsonStencil.title) || ''
    const selectionSonTitle = selection[0].outgoing[0] && selection[0].outgoing[0]._stencil._jsonStencil.title || ''
    const selectionGrandSonTitle = selection[0].outgoing[0] &&
        selection[0].outgoing[0].outgoing[0] &&
        (selection[0].outgoing[0].outgoing[0]._stencil._jsonStencil.title) || ''
    const incomings = selection[0].incoming
    const outgoings = selection[0].outgoing
    const selectionFatherTitle = incomings && incomings[0] && incomings[0]._stencil._jsonStencil.title || ''
    const el = {
        selectionTitle,
        selectionSonTitle,
        selectionGrandSonTitle,
        selectionFatherTitle,
        selection,
        that
    }
    return el
}