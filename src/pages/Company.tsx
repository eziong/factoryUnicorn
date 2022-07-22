import { InquiryList } from "components/inquiryList";

export function Company() {
  
  return (
    <div>
      <div className="mt-4 mb-4 ml-4 ">
        <span className="text-2xl title">전체 문의내역</span>
      </div>
      <InquiryList />
    </div>
  );
}