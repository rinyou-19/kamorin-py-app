import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { ConfirmDialog } from './confirmDialog'
import { ShowUserEntryContext } from './providers/showFlagProvider'

export const UserEntryDialog = () => {
   // 確認ダイアログ表示用変数
  const {isShow, setIsShow} = useContext(ShowUserEntryContext)

  const test = (e: any) => {
    console.log(1)
    console.log(isShow)
    e.preventDefault()
    setIsShow(!isShow)
    console.log(2)
    console.log(isShow)
    
  }

  return (
    <div>
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as="div" onClose={test} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    ユーザー登録
                  </Dialog.Title>
                  <form className="w-full bg-white shadow-md rounded p-4">
                    <div className="flex justify-center mt-3 mb-1 sm:mb-3 text-xxs sm:text-base md:text-xl">
                      <div className="w-1/3">
                        <label
                          htmlFor="userName"
                          className="block inline-block text-gray-700 px2 sm:px-4 py-1 sm:py-2"
                        >
                          ユーザー名*
                        </label>
                      </div>
                      <div className="w-2/3">
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          className="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding p-1 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          v-model="data.entryUserName"
                          placeholder="山田 太郎"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-1 sm:mb-3 text-xxs sm:text-base md:text-xl">
                      <div className="w-1/3">
                        <label
                          htmlFor="userPassword"
                          className="form-label inline-block text-gray-700 px2 sm:px-4 py-1 sm:py-2"
                        >
                          パスワード*
                        </label>
                      </div>
                      <div className="w-2/3">
                        <input
                          type="password"
                          id="userPassword"
                          name="userPassword"
                          className="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding p-1 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          v-model="data.entryPassword"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-1 sm:mb-3 text-xxs sm:text-base md:text-xl">
                      <div className="w-1/3">
                        <label
                          htmlFor="confirmPassword"
                          className="form-labelinline-block text-gray-700 px2 sm:px-4 py-1 sm:py-2"
                        >
                          パスワード確認*
                        </label>
                      </div>
                      <div className="w-2/3">
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding p-1 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          v-model="data.entryConfirmPassword"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center  mb-1 sm:mb-3 text-xs sm:text-base md:text-lg">
                      <p className="text-red-500 px2 sm:px-4 py-1 sm:py-2">
                        ※パスワードは8文字以上24文字以内、数値と大文字・小文字アルファベットを含んでください
                      </p>
                    </div>
                    <div className="flex justify-center mb-1 sm:mb-3 text-xxs sm:text-base md:text-xl">
                      <div className="w-1/3">
                        <label
                          htmlFor="mailAddress"
                          className="form-label inline-block text-gray-700 px2 sm:px-4 py-1 sm:py-2"
                        >
                          メールアドレス*
                        </label>
                      </div>
                      <div className="w-2/3">
                        <input
                          type="email"
                          id="mailAddress"
                          name="mailAddress"
                          className="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding p-1 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          v-model="data.entryEMail"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center text-xs sm:text-base mt-1">
                      <button
                        className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                        onClick={test}
                      >
                        ユーザー登録
                      </button>
                      <button
                        className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 ml-4"
                        onClick={test}
                      >
                        閉じる
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ConfirmDialog />
    </div>
  )
}
