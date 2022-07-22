import { LabelShape, LabelTexture } from "type";

import { Input } from "modules/Input";
import { SelectOneOfTwoBtn } from "modules/SelectOneOfTwoBtn";
import { TextArea } from "modules/TextArea";
import _ from 'lodash'
import { labelOrderState } from "recoil/order";
import { useRecoilState } from "recoil";

export function LabelType() {
  const [labelOrder, setLabelOrder] = useRecoilState(labelOrderState)

  return (
    <div>
      <div className="mt-2 ml-2">
      <span className="subtitle">메인 라벨</span>
        <div >
        <span className="tag">texture</span>
          <SelectOneOfTwoBtn 
            item1={{
              selected: labelOrder.labelType.mainLabel.texture === LabelTexture.Weaving,
              text: LabelTexture.Weaving,
              onClick: () => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.mainLabel.texture = LabelTexture.Weaving
                  return _labelOrder
                })
              }
            }}
            item2={{
              selected: labelOrder.labelType.mainLabel.texture === LabelTexture.Silk,
              text: LabelTexture.Silk,
              onClick: () => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.mainLabel.texture = LabelTexture.Silk
                  return _labelOrder
                })
              }
            }}
        />
        </div>
        <div>
        <span className="tag"> shape</span>
          <SelectOneOfTwoBtn
            item1={{
              selected: labelOrder.labelType.mainLabel.shape === LabelShape.DoubleFold,
              text: LabelShape.DoubleFold,
              onClick: () => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.mainLabel.shape = LabelShape.DoubleFold
                  return _labelOrder
                })
              }
            }}
            item2={{
              selected: labelOrder.labelType.mainLabel.shape === LabelShape.HalfFold,
              text: LabelShape.HalfFold,
              onClick: () => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.mainLabel.shape = LabelShape.HalfFold
                  return _labelOrder
                })
              }
            }}
          />
        </div>
      </div>
      <div className="mt-4 ml-2">
      <span className="subtitle">케어 라벨</span>
        <div>
          <Input 
            tag="Texture"
            value={labelOrder.labelType.careLabel.texture}
            onChange={(e) => {
              setLabelOrder(prev => {
                const _labelOrder = _.cloneDeep(prev)
                _labelOrder.labelType.careLabel.texture = e.target.value
                return _labelOrder
              })
            }}
            placeholder='실크 라벨 한 종류'
          />
        </div>
        <div>
          <TextArea 
            tag="Position"
            value={labelOrder.labelType.careLabel.position}
            onChange={(e) => {
              setLabelOrder(prev => {
                const _labelOrder = _.cloneDeep(prev)
                _labelOrder.labelType.careLabel.position = e.target.value
                return _labelOrder
              })
            }}
            placeholder='설명 (ex, 라벨 상단에 부착해주세요.)'
          />
        </div>
      </div>
      <div className="mt-4 ml-2">
        <span className="subtitle">포인트 라벨</span>
        <div>
          <span className="tag">texture</span>
          <SelectOneOfTwoBtn 
            item1={{
              selected: labelOrder.labelType.pointLabel.texture === LabelTexture.Weaving,
              text: LabelTexture.Weaving,
              onClick: () => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.pointLabel.texture = LabelTexture.Weaving
                  return _labelOrder
                })
              }
            }}
            item2={{
              selected: labelOrder.labelType.pointLabel.texture === LabelTexture.Silk,
              text:LabelTexture.Silk,
              onClick:() => {
                setLabelOrder(prev => {
                  const _labelOrder = _.cloneDeep(prev)
                  _labelOrder.labelType.pointLabel.texture = LabelTexture.Silk
                  return _labelOrder
                })
              }
            }}
          />
        </div>
        <div>
          <TextArea 
            tag="Background"
            value={labelOrder.labelType.pointLabel.background}
            onChange={(e) => {
              setLabelOrder(prev => {
                const _labelOrder = _.cloneDeep(prev)
                _labelOrder.labelType.pointLabel.background = e.target.value
                return _labelOrder
              })
            }}
            placeholder='설명 (ex, 분홍색 포인트 라벨 부탁드려요.)'
          />
        </div>
      </div>
    </div>
  );
}