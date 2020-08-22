import { currentTool, solidOrGrad } from "./literals"

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
  tabIndex: number
  options: any //for now
  svg(color: string): SVGElement | string // or string for now
  changeAction(prevState: drawingOptions): drawingOptions
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
