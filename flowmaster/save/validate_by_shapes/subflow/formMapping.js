export default function(repoObj) {
    const formMapping = repoObj.leftFields
    // 过滤掉 main form里没选的， 因为有必填和非必填
    .filter(el=>{
        if (el.type != "sub_form") {
            const expression = repoObj.mainRight && repoObj.mainRight[el.name] && repoObj.mainRight[el.name].name || false
            return !!expression
        }
        return true
    })
    // 过滤掉 sub form里没选的， 因为有必填和非必填
    .filter(el=>{
        if (el.type == "sub_form") {
            if(!repoObj.subRights[el.name]) return false
        }
        return true
    })
    // 开始map
    .map((el, ind) => {
        if (el.type != "sub_form") {
            
            const returnObj = {
                left: el.name,
                right: repoObj.mainRight && repoObj.mainRight[el.name] && repoObj.mainRight[el.name].name || '',
                type: el.type,
                subForms: []
            }
            return returnObj

        }

        if (el.type == "sub_form") {
            const returnObj = {
                left: el.name,
                right: repoObj.subRights[el.name].rightFormId,
                type: el.type,
                subForms: []
            }

            const optionMap = repoObj.subRights[el.name].map
            const subForms = []
            for (let v in optionMap) {
                if (optionMap.hasOwnProperty(v)) {
                    if(!optionMap[v].value) continue
                    subForms.push({
                        left: v,
                        right: optionMap[v].value,
                        type: optionMap[v].type || '',
                        subForms: []
                    })
                }
            }
            returnObj.subForms = subForms
            return returnObj
        }
    })
    return formMapping
}