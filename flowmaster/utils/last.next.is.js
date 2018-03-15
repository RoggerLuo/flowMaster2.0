global.fm = global.fm || {}
fm.last = {}
fm.last.is = (title, shape) => { // sf包括在其中，也算shape
    shape = shape ? shape : fm.currentSelectedShape
    if (!shape) return false
    if (!shape.incoming) return false
    const last = shape.incoming[0]
    if (last && fm.getTitle(last) == title) return true
    return false
}
fm.next = {}
fm.next.is = (title, shape) => {
    shape = shape ? shape : fm.currentSelectedShape
    if (!shape) return false
    if (!shape.outgoing) return false
    const next = shape.outgoing[0]
    if (next && fm.getTitle(next) == title) return true
    return false
}
