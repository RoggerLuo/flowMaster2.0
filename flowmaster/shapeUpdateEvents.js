import propertyRouter from './propertyRouter'

fm.before_selection_change = ($scope, event) => { 
    
    if(fm.madClick()) return
    
    fm.titleRename && fm.titleRename()
    propertyRouter($scope, event)
} 
fm.after_selection_change = ($scope,event) => {}

fm.after_cmd_executed = () => {     
    
    if(fm.madClick()) return
    if(fm.isSpecificVersionEditMode) fm.undo()

    if(!fm.parallelGate.isCorrectlyLinked()) fm.undo()    
    fm.restrict.after_executed()
    fm.multi.branch.naming_after_excecuted()

} 
