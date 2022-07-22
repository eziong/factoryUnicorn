import { CSSProperties } from "react";

export function Submit({
  text,
  onSubmit,
  style = {},
}:{
  text:string,
  onSubmit:() => void,
  style?: CSSProperties
}) {
  return (
    <div 
      className="button"
      onClick={onSubmit}
      style={style}  
    >
      {text}
    </div>
  );
}