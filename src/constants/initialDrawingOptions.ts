import { drawingOptions } from "../@types/objects"
import { brush, grad } from "./toolTypes"
import colorTheme from "./colors"

const { solidColor, colorStops } = colorTheme

const initOpts: drawingOptions = localStorage.savedToolOptions
  ? JSON.parse(localStorage.savedToolOptions)
  : {
      reflectX: false,
      reflectY: true,
      isClear: false,
      lineWidth: 10,
      currentTool: brush,
      solidOrGrad: grad,
      solidColor,
      colorStops,
    }

export default initOpts
