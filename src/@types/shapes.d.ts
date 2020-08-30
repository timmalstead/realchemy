import { currentTool, solidOrGrad, toolbarReducerTypes } from "./literals"

//colors

export interface colorStop {
  position: number
  color: string
}

export interface colorPack {
  main: string
  dark: string
  light: string
}

export interface colorDefs {
  solidColor: string
  colorStops: colorStop[]
}

//position

export interface coords {
  x: number
  y: number
}

export interface positionParams {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}

//toolbar

export interface toolbarStateAction {
  type: toolbarReducerTypes
}

export interface toolbarState {
  X_REFLECT: boolean
  Y_REFLECT: boolean
  BRUSH: boolean
  ERASER: boolean
  FREEHAND: boolean
  IDROPPER: boolean
  CLEAR: boolean
  LINE_WIDTH: boolean
}

//tools

export interface toolDefinitionTypes {
  name: string
  reducerType: toolbarReducerTypes
  options: any //for now
  svg(color: string): SVGElement | string // or string for now
}

export interface drawingOptions {
  reflectX: boolean
  reflectY: boolean
  isClear: boolean
  lineWidth: number
  currentTool: currentTool
  solidOrGrad: solidOrGrad
  solidColor: string
  colorStops: colorStop[]
}
