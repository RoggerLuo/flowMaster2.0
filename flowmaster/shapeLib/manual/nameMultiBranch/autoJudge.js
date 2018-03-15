export default function(sf, branchNode) {
    if (branchNode) {
        const hasSf2 = branchNode.outgoing.some(el => {
            if (el != sf) {
                const sf2 = el
                if (sf2.properties.conditionsequenceflow == "${CBPass}") {
                    window.setPropertyAdvance({ key: 'oryx-name', value: '  会签不通过' }, sf)
                    window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${!CBPass}" }, sf)
                } else {
                    window.setPropertyAdvance({ key: 'oryx-name', value: ' 会签通过' }, sf)
                    window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${CBPass}" }, sf)
                }
                return true
            }
        })
        if (!hasSf2) {
            window.setPropertyAdvance({ key: 'oryx-name', value: ' 会签通过' }, sf)
            window.setPropertyAdvance({ key: "conditionsequenceflow", value: "${CBPass}" }, sf)
        }
    }
}