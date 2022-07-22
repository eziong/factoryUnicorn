import { DesignEdit } from "components/designEdit";
import { Submit } from "modules/Submit";
import { useDefaultNavigation } from "hooks/useDefaultNavigation";
import { useNavigate } from "react-router-dom";

export function Customer() {
  useDefaultNavigation()
  const navigate = useNavigate()

  return (
    <div className="inquiry-container">
      <div className="flex items-center justify-between h-20 text-2xl font-bold">
        <div>
          문의하기
        </div>
        <div className="mr-8">
          <Submit 
            text="X"
            onSubmit={() => {
              navigate('/company')
            }}
            style={{width: 34, height:34, lineHeight:'34px'}}
          />
        </div>
      </div>
      <DesignEdit />
    </div>
  );
}