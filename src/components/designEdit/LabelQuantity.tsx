import React, { useEffect, useState } from "react";

import { Input } from "modules/Input";
import _ from "lodash";
import { labelOrderState } from "recoil/order";
import { useRecoilState } from "recoil";

export function LabelQuantity() {
  const [labelOrder, setLabelOrder] = useRecoilState(labelOrderState)
  const [focused, setFocused] = useState<boolean>(false)

  useEffect(() => {
    if(focused) return
    if(labelOrder.quantity < 1000){
      return setLabelOrder(prev => {
              const _labelOrder = _.cloneDeep(prev)
              _labelOrder.quantity = 1000
              return _labelOrder
            })
    }
    if(labelOrder.quantity % 500 !== 0) {
      return setLabelOrder(prev => {
              const _labelOrder = _.cloneDeep(prev)
              _labelOrder.quantity = Number(labelOrder.quantity) + 500 - (labelOrder.quantity % 500)
              return _labelOrder
            })
    }
  },[focused])
  
  return (
    <div>
      <Input
        tag="수량 (기본 1000장, 500장 단위)"
        type='number'
        value={labelOrder.quantity}
        onChange={(e) => {
          setLabelOrder(prev => {
            const _labelOrder = _.cloneDeep(prev)
            _labelOrder.quantity = Number(e.target.value > 0 ? e.target.value : 0)
            return _labelOrder
          })
        }}
        step={500}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}