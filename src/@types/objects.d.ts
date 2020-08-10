export type coords = { x: number; y: number }

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isBrush: boolean
  isEraser: boolean
  isFreehand: boolean
  isClear: boolean
  isEyedropper: boolean
  lineWidth: number
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
  text: string
  contrastLight: string
  contrastDark: string
}

export type colorDefs = {
  solidColor: string
  colorStops: string[]
}

export type positionParams = {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}
