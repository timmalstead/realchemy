import { coords } from "../../@types/objects"

const drawingLoop = (
  context: CanvasRenderingContext2D,
  start: coords,
  points: coords[],
  lineWidth: number
): void => {
  points.push(start)

  const firstPoint: coords = points[0]

  context.beginPath()
  context.arc(firstPoint.x, firstPoint.y, 0, 0, Math.PI * 2)
  context.closePath()

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

  context.quadraticCurveTo(
    points[points.length - 2].x,
    points[points.length - 2].y,
    points[points.length - 1].x,
    points[points.length - 1].y
  )
}

export default drawingLoop
