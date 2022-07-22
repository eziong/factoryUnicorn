import { LabelShape, LabelTexture } from "type"

export const convertKeyword = (word:string | number) => {
  switch (word){
    case LabelTexture.Silk: {
      return '실크'
    }
    case LabelTexture.Weaving: {
      return '직조'
    }
    case LabelShape.DoubleFold: {
      return '양접이'
    }
    case LabelShape.HalfFold: {
      return '반접이'
    }
    default: {
      return word
    }
  }
}