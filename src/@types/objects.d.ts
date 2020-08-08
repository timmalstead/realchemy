export type coords = { x: number; y: number }

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isBrush: boolean
  isFreehand: boolean
  isGradient: boolean
  lineWidth: number
  lineCap: "butt" | "round" | "square"
  miterLimit: number
  colorOne: string
  colorTwo: string
  colorStops: string[]
}

export type colorPack = {
  main: string
  dark: string
  text: string
  contrastLight: string
  contrastDark: string
}

export type positionParams = {
  isDragging: boolean
  origin: coords
  translation: coords
  lastTranslation: coords
}
