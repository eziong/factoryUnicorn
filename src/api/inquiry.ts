import { Inquiry, UserInfo } from 'type'
import { accessKey, baseUrl } from './base'

export const saveInquiry = ({
  userInfo,
  inquiryInfo,
}:{
  userInfo: UserInfo,
  inquiryInfo: Inquiry
}) => baseUrl.post('/saveInquiry',{
  userInfo:{phone: userInfo.phone},
  accessKey,
  inquiryInfo: {...inquiryInfo, phone:userInfo.phone, createdAt: new Date()},
})

export const getSingleInquiry = ({
  uid,
}:{
  uid:string
}) => baseUrl.get(`/getSingleInquiry?accessKey=${accessKey}&uid=${uid}`)

export const getEntireInquiry = (
  
) => baseUrl.get(`/getEntireInquiry?accessKey=${accessKey}`)