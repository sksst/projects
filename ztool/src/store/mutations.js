import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.UPDATE_DEMO_POSITION](state, payload) {
    state.demoScrollTop = payload.top
  }
}

export default mutations
