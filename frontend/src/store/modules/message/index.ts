import { RootState, Message } from "~/types/message";
import { MutationTree, ActionTree, GetterTree } from "vuex";

export const state = (): RootState => ({
  message: {
      error: '',
      warnings: [],
      info: ''
  }
})

export const getters: GetterTree<RootState, RootState> = {
    error: (state: RootState) => {
      return state.message.error;
    },
    warnings: (state: RootState) => {
        return state.message.warnings;
    },
    info: (state: RootState) => {
        return state.message.info;
      },
  }

export const mutations: MutationTree<RootState> = {
  setMessage(state: RootState, message: Message): void {
    if(message.error){
        state.message.error = message.error
    }
    if(message.warnings){
        state.message.warnings = message.warnings
    }
    if(message.info){
        state.message.info = message.info
    }
  },
  clearMessage(state: RootState): void {
    state.message.error = ''
    state.message.warnings = []
    state.message.info = ''
  }
}

export const actions: ActionTree<RootState, RootState> = {
    /**
     * エラーメッセージ表示
     */
    setErrorMessage  (context, payload) {
        context.commit('clearMessage')
        context.commit('setMessage', { 'error': payload.message })
    },
    /**
     * 警告表示
     */
    setWarningMessage  (context, payload) {
        context.commit('clearMessage')
        context.commit('setMessage', { 'warnings': payload.message })
    },
    /**
     * インフォメーションメッセージ表示
     */
    setInfoMessage  (context, payload) {
        context.commit('clearMessage')
        context.commit('setMessage', { 'info': payload.message })
    },
    /**
     * 全メッセージ削除
     */
    clearMessages   (context) {
        context.commit('clearMessage')
    },
}
