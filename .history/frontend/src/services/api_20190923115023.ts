import axios from 'axios'
import {authState, authMutations, authActions} from '~/store'

const api = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 共通前処理
api.interceptors.request.use(function (config) {
  // メッセージをクリア
//   store.dispatch('message/clearMessages')
  // 認証用トークンがあればリクエストヘッダに乗せる
  const token : string | null = localStorage.getItem('access')
  if (token) {
    config.headers.Authorization = 'JWT ' + token
    return config
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 共通エラー処理
api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log('error.response=', error.response)
  const status : number = error.response ? error.response.status : 500

  // エラーの内容に応じてstoreのメッセージを更新
  let message : string
  if (status === 400) {
    // バリデーションNG
    let messages : string[] = [].concat.apply([], Object.values(error.response.data))
    store.dispatch('message/setWarningMessages', { messages: messages })

  } else if (status === 401) {
    // 認証エラー
    const token : string | null = localStorage.getItem('access')
    if (token != null) {
      message = 'ログイン有効期限切れ'
    } else {
      message = '認証エラー'
    }
    store.dispatch('auth/logout')
    store.dispatch('message/setErrorMessage', { message: message })

  } else if (status === 403) {
    // 権限エラー
    message = '権限エラーです。'
    store.dispatch('message/setErrorMessage', { message: message })

  } else {
    // その他のエラー
    message = '想定外のエラーです。'
    store.dispatch('message/setErrorMessage', { message: message })
  }
  return Promise.reject(error)
})

export default api