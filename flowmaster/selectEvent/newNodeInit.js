export default function(shape) {
    let name = fm.getTitle(shape)
    rdx.put('temp', 'touch') 
    
    switch(name){
        case 'User task':
            rdx.put('usertask', 'touch') 
            break
        
        case 'Sequence flow':
            rdx.put('sf', 'touch')                                    

            if (fm.multi.is.sf(shape)){
                break
            }                
            if (fm.manual.is.sf(shape)){
                break
            }
            if (fm.branch.is(shape)){
                rdx.put('branch', 'touch')  
                // rdx.put('sf', 'touch')                                    
                break
            }
            // rdx.put('sf', 'touch')                                    
            break

        case 'Subflow':
            reduxStore.dispatch({ type: 'subflow/newNodeInit' })
            break
    }


    if (name == 'Circulation task') rdx.dispatch({type: 'circulation/newNodeInit'})

    if (name == 'Multi user task') {
        rdx.dispatch({
            type: 'multi/newNodeInit',
            init() {
                window.quickAddItem('ExclusiveGateway')
            }
        })
    }

    if (name == 'Manual task') {
        rdx.dispatch({
            type: 'manual/newNodeInit',
            init() {
                // window.setPropertyAdvance({ key: 'classify', value: 'manual' }, shape)
                window.quickAddItem('ExclusiveGateway')
            }
        })
    }
}


