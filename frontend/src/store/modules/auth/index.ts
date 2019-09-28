import { RootState, Auth } from "~/types/auth";
import { MutationTree, ActionTree, GetterTree } from "vuex";
import api from "~/services/api"

export const state = (): RootState => ({
  auth: {
      username: '',
      isLoggedIn: false
  }
})

export const getters: GetterTree<RootState, RootState> = {
    username: (state: RootState) => {
      return state.auth.username;
    },
    isLoggedIn: (state: RootState) => {
        return state.auth.isLoggedIn;
      },
  }

export const mutations: MutationTree<RootState> = {
  setUser(state: RootState, auth: Auth): void {
    state.auth.username = auth.username
    state.auth.isLoggedIn = auth.isLoggedIn
  },
  clearUser(state: RootState): void {
    state.auth.username = ''
    state.auth.isLoggedIn = false
  }
}

export const actions: ActionTree<RootState, RootState> = {
    /**
     * ログイン
     */
    login (context, payload) {
        return api.post('/auth/jwt/create/', {
          'username': payload.username,
          'password': payload.password
        })
          .then(response => {
            // 認証用トークンをlocalStorageに保存
            localStorage.setItem('access', response.data.access)
            // ユーザー情報を取得してstoreのユーザー情報を更新
            return context.dispatch('reload')
              .then(user => user)
          })
    },
    /**
     * ログアウト
     */
    logout (context) {
      // 認証用トークンをlocalStorageから削除
      localStorage.removeItem('access')
      // storeのユーザー情報をクリア
      context.commit('clearUser')
    },
    /**
     * ユーザー情報更新
     */
    reload (context) {
      return api.get('/auth/users/me/')
        .then(response => {
          const user = response.data
          // storeのユーザー情報を更新
          context.commit('setUser', { user: user })
          return user
        })
    }
}
