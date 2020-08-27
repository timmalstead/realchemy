import { solidOrGrad, currentTool } from "../../@types/literals"
import { coords, colorStop } from "../../@types/objects"
import setGradient from "./setGradient"
import { freehand, grad } from "../../constants/drawingOptionsTypes"

const setContextOptions = (
  canvas: HTMLCanvasElement,
  lineWidth: number,
  solidOrGrad: solidOrGrad,
  currentTool: currentTool,
  solidColor: string,
  canvasOffsetLeft: number,
  canvasOffsetTop: number,
  end: coords,
  colorStops: colorStop[]
): CanvasRenderingContext2D => {
  const context = canvas.getContext("2d")
  context.lineWidth = lineWidth
  context.scale(devicePixelRatio, devicePixelRatio)

  if (solidOrGrad === grad) {
    const gradient: CanvasGradient = setGradient(
      canvasOffsetLeft,
      canvasOffsetTop,
      end,
      context,
      colorStops
    )
    context.strokeStyle = currentTool === freehand ? "#FFFFFF00" : gradient
    context.fillStyle = currentTool === freehand ? gradient : "#FFFFFF00"
  } else {
    context.strokeStyle = currentTool === freehand ? "#FFFFFF00" : solidColor
    context.fillStyle = currentTool === freehand ? solidColor : "#FFFFFF00"
  }

  return context
}

export default setContextOptions
