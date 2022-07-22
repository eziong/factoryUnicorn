import { Input, LogoBig, LogoSmall, Submit } from "modules";
import { login, registerUser } from "api/auth";
import { useEffect, useState } from "react";

import { Menu } from "pages/Menu";
import { useRecoilState } from "recoil";
import { userState } from "recoil/user";

export function Header() {
  const [phone, setPhone] = useState<string>('')
  const [user, setUser] = useRecoilState(userState)
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)

  const onSubmit = async() => {
    if(phone === '') return alert('fill the blank')
    if(!/(010)\d{3,4}\d{4}/.test(phone)) return alert('invalid phone number format')
    try{
      const _user = await login({phone})
      if(_user.data){
        setUser(_user.data)
      }else{
        await registerUser({userInfo:{ phone }})
        const _user = await login({phone})
        setUser(_user.data)
      }
    }catch{
      alert('something is wrong!\ntry again')
    }
  }

  useEffect(() => {
    const onResize = ()=> {
      setInnerWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[])

  return (
    <div>
      <Menu />
      <div className='fixed top-0 flex w-full h-20' style={{boxShadow:'0 1px 3px grey', backgroundColor:'white'}}>
        <div className="flex items-center justify-between w-full mx-auto">
          <div className={innerWidth > 696 ? 'ml-32' : 'ml-32'}>
            {
              innerWidth > 696
              ? (<LogoBig />)
              : (
                  innerWidth > 528
                  ? (<LogoSmall />)
                  : (null)
                )
            }
          </div>
          {
            user?.phone
            ? (
              <div className={`flex ${innerWidth > 696 ? 'mr-32' : 'mr-16'}`}>
                <div style={{lineHeight:'40px'}}>
                  {innerWidth > 696 ? '휴대폰 번호:' : ''} {user.phone}
                </div>
                <Submit 
                  text="로그아웃"
                  onSubmit={() => setUser(null)}
                  style={{marginLeft:15, width:72}}
                />
              </div>
            )
            :(
              <div className={`flex ${innerWidth > 696 ? 'mr-32' : 'mr-16'}`}>
                <Input 
                  tag="Phone number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder={'-제외하고 입력'}
                  tagStyle={{margin:0, padding:0}}
                />
                <Submit 
                  text="로그인"
                  onSubmit={onSubmit}
                  style={{marginLeft:15, width:72}}
                />
              </div>
            )
          }
        </div>
      </div>
      <div className="h-20"/>
    </div>
  );
}