global.fm = global.fm || {}



// 从上而下 写回调
fm.incomingLooper = function(title,cb){
    return (shape)=>{
        if(fm.getTitle(fm.getIncoming(shape)) == title){
            cb(fm.getIncoming(shape)) // 注意要再往前一个，前一个shape是sf
        }
    }
}
fm.outgoingLooper = function(title,cb){
    return (shape)=>{
        if(fm.getTitle(fm.getOutgoing(shape)) == title){
            cb(fm.getOutgoing(shape)) // 注意要再往前一个，前一个shape是sf
        }
    }
}

