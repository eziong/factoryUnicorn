import { TextArea } from "modules/TextArea";
import _ from "lodash";
import { labelOrderState } from "recoil/order";
import { useRecoilState } from "recoil";
import { useState } from "react";

export function LabelRequirement() {
  const [labelOrder, setLabelOrder] = useRecoilState(labelOrderState)

  return (
    <div>
      <TextArea 
        tag="요청사항"
        value={labelOrder.requirement}
        onChange={(e) => {
          setLabelOrder(prev => {
            const _labelOrder = _.cloneDeep(prev)
            _labelOrder.requirement = e.target.value
            return _labelOrder
          })
        }}
        placeholder='설명 (ex, 예쁘게 만들어주세요.)'
      />
    </div>
  );
}