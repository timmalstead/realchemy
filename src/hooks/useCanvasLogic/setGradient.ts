import { colorStop, coords } from "../../@types/objects"

const setGradient = (
  canvasOffsetLeft: number,
  canvasOffsetTop: number,
  end: coords,
  context: CanvasRenderingContext2D,
  colorStops: colorStop[]
): CanvasGradient => {
  const gradient: CanvasGradient = context.createLinearGradient(
    canvasOffsetTop,
    canvasOffsetLeft,
    end.x,
    end.y
  )

  colorStops.forEach((colorStop: colorStop): void => {
    gradient.addColorStop(colorStop.position, colorStop.color)
  })

  return gradient
}

export default setGradient
