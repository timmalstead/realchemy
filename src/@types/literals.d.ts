export type currentTool = "brush" | "eraser" | "freehand" | "eyedropper"

export type solidOrGrad = "solid" | "grad"

export type supportedEnvironments = "Browser" | "Electron"

export type toolbarReducerTypes =
  | "REFLECT_X"
  | "REFLECT_Y"
  | "BRUSH"
  | "ERASER"
  | "FREEHAND"
  | "EYEDROPPER"
  | "CLEAR"
  | "LINE_WIDTH"
