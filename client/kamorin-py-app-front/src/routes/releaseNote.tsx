import { useNavigate } from 'react-router-dom'

function ReleaseNote() {
  const navigate = useNavigate()

  // ログイン画面へ
  const openLogin = () => {
    navigate('/')
  }

  return (
    <div>
      <div className="w-full">
        <h1 className="mt-4 flex justify-center text-3xl">リリースノート</h1>
        <ul>
          <li>・2023/02/18 ver0.0 開発中</li>
        </ul>
        <div className="flex justify-center mt-2 mb-2 sm:mt-4 sm:mb-4">
          <p
            className="cursor-pointer text-sky-500 text-sm sm:text-base"
            onClick={openLogin}
          >
            ログイン画面へ
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReleaseNote
