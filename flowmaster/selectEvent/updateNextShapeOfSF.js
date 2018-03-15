
export default function(selectedShape) {
    if (selectedShape._stencil._jsonStencil.title != 'Sequence flow') return
    if (selectedShape.incoming[0]) { //&& selectedShape.incoming[0]._stencil._jsonStencil.title
        window.reduxStore.dispatch({
            type: 'nextElOfSF',
            name: selectedShape.outgoing[0] && selectedShape.outgoing[0].properties['oryx-name'] || "暂无"
        })
    }

}
