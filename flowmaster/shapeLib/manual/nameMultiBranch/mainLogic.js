import autoJudge from './autoJudge'

global.fm = global.fm || {}

export function naming_multiBranch_usingGateway(selectedShape) { //这个selectedShape是"Exclusive gateway"
    //总共就两根线，都判断一次好了
    const sf = selectedShape.outgoing[0] || false
    if (!sf) return true
    if (!sf.properties.conditionsequenceflow) autoJudge(sf, selectedShape) //如果第一根线没有设置过
    //另一根线
    const sf2 = selectedShape.outgoing[1] || false //接着判断第二根线
    if (!sf2) return true
    if (!sf2.properties.conditionsequenceflow) autoJudge(sf2, selectedShape)
}

export function naming_multiBranch_usingSF(selectedShape) {
    const theShape = selectedShape.incoming[0]
    naming_multiBranch_usingGateway(theShape)
}
export function naming_multiBranch_usingElementAfterSF(selectedShape) {
    /* 如果选中的是multi的sequence flow后面的那个元素 */
    if (selectedShape.incoming[0]) {
        const incoming1 = selectedShape.incoming[0]
        if (incoming1.incoming[0] && incoming1.incoming[0]._stencil._jsonStencil.title == 'Exclusive gateway') {
            const incoming2 = incoming1.incoming[0]
            if (incoming2.incoming[0] && incoming2.incoming[0].incoming[0] &&
                incoming2.incoming[0].incoming[0]._stencil._jsonStencil.title == 'Multi user task') {

                const sf = selectedShape.incoming[0]
                if (sf.properties.conditionsequenceflow) return true
                const branchNode = sf.incoming && sf.incoming[0] || false
                autoJudge(sf, branchNode)
                return true
            }
        }
    }
    return false
}