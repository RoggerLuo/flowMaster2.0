export default function(canvas){
    window.reduxStore.getState().endpoint.repo.forEach((el) => {
        let currentElement = canvas.getChildShapeByResourceId(el.id)
        if (el.id && !currentElement) return
        let jsonArray = []
        el.data.forEach((el, index) => {
            switch (el.cate) {
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
        currentElement.setProperty('deliverToUsers', jsonArray)
    })
}
