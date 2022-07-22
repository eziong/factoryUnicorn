import { useEffect, useState } from "react"

export const useScroll = () => {
  const [isTop, setIsTop] = useState<boolean>(false)
  const [isBottom, setIsBottom]= useState<boolean>(false)

  useEffect(() => {
    const onScroll = (e:any) => {
      setIsTop(window.screenY === 0)
      setIsBottom(window.innerHeight + window.scrollY + 10> document.body.scrollHeight)
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  },[])

  return {
    isTop,
    isBottom
  }
}