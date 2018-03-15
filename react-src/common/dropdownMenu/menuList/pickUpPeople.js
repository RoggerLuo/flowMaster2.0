export default function(confirm) {
    return function() {
        const chooseCallback = (e) => {
            window.removeEventListener("message", chooseCallback, false)
            e.data.value.forEach((el) => {
                let item = {
                    text: el.name,
                    value: el.id,
                    cate: 'EMPLOYEE' //el.type
                }
                if(el.pickType == 'org') item.cate = 'ORG'
                confirm(item)
            })
            window.activeSave()
        }
        window.addEventListener('message', chooseCallback, false)
        let message = {
            type: "openSelectUserPanel",
            value: "",
            params: {
                pickerType: 'both', //'onlyPeople',
                title: '选择人员',
                orgId: window.getQueryString("rootOrgId")
            }
        }
        window.parent.postMessage(message, '*')
        return true
    }
}