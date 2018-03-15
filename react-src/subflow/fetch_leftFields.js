const filterList = ['description','database_view','calculate']

 const markRequired_to_fields = (leftFields, nodes) => {
     let formLimits = false
     if (nodes) {
         const start = nodes.filter(el => el.nodeName == ' 开始')
         if (start) {
             formLimits = start[0]
         }
     }
     const rs = leftFields
         .map((el, ind) => {
             el.required = false
             
             if (formLimits) {

                formLimits.fields.forEach(form => {
                     if (form.fieldId == el.name) {
                        el.required = form.required
                        el.editable = form.editable
                     }
                 })
             }
             return el
         })
         .filter(el => filterList.indexOf(el.type) == -1)
         .filter(el => el.editable)
    return rs
 }

 const cb_fetch_leftFields = (leftFields,subProcess) => {
     // 添加required属性 和 edit属性
     fm.fetchFormLimits(
         subProcess.subProcDefKey,
         subProcess.versionId,
         (nodes) => {
             leftFields = markRequired_to_fields(leftFields, nodes)
             rdx.dispatch({ type: 'subflow/leftFields', leftFields })
         }
     )
 }
 const fetch_leftFields = (subProcess) => {
     fm.fetchFormComponents(subProcess.subProcDefKey, subProcess.versionId, function(data) {
         if (!data) return
         cb_fetch_leftFields(data.components,subProcess)
     })
 }

 export default fetch_leftFields

