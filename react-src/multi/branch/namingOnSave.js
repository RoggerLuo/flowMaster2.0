export default function(sf) {
    if (sf.properties['oryx-name'] == "  会签不通过") {
        window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${!CBPass}" }, sf)
    } 
    if (sf.properties['oryx-name'] == "  会签通过") {
        window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${CBPass}" }, sf)
    }
}