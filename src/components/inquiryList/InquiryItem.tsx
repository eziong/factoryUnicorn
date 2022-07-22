import { InquiryDto } from "type";
import moment from 'moment'
import { useNavigate } from "react-router-dom";

export function InquiryItem({
  inquiry,
  index,
}:{
  inquiry: InquiryDto,
  index: number,
}) {
  const navigate = useNavigate()
  return (
    <tr style={{backgroundColor: index%2 ? 'rgba(256,0,0,0.03)' : 'rgba(0,0,256,0.03)'}}>
      <td className="text-center border-2">
        {index + 1}
      </td>
      <td className="text-center border-2">
        {/* created at */}
        {moment(inquiry.createdAt).format('YYYY/MM/DD HH:mm')}
      </td>
      <td className="text-center border-2">
        {/* ID */}
        {inquiry.uid}
      </td>
      <td className="text-center border-2">
        {/* phone number */}
        {inquiry.phone}
      </td>
      <td className="text-center border-2">
        {/* route to detail */}
        <div 
          className="cursor-pointer"
          onClick={() => navigate(`inquiry`,{state:{inquiry}})}>
          see
        </div>
      </td>
    </tr>
  );
}