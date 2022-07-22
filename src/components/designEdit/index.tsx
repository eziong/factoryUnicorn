import { LabelQuantity } from "./LabelQuantity";
import { LabelRequirement } from "./LabelRequirement";
import { LabelSize } from "./LabelSize";
import { LabelType } from "./LabelType";
import { Submit } from "modules/Submit";
import { labelOrderState } from "recoil/order";
import { saveInquiry } from "api/inquiry";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useScroll } from "hooks/useScroll";
import { userState } from "recoil/user";

export function DesignEdit() {
  const labelOrder = useRecoilValue(labelOrderState)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()
  const {isBottom} = useScroll()

  return (
    <div className="flex flex-col">
      <div className="flex place-content-around">
        <div className="">
          <span className="title">라벨 타입</span>
          <LabelType />
        </div>
        <div className="">
          <span className="title">라벨 수량 및 크기</span>
          <div className="ml-2">
            <LabelSize />
            <LabelQuantity />
            <LabelRequirement />
          </div>
        </div>
      </div>
      <div 
        className="sticky bottom-0 flex items-center justify-center w-full h-20 transition-100ms"
        style={{backgroundColor:isBottom?'rgba(0,0,0,0':'white'}}
      >
        <Submit 
          text="디자인 견적 요청"
          onSubmit={async() => {
            if(!user) return
            const save = await saveInquiry({userInfo:user, inquiryInfo:{...labelOrder}})
            if(save.status === 200){
              if(save.data.status === '저장 성공') return navigate('/customer/myInquiries')
              else return alert('요청 실패')
            }else {
              return alert('통신 오류')
            }
          }}
          style={{width: 300, height: 50, lineHeight:'50px'}}
        />
      </div>
    </div>
  );
}