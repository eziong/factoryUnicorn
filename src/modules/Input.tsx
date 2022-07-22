import { CSSProperties } from "react";

export function Input({
  value,
  onChange,
  placeholder = '',
  tag,
  type = 'text',
  readonly = false,
  step=1,
  inputStyle = {},
  tagStyle = {},
  onFocus = () => {},
  onBlur = () => {},
}:{
  value: string | number,
  onChange?: (e:any) => void,
  placeholder?: string,
  tag?: string,
  type?: 'text' | 'password' | 'number',
  readonly?: boolean,
  step?: number,
  inputStyle?: CSSProperties,
  tagStyle?: CSSProperties,
  onFocus?:() => void,
  onBlur?:() => void,
}) {
  return (
    <div>
      <div className="tag" style={{...tagStyle}}>
        {tag}
      </div>
      <input
        className="general-input"
        readOnly={readonly}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        type={type}
        step={step}
        style={{ ...inputStyle}}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}