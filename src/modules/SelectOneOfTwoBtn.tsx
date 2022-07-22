import { SelectBtnObject } from "type";
import { convertKeyword } from "utils";

export function SelectOneOfTwoBtn({
  item1,
  item2,
}:{
  item1: SelectBtnObject,
  item2: SelectBtnObject,
}) {
  return (
    <div className="flex">
      <div 
        className={`select-box-item mr-2 ${item1.selected ? 'selected' : ''}`}
        onClick={item1.onClick}
      >
        {convertKeyword(item1.text)}
      </div>
      <div 
        className={`select-box-item ${item2.selected ? 'selected' : ''}`}
        onClick={item2.onClick}
      >
        {convertKeyword(item2.text)}
      </div>
    </div>
  );
}