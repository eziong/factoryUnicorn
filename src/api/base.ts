import axios from "axios"

export const baseURL:string = 'https://asia-northeast3-fu-webapp.cloudfunctions.net/api/codingTest'
export const accessKey:string = 'eziong'

export const baseUrl = axios.create({
  baseURL,
})