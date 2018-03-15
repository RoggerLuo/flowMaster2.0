const generator = (el) => ({ "value": el.value, "cate": el.cate, "text": el.text, "id": el.value })
export default function(jsonArray, data, currentElement) {
    let dataSourceRefs = []
    data.forEach((el, index) => {
        switch (el.cate) {
            case "callBack":
                jsonArray = [{
                    "value": `callBack(${el.value})`,
                    "cate": "callBack",
                    "text": "从外部开发获取",
                    "id": "1",
                    "value2": el.value
                }]
                break

            case "form":
                jsonArray.push({
                    value: `form(${el.value})`,
                    value2: el.value,
                    cate: el.cate,
                    text: el.text,
                    id: index
                })
                break

            case "customizeRole":
                jsonArray.push({
                    value: `customizeRole(${el.value})`,
                    value2: el.value,
                    cate: el.cate,
                    text: el.text,
                    id: index //el.value 
                })
                break
                
            case "historicTask":
                jsonArray.push( {
                    "value": `historicTask(${el.value})`,
                    "cate": "historicTask",
                    "text": el.text,
                    "id": el.value,
                    "value2": el.value
                })
                /*generator(el))*/
                break

            case "EXTERNAL":
                jsonArray = [{
                    "value": "external()",
                    "cate": "EXTERNAL",
                    "text": "二次开发",
                    "id": "1",
                    "value2": "external"
                }]
                break
                
            case "fromDb":
                jsonArray = [{
                    "value": `fromDb(${el.leave})`,
                    "cate": "fromDb",
                    "text": "从DB中获取",
                    "id": el.leave,
                    sql: el.sql,
                    sqlState: el.sqlState
                }]
                dataSourceRefs.push(el.currentDataSourceRef)
                currentElement.setProperty('dataSourceRefs', dataSourceRefs)
                break

            case "boss":
                jsonArray.push({ "value": "boss" + "(" + el.value + ")", cate: el.cate, text: el.text, id: el.value })
                break
            case "role":
                jsonArray.push({ "value": "role" + "(" + el.value2 + ":" + el.value + ")", cate: el.cate, text: el.text, id: el.value, value2: el.value2 })
                break
            case "EMPLOYEE":
                jsonArray.push({ "value": "user" + "(" + el.value + ")", cate: el.cate, text: el.text, id: el.value })
                break
            case "ORG":
            case "DEPT":
                jsonArray.push({ "value": "org" + "(" + el.value + ")", cate: el.cate, text: el.text, id: el.value })
                break
        }
    })
    return jsonArray
}