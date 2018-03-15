import dataInit from './dataInit'
import save from './save'

global.fm = global.fm || {}
fm.stencilAdapter = {}
fm.stencilAdapter.dataInit = dataInit
fm.stencilAdapter.save = save