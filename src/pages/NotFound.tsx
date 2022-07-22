import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/company')
    },1000)
  },[])

  return (
    <div>
      404 not found
      redirect to the other page...
    </div>
  );
}