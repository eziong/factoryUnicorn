import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { userState } from "recoil/user"

export const useDefaultNavigation = () =>{
  const navigate = useNavigate()
  const user = useRecoilValue(userState)
  useEffect(() => {
    if(user?.phone) return
    navigate('/company') 
  },[user?.phone])
}