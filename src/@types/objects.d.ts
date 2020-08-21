export type colorStop = { position: number; color: string }

export type coords = { x: number; y: number }

export type currentTool = "brush" | "eraser" | "freehand" | "eyedropper"

export type solidOrGrad = "solid" | "grad"

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

export type componentOption = {
  name: string
  options: any //for now
  svg(color: string): SVGElement | string
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

export type supportedEnvironments = "Browser" | "Electron"

export type positionParams = {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}
