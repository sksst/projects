import * as types from './mutation-types'
export const updateDemoPosition = function ({commit}, top) {
  commit({type: types.UPDATE_DEMO_POSITION, top: top})
}
