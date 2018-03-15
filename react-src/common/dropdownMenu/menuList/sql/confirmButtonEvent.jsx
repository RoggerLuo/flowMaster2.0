const isConditionsCheckOk = (conditions) => {
    if(
        conditions.some(el => {
            if(!el.columnName){
                window.showAlert(`未设置列名`)
                return true
            }
            if(!el.variableName.value){
                window.showAlert(`列${el.columnName}的变量未选择`)
                return true
            }
        })
    ){
        return false        
    }
    return true
}

export default function(cb){//groupInd
    
    return (groupInd) => () => {

        const sqlState = rdx.getState().sql
        
        if(!sqlState.sql){
            //不通过内容提示
            window.showAlert(`SQL语句不能为空`)
            return false
        }
        if(!sqlState.dataSource.value){
            //不通过内容提示
            window.showAlert(`未选择数据源`)
            return false            
        }

        let conditions
        if(sqlState.checked){

            if(!isConditionsCheckOk(sqlState.conditions)){ //不通过内容提示
                return false 
            } 
            
            conditions = sqlState.conditions.map(el => {
                return {
                    columnName:el.columnName, //不要加value因为这是字符串，这是 input text
                    columnType:el.columnType.value,
                    expression:el.expression.value,
                    variableName:el.variableName.value,
                    variableType:el.variableType.value
                }
            })
            
        }else{
            conditions = []
        }
        const currentDataSourceRef = {
            "dataSourceId": sqlState.dataSource.value,
            "sql": sqlState.sql,
            conditions,
            leave:groupInd
        }
        const item = {
            cate:'fromDb',
            sql:sqlState.sql,
            currentDataSourceRef,
            sqlState,
            leave:groupInd
        }
        cb(item)
        rdx.dispatch({type:'sql/renew'})
        return true
    }
}
