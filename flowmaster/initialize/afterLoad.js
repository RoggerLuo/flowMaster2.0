global.fm = global.fm || {}
export default function($scope) {
    /* 画布加载以后，把sequenceflow设置为true */
    rdx.getState().branchNode.repo.forEach((el) => {
        let shape = fm.getShapeById(el.choosed.value)
        // window.setPropertyAdvance({ key: 'defaultflow', value: 'true' }, shape)
        shape.setProperty('defaultflow', 'true')

    })

    /* 保存事件deactive，自动保存一次 */
    const saveEvent = {
        type: KISBPM.eventBus.EVENT_TYPE_MODEL_SAVED,
        model: '',
        modelId: window.getQueryString("pid"),
        eventType: 'update-model'
    }
    KISBPM.eventBus.dispatch(KISBPM.eventBus.EVENT_TYPE_MODEL_SAVED, saveEvent)
    rdx.store.dispatch({ type: 'saveDeactive' })



      

}