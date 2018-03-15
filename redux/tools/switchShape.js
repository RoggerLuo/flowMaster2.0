
export default function(selectedShape) {
    var nextId = selectedShape.resourceId
    var nextStencilTitle = selectedShape._stencil._jsonStencil.title
    global.reduxStore.dispatch({ type: 'switchElement', nextId, nextStencilTitle }) //prevId
}
