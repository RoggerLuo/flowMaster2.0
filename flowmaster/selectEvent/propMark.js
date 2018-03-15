export default function(shape) {
    let name = shape && fm.getTitle(shape) || false

    if(fm.multi.is.gateway(shape)){ //.isMultiGateway
        // giveMarkToMultiBranch(shape)
        window.setPropertyAdvance({ key: 'name', value: '会签分支' }, shape)
        window.setPropertyAdvance({ key: 'classify', value: 'countersign' }, shape)
    }

    if(name == 'Manual task'){
        window.setPropertyAdvance({ key: 'name', value: '人工节点' }, shape)
        window.setPropertyAdvance({ key: 'classify', value: 'manual' }, shape)
    }

}