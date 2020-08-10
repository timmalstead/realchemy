import { drawingOptions } from "../@types/objects"
import { grad } from "./toolTypes"
import colorTheme from "./colors"

const { solidColor, colorStops } = colorTheme

const defOpts: drawingOptions = localStorage.savedToolOptions
  ? JSON.parse(localStorage.savedToolOptions)
  : {
      reflectX: false,
      reflectY: true,
      isBrush: false,
      isEraser: false,
      isFreehand: true,
      isClear: false,
      isEyedropper: false,
      lineWidth: 10,
      solidOrGrad: grad,
      solidColor,
      colorStops,
    }

export default defOpts
