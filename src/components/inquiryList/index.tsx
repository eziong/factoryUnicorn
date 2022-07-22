import { useEffect, useState } from "react"

import { InquiryDto } from "type"
import { InquiryItem } from "./InquiryItem"
import { getEntireInquiry } from "api/inquiry"

export const InquiryList = ({
  phone
}:{
  phone?:string
}) => {
  const [inquiries, setInquiries] = useState<InquiryDto[]>([])

  useEffect(() => {
    const fetchEntireInquiry = async ():Promise<InquiryDto[]> => {
      const data:{[key:string]:InquiryDto} = (await getEntireInquiry()).data
      return phone ? 
          Object.values(data ? data : {}).filter(inquiry => inquiry.phone === phone) :
          Object.values(data ? data : {})
    }
    fetchEntireInquiry()
    .then((data) => setInquiries(data))
  },[])

  return (
    <table className="mb-10">
      <thead className="border-4 ">
        <tr>
          <th className="w-16 border-2">
            번호
          </th>
          <th className="w-40 border-2">
            문의 날짜
          </th>
          <th className="border-2 w-60">
            ID
          </th>
          <th className="w-40 border-2">
            휴대폰 번호
          </th>
          <th className="w-24 border-2">
            상세보기
          </th>
        </tr>
      </thead>
      <tbody>
        {
          inquiries.map((inquiry, index) => (
            <InquiryItem 
              key={index}
              inquiry={inquiry}
              index={index}
            />
          ))
        }
      </tbody>
    </table>
  )
}