import { InquiryList } from "components/inquiryList";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/user";

export function MyInquiries() {
  const user = useRecoilValue(userState)
  return (
    <div>
      <div className="mt-4 mb-4 ml-4 ">
        <span className="text-2xl title">나의 문의내역</span>
      </div>
      <InquiryList phone={user?.phone} />
    </div>
  );
}