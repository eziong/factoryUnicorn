import { useEffect, useState } from "react";

import { Input } from "modules/Input";
import _ from "lodash";
import { labelOrderState } from "recoil/order";
import { useRecoilState } from "recoil";

export function LabelSize() {
  const [labelOrder, setLabelOrder] = useRecoilState(labelOrderState)
  const [focused, setFocused] = useState<boolean>(false)

  useEffect(() => {
    if(focused) return
    return setLabelOrder(prev => {
      const _labelOrder = _.cloneDeep(prev)
      _labelOrder.labelSize.width = Number(_labelOrder.labelSize.width)
      _labelOrder.labelSize.height = Number(_labelOrder.labelSize.height)
      return _labelOrder
    })
  },[focused])
  
  return (
    <div>
      <Input
        tag="가로 (cm)"
        type='number'
        value={labelOrder.labelSize.width}
        onChange={(e) => {
          setLabelOrder(prev => {
            const _labelOrder = _.cloneDeep(prev)
            _labelOrder.labelSize.width = e.target.value > 0 ? e.target.value : 1
            return _labelOrder
          })
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Input 
        tag="세로 (cm)"
        type='number'
        value={labelOrder.labelSize.height}
        onChange={(e) => {
          setLabelOrder(prev => {
            const _labelOrder = _.cloneDeep(prev)
            _labelOrder.labelSize.height = e.target.value > 0 ? e.target.value : 1
            return _labelOrder
          })
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}