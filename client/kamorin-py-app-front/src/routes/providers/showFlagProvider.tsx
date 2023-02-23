import { createContext } from 'react'

// ユーザー登録制御用コンテキスト
export const ShowUserEntryContext = createContext({
  isShow: false,
  setIsShow: (isShow: boolean) => {},
})

// ユーザー登録制御用コンテキスト
export const ShowConfrimContext = createContext({
  isShowConfirm: false,
  setIsShowConfirm: (isShowConfirm: boolean) => { return !isShowConfirm },
})
