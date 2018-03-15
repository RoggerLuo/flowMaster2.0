import reduceWrap from './reduceWrap'
import transformer from './transformer'
import connect2redux from './connect2redux'
import i18nPut from './i18nPut'
import switchShape from './switchShape'
export { reduceWrap, transformer, connect2redux, i18nPut }
global.rdx = global.rdx || {}
rdx.tools = {}
rdx.tools.switchShape = switchShape