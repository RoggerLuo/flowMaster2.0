import React, { createClass } from 'react'
import defaultContainer from './defaultContainer'
import dbRoleContainer from './dbRoleContainer'
import ExternalCallback from './ExternalCallback'
export default function(cate, data, { edit, del, add, clear }, index) {

    const ExternalCallbackComp = ExternalCallback({ add, clear })
    const DbRoleContainerComp = dbRoleContainer({ edit, add, clear })
    const DefaultContainerComp = defaultContainer(del)

    switch(cate){
        case 'externalCallback':
            return (<ExternalCallbackComp data={data} />)
        case 'fromDb':
            return (<DbRoleContainerComp data={data} index={index}/>)
        default:
            return (<DefaultContainerComp data={data}/>)
    }
}