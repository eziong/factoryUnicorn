import { InquiryDto } from "type";
import { LabelQuantity } from "./LabelQuantity";
import { LabelRequirement } from "./LabelRequirement";
import { LabelSize } from "./LabelSize";
import { LabelType } from "./LabelType";

export function DesignView({
  inquiry
}:{
  inquiry: InquiryDto
}) {

  return (
    <div className="flex flex-col">
      <div className="flex place-content-around">
        <div className="">
          <span className="title">라벨 타입</span>
          <LabelType inquiry={inquiry}/>
        </div>
        <div className="">
          <span className="title">라벨 수량 및 크기</span>
          <div className="ml-2">
            <LabelSize inquiry={inquiry}/>
            <LabelQuantity inquiry={inquiry}/>
            <LabelRequirement inquiry={inquiry}/>
          </div>
        </div>
      </div>
    </div>
  );
}