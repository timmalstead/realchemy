import { currentTool, solidOrGrad, toolbarReducerTypes } from "./literals"

export type colorStop = { position: number; color: string }

export type coords = { x: number; y: number }

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isClear: boolean
  lineWidth: number
  currentTool: currentTool
  solidOrGrad: solidOrGrad
  solidColor: string
  colorStops: colorStop[]
}

export type componentOption = {
  name: string
  reducerType: toolbarReducerTypes
  options: any //for now
  svg(color: string): SVGElement | string // or string for now
}

export type colorPack = {
  main: string
  dark: string
  light: string
}

export type colorDefs = {
  solidColor: string
  colorStops: colorStop[]
}

export type positionParams = {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}

export type toolbarStateAction = { type: toolbarReducerTypes }

export type toolbarState = {
  X_REFLECT: boolean
  Y_REFLECT: boolean
  BRUSH: boolean
  ERASER: boolean
  FREEHAND: boolean
  IDROPPER: boolean
  CLEAR: boolean
  LINE_WIDTH: boolean
}
