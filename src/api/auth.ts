import { accessKey, baseUrl } from './base'

import { UserInfo } from 'type'

export const registerUser = ({
  userInfo,
}:{
  userInfo: UserInfo,
}) => baseUrl.post('/saveUser',{
  userInfo,
  accessKey,
})

export const login = ({
  phone
}:UserInfo) => baseUrl.get(`/getUser?accessKey=${accessKey}&phone=${phone}`)