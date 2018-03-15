export default ({ selectionTitle, incomings, selection, that }) => {
    // 不同删除顺序，outgoings是不同的，之前获取的值，现在这个节点可能被删除
    const outgoings = selection[0].outgoing
    //如果不是sf，就把这个节点的前后两个节点删掉
    if (selectionTitle == "Sequence flow") {} else {
        incomings && that.editDeleteCounterPart(incomings)
        outgoings && that.editDeleteCounterPart(outgoings)
    }
}