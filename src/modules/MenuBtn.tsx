export const MenuBtn = ({
  text,
  onClick,
}:{
  text: string,
  onClick: () => void
}) => {
  return (
    <li 
      className="w-48 mb-5 cursor-pointer"
      onClick={onClick}
      >
        {text}
    </li>
  )
}