import { InquiryDto } from "type";
import { TextArea } from "modules/TextArea";
import _ from "lodash";

export function LabelRequirement({
  inquiry
}:{
  inquiry: InquiryDto
}) {
  return (
    <div>
      <TextArea 
        tag="요청사항"
        value={inquiry.requirement}
        readonly
      />
    </div>
  );
}