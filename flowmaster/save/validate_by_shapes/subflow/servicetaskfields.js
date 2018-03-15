
export default function(repo) {
    const subProcessSet = {
        subProcessSet: [repo.subProcess]
    }
    
    let stringValue = "Wait"
    if(!repo.isWaiting) stringValue = "Wake"
    let value = {
        "fields": [{
                "name": "subProcessSet",
                "implementation": "subProcessSet",
                "stringValue": JSON.stringify(subProcessSet),
                "expression": "",
                "string": ""
            },
            {
                "name": "waitExpression",
                "implementation": "waitExpression",
                stringValue,
                "expression": "",
                "string": ""
            }
        ]
    }
    return value
}