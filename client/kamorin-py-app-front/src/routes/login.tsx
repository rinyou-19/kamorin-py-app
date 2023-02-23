import Axios from 'axios'
import { UserEntryDialog } from './userEntryDialog'
import { useState, useContext, createContext,  useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShowUserEntryContext } from './providers/showFlagProvider'


function Login() {
  const [isShow, setIsShow] = useState(false)
  // ユーザー名
  const [userName, setUserName] = useState('')
  // パスワード
  const [password, setPassword] = useState('')

  // react-router遷移用変数
  const navigate = useNavigate()

  // ユーザー登録ダイアログ制御用関数
  const openModal = (e: any) => {
    e.preventDefault()
    setIsShow(!isShow)
  }

  // ログインボタン押下時の処理
  const login = (e: any) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault()

    // 入力チェック
    if (userName === "" || password === "") {
      // ユーザー名かパスワードが入力されていない場合
      // 確認ダイアログを開く
      console.log('ダイアログに置き換える')
      return
    }

    // 入力チェックが問題なかった場合
    const parameter = {
      userName: userName,
      password: password,
    }

    // ログイン処理
    Axios.post('http://localhost:5000/login', parameter)
      .then((res) => {
        console.log('★')
        alert(res.data.result)
      })
      .catch((e) => {})
  }

  // リリースノートへ
  const openReleaseNote = () => {
    navigate('releaseNote')
  }

  return (
    <div>
      <div className="w-full">
        <h1 className="mt-4 flex justify-center text-2xl md:text-3xl">
          ログイン
        </h1>
        <div className="flex justify-center">
          <form className="w-5/6 md:w-2/3 lg:w-1/2 bg-white shadow-md rounded px-2 md:px-8 lg:px-16 pt-2 md:pt-4 lg:pt-6 md:pb-4 lg:pb-8 mt-4">
            <div className="flex justify-center mt-1 sm:mt-8 text-sm sm:text-xl">
              <label
                htmlFor="name"
                className="mb-2 md:ml-4 lg:ml-8 xl:ml-12 inline-block text-gray-700 w-1/4 md:w-1/3"
              >
                ユーザー名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="ml-1 md:ml-4 w-3/4 md:w-2/3 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-sm sm:text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="山田 太郎" value={userName} onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="flex justify-center mt-1 sm:mt-5 text-sm sm:text-xl">
              <label
                htmlFor="password"
                className="mb-2 md:ml-4 lg:ml-8 xl:ml-12 inline-block text-gray-700 w-1/4 md:w-1/3"
              >
                パスワード
              </label>
              <input
                type="password"
                id="password"
                name="password" value={password} onChange={(event) => setPassword(event.target.value)}
                className="ml-1 md:ml-4 w-3/4 md:w-2/3 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-sm sm:text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex justify-center mt-2 sm:mt-4 sm:mb-4">
              <button
                className="mt-3 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                onClick={login}
              >
                ログイン
              </button>
            </div>
            <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
              <p
                className="cursor-pointer text-sky-500 text-sm sm:text-base"
                onClick={openModal}
              >
                新規ユーザー登録はこちら
              </p>
            </div>
            <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
              <p
                className="cursor-pointer text-sky-500 text-sm sm:text-base"
                onClick={openReleaseNote}
              >
                リリースノートへ
              </p>
            </div>
            <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
              <p className="text-red-500 text-sm sm:text-base">
                ↑ご一読ください
              </p>
            </div>
          </form>
        </div>
      </div>
      <ShowUserEntryContext.Provider value={{isShow, setIsShow}}>
        <UserEntryDialog />
      </ShowUserEntryContext.Provider>
    </div>
  )
}

export default Login
