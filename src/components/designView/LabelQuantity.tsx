import { Input } from "modules/Input";
import { InquiryDto } from "type";
import _ from "lodash";

export function LabelQuantity({
  inquiry
}:{
  inquiry: InquiryDto
}) {
  
  return (
    <div>
      <Input
        tag="수량 (기본 1000장, 500장 단위)"
        type='number'
        value={inquiry.quantity}
        readonly
        step={500}
      />
    </div>
  );
}