import { DesignView } from "components/designView";
import { InquiryDto } from "type";
import { useLocation } from "react-router-dom";

export function InquiryDetail() {
  const {state:{ inquiry }} = useLocation() as {state:{inquiry:InquiryDto}}

  return (
    <div className="inquiry-container">
      <div className="mt-8 mb-1">
        <span className="text-2xl font-bold ">문의서 </span> <span className="mb-2 font-normal">({inquiry.uid})</span>
      </div>
      <div className="mb-4 text-sm text-right mr-14">
        <span>연락처: {inquiry.phone}</span>
      </div>
      <DesignView inquiry={inquiry} />
    </div>
  );
}