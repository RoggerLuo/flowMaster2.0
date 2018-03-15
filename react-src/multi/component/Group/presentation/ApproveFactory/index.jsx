import React,{createClass} from 'react'
import defaultContainer from './defaultContainer'
import dbRoleContainer from './dbRoleContainer'

export default function({edit,del,add,clear}){
    return {
        DbRoleContainer:dbRoleContainer({edit,clear}),
        DefaultContainer:defaultContainer(del)
    }
}
