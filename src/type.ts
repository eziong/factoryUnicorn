export enum UserType {
  Individual = 'individual',
  Company = 'company',
}

export enum SelectKey {
  MainLabelTexture,
  MainLabelShape,
  CareLabelTexture,
  CareLabelPosition,
  PointLabelTexture,
  PointLabelBackground,
  LabelSize,
  Quantity,
  Requirement,
}

export type UserInfo = {
  phone: string,
}

export type SelectBtnObject = {
  text: string,
  selected: boolean,
  onClick: () => void
}

export type Inquiry = {
  labelType: {
    mainLabel:{
      texture: LabelTexture,
      shape: LabelShape,
    },
    careLabel:{
      texture: string,
      position: string,
    },
    pointLabel:{
      texture: LabelTexture,
      background: string
    }
  },
  labelSize: {
    width: number,
    height: number,
  },
  quantity: number,
  requirement: string,
}

export type InquiryDto = Inquiry & UserInfo & {
  uid: string,
  createdAt: Date,
}

export enum LabelTexture {
  Weaving = 'weaving',
  Silk = 'silk',
}

export enum LabelShape {
  DoubleFold = 'twoFold',
  HalfFold = 'halfFold'
}