import rolesJsonSpeller from './rolesJsonSpeller'

export default function() {
    rdx.getState().multi.repo.forEach((repo) => {
        let shape = fm.getShapeById(repo.id)
        if (!shape) return

        let jsonArray = []
        repo.data.forEach((group) => {
            let innerArray = []

            innerArray = rolesJsonSpeller(innerArray, group, shape)

            jsonArray.push(innerArray)
        })
        shape.setProperty('reduxData', repo)

        shape.setProperty('multiinstance_parties', jsonArray)
        shape.setProperty('multiinstance_type', "parallel")
        shape.setProperty('multiinstance_variable', "per")
        shape.setProperty('usertaskassignment', { "assignment": { "candidateOwners": [{ "value": "${per}" }] } })
    })
}