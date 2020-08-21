export type coords = { x: number; y: number }

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isClear: boolean
  lineWidth: number
  //currentTool : "brush" | "eraser" | "freehand" | "eyedropper"
  isBrush: boolean
  isEraser: boolean
  isFreehand: boolean
  isEyedropper: boolean
  solidOrGrad: "solid" | "grad"
  solidColor: string
  colorStops: string[]
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
  colorStops: string[]
}

export type supportedEnvironments = "Browser" | "Electron"

export type positionParams = {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}
