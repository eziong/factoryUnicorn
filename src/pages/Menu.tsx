import { Clear, Menu as MenuIcon } from "@mui/icons-material"

import { MenuBtn } from "modules/MenuBtn"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { useState } from "react"
import { userState } from "recoil/user"

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const user = useRecoilValue(userState)

  return (
    <>
      <div 
        className={`menu-background ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >

      </div>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <div 
          className="absolute w-8 h-8 cursor-pointer menu top-6 left-52 z-[10]" 
          onClick={() => setIsMenuOpen(prev => !prev)}
         >
            {
              isMenuOpen
              ? (<Clear />)
              : (<MenuIcon />)
            }
        </div>
        <div className={`mt-20 ml-10 ${isMenuOpen ? '' : 'hidden'}`}>
          {
            user?.phone && (
              <>
                <MenuBtn 
                  text="문의하기"
                  onClick={() => {
                    setIsMenuOpen(false)
                    navigate('/customer')
                  }}
                />
                <MenuBtn 
                  text="나의 견적 보기"
                  onClick={() => {
                    setIsMenuOpen(false)
                    navigate('/customer/myInquiries')
                  }}
                  />
              </>
            )
          }
          <MenuBtn 
            text="전체 견적 보기"
            onClick={() => {
              setIsMenuOpen(false)
              navigate('/company')
            }}
            />
        </div>
      </div>
    </>
    
  )
}