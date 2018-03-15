import { toJS, fromJS, List, Map } from 'immutable'

export default (type, item) => {
    if (type) { // 传入type的话，就自动校验, 针对数据结构复杂的情况
        switch (type) {
            case 'array':
                if (!(item instanceof Array)) {
                    throw new  Error(`传入reduce数据类型错误，应该是${type}，却不是${type}`)
                }
                break

            case 'string':
            case 'object':
            case 'boolean':
                if (typeof(item) != type) {
                    throw new  Error(`传入reduce数据类型错误，应该是${type}，却不是${type}`)
                }
                break
        }
    }
}
