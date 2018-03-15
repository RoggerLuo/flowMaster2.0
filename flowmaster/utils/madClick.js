fm.lastShapeUpdateTime = 0 
fm.madClickCounter = 0

const threshold = 15

fm.madClick = () => {
    const now = Date.parse(new Date())
    if((now - fm.lastShapeUpdateTime) < 100){
        fm.madClickCounter += 1
        if(fm.madClickCounter <= threshold) {
            return false
        }else{
            return true
        }
    } else {
        fm.lastShapeUpdateTime = now
        fm.madClickCounter = 0
        return false
    } 
    return true

}
