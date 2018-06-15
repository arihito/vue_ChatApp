import { SET_MESSAGE, SET_MESSAGES, GET_CHANNELS } from './mutation-types'

export default {
  [SET_MESSAGE](state, message) {
    state.messages.push(message)
  },
  [SET_MESSAGES](state, message) {
    state.messages = message
  },
  [GET_CHANNELS](state, channels) {
    state.channels = channels
  }
}