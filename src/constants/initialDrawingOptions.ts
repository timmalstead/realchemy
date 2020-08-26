import { drawingOptions } from "../@types/objects"
import { brush, solid } from "./drawingOptionsTypes"
import colorTheme from "./colors"

const { solidColor, colorStops } = colorTheme

const initOpts: drawingOptions = localStorage.savedToolOptions
  ? JSON.parse(localStorage.savedToolOptions)
  : {
      reflectX: false,
      reflectY: false,
      isClear: false,
      lineWidth: 10,
      currentTool: brush,
      solidOrGrad: solid,
      solidColor,
      colorStops,
    }

export default initOpts
