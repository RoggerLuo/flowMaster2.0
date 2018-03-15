import rolesJsonSpeller from './rolesJsonSpeller'
export default function(canvas) {
    rdx.getState().circulation.repo.forEach((repo) => {
        let shape = fm.getNodeById(repo.id)
        if (!shape) return
        const rolesjson = rolesJsonSpeller([], repo.data)
        // debugger
        let value = {
            "fields": [{
                "name": "circulationUsers",
                "implementation": "circulationUsers",
                "stringValue": JSON.stringify(rolesjson),
                "expression": "",
                "string": ""
            }]
        }
        shape.setProperty('reduxData', repo)
        shape.setProperty('objData', rolesjson)
        shape.setProperty('servicetaskexpression', "")
        shape.setProperty('servicetaskfields', value)
        shape.setProperty('servicetaskdelegateexpression', "${circulationServiceTask}")
        shape.setProperty('classify', "Circulation")
        if (repo.previousNodeSpecified) {
            shape.setProperty('previousNodeSpecified', true)
        }
        
        if(!fm.approve.is_display_prevShapeSpecify_for_circulation(shape,repo)){
            shape.setProperty('previousNodeSpecified', false)
        }
    })
}