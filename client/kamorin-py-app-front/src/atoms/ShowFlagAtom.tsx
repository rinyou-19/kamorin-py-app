import { atom } from "recoil"
import ShowFlag from "../types/ShowFlag"

export const ShowFlagState = atom<ShowFlag []>({
  key: "showFlag",
  default: [
    { confirm: false, userEntry: false },
  ]
})