import { Inquiry, LabelShape, LabelTexture } from "type";

import { atom } from "recoil";

export const labelOrderState = atom<Inquiry>({
  key: 'labelOrderState',
  default: {
    labelType: {
      mainLabel:{
        texture: LabelTexture.Weaving,
        shape: LabelShape.DoubleFold,
      },
      careLabel:{
        texture: '',
        position: '',
      },
      pointLabel:{
        texture: LabelTexture.Weaving,
        background: ''
      }
    },
    labelSize: {
      width: 1,
      height: 1,
    },
    quantity: 1000,
    requirement: '',
  }
})