import { UserInfo, UserType } from "type";

import { atom } from "recoil";

export const userState = atom<UserInfo | null>({
  key: 'userState',
  default: null,
})