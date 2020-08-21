import { coords } from "../../@types/objects"

const drawingLoop = (
  context: CanvasRenderingContext2D,
  points: coords[],
  lineWidth: number
): void => {
  const firstPoint: coords = points[0]

  if (points.length > 10) {
    context.beginPath()
    context.arc(firstPoint.x, firstPoint.y, lineWidth / 2, 0, Math.PI * 2)
    context.closePath()
  }

  context.beginPath()
  context.moveTo(firstPoint.x, firstPoint.y)

  const loopLength: number = points.length
  if (loopLength)
    for (let i = 1; i < loopLength - 2; i++) {
      const bezierX: number = points[i].x
      const bezierY: number = points[i].y
      const endX: number = (bezierX + points[i].x) / 2
      const endY: number = (bezierY + points[i].y) / 2
      context.quadraticCurveTo(bezierX, bezierY, endX, endY)
    }
}

export default drawingLoop
