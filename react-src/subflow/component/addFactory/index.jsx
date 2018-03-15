import CompAdd from './CompAdd'

export default (currentRepo, setting) => () => {
    if (fm.isSpecificVersionEditMode) return
    window.callShadow()
    rdx.dispatch({
        content: CompAdd,
        confirm: () => {
            setting()
            return true
        },
        onCancel() {
            rdx.put('subflow', 'replace', ['subProcess'], {}, 'object')
        },
        type: 'callPopup',
        height: '75%',
        title: 'button.option9',
        width: '640px',
        style: { margin: '10px 60px' },
        outerStyle: { overflow: 'auto' }
    })
}