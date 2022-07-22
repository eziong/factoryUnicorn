import { Input } from "modules/Input";
import { InquiryDto } from "type";
import _ from "lodash";

export function LabelSize({
  inquiry
}:{
  inquiry: InquiryDto
}) {
  return (
    <div>
      <Input
        tag="가로 (cm)"
        type='number'
        value={inquiry.labelSize.width}
        readonly
      />
      <Input 
        tag="세로 (cm)"
        type='number'
        value={inquiry.labelSize.height}
        readonly
      />
    </div>
  );
}