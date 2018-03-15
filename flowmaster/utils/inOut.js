global.fm = global.fm || {}


fm.getIncoming = (shape) => {
    if(!shape) return false
    const incomings = shape.incoming
    if (incomings) {
        const incoming = incomings[0]
        if (incoming) return incoming
    }
    return false
}
fm.getIncomingX2 = (shape) => fm.getIncoming(fm.getIncoming(shape))
fm.getIncomingX3 = (shape) => fm.getIncomingX2(fm.getIncoming(shape))
fm.getOutgoing = (shape) => {
    if(!shape) return false
    const outgoings = shape.outgoing
    if (outgoings) {
        const outgoing = outgoings[0]
        if (outgoing) return outgoing
    }
    return false
}
fm.getOutgoingX2 = (shape) => fm.getOutgoing(fm.getOutgoing(shape))
fm.getOutgoingX3 = (shape) => fm.getOutgoingX2(fm.getOutgoing(shape))