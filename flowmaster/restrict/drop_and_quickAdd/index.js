'use strict'
// import './everyMove'
// import startevent from './startevent'
import usertask from './usertask'
// import circulation from './circulation'
import inclusive from './inclusive'
import {multiBranch_ByGateway,select_multi} from './multi'
// import manual from './manual'

export default function(option) {
    const shape = option.connectedShape 
    const title = shape && fm.getTitle(shape) || 'canvas'
    switch(title){
        // case "Circulation task":
        //     return circulation(shape)

        case "Exclusive gateway":
            return multiBranch_ByGateway(shape)
        // case 'Multi user task':
        //     return select_multi(shape)

        // case 'Start event':
        //     return startevent(shape)
        case 'User task':
            return usertask(shape)
        // case 'Manual task':
            // return manual(shape)
        case 'Sequence flow':
            // debugger
            return
        case 'Inclusive gateway':
            return inclusive(shape)
    }
    return true
}
