import { InquiryDto, LabelShape, LabelTexture } from "type";

import { Input } from "modules/Input";
import { SelectOneOfTwoBtn } from "modules/SelectOneOfTwoBtn";
import { TextArea } from "modules/TextArea";
import _ from 'lodash'

export function LabelType({
  inquiry
}:{
  inquiry: InquiryDto
}) {

  return (
    <div>
      <div className="mt-2 ml-2">
      <span className="subtitle">메인 라벨</span>
        <div >
        <span className="tag">texture</span>
          <SelectOneOfTwoBtn 
            item1={{
              selected: inquiry.labelType.mainLabel.texture === LabelTexture.Weaving,
              text: LabelTexture.Weaving,
              onClick: () => {}
            }}
            item2={{
              selected: inquiry.labelType.mainLabel.texture === LabelTexture.Silk,
              text: LabelTexture.Silk,
              onClick: () => {}
            }}
        />
        </div>
        <div>
        <span className="tag"> shape</span>
          <SelectOneOfTwoBtn
            item1={{
              selected: inquiry.labelType.mainLabel.shape === LabelShape.DoubleFold,
              text: LabelShape.DoubleFold,
              onClick: () => {}
            }}
            item2={{
              selected: inquiry.labelType.mainLabel.shape === LabelShape.HalfFold,
              text: LabelShape.HalfFold,
              onClick: () => {}
            }}
          />
        </div>
      </div>
      <div className="mt-4 ml-2">
      <span className="subtitle">케어 라벨</span>
        <div>
          <Input 
            tag="Texture"
            value={inquiry.labelType.careLabel.texture}
            readonly
          />
        </div>
        <div>
          <TextArea 
            tag="Position"
            value={inquiry.labelType.careLabel.position}
            readonly
          />
        </div>
      </div>
      <div className="mt-4 ml-2">
        <span className="subtitle">포인트 라벨</span>
        <div>
          <span className="tag">texture</span>
          <SelectOneOfTwoBtn 
            item1={{
              selected: inquiry.labelType.pointLabel.texture === LabelTexture.Weaving,
              text: LabelTexture.Weaving,
              onClick: () => {}
            }}
            item2={{
              selected: inquiry.labelType.pointLabel.texture === LabelTexture.Silk,
              text:LabelTexture.Silk,
              onClick:() => {}
            }}
          />
        </div>
        <div>
          <TextArea 
            tag="Background"
            value={inquiry.labelType.pointLabel.background}
            readonly
          />
        </div>
      </div>
    </div>
  );
}