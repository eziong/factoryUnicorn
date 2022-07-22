import { CSSProperties } from "react";

export function TextArea({
  value,
  onChange,
  placeholder = '',
  tag,
  readonly = false,
  style = {}
}:{
  value: string,
  onChange?: (e:any) => void,
  placeholder?: string,
  tag?: string,
  readonly?: boolean,
  style?: CSSProperties
}) {
  return (
    <div>
      <div className="tag">
        {tag}
      </div>
      <textarea
        className="general-textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        style={{...style}}
      />
    </div>
  );
}