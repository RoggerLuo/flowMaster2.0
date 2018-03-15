global.fm = global.fm || {}

fm.previousShape = {}
fm.previousShape.is = (title, shape) => {
    shape = shape ? shape : fm.currentSelectedShape
    if (!shape) return false
    if (!shape.incoming) return false
    const previousShapeSf = shape.incoming[0]
    if (previousShapeSf) {
        const previousShape = previousShapeSf.incoming[0]
        if (title == 'multi') {
            if (previousShape && fm.multi.is.gateway(previousShape)) {
                return true
            }
        } else {
            if (previousShape && fm.getTitle(previousShape) == title) {
                return true
            }
        }
    }
    return false
}

