import { useState, useEffect } from "react"
import { canvasLogic } from "../../@types/props"
import { coords, colorStop } from "../../@types/objects"
import {
  brush,
  eraser,
  freehand,
  grad,
  solid,
} from "../../constants/drawingOptionsTypes"

const useCanvasLogic = ({
  innerWidth,
  innerHeight,
  devicePixelRatio,
  toolOptions,
  canvasRef,
}: canvasLogic): void => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  useEffect((): void => {
    let mouseDown: boolean = false
    let [canvasOffsetLeft, canvasOffsetTop]: number[] = [0, 0]
    let start: coords
    let end: coords
    const points: coords[] = []

    const {
      reflectX,
      reflectY,
      isClear,
      lineWidth,
      currentTool,
      solidOrGrad,
      solidColor,
      colorStops,
    } = toolOptions

    const root: HTMLElement = document.getElementById("root")

    let tempCanvas: HTMLCanvasElement, tempContext: CanvasRenderingContext2D

    const handleMouseDown = ({ clientX, clientY }: MouseEvent): void => {
      if (context) {
        start = {
          x: clientX - canvasOffsetLeft,
          y: clientY - canvasOffsetTop,
        }

        end = start
        mouseDown = true

        if (root.children.length < 3) {
          tempCanvas = document.createElement("canvas")
          tempCanvas.id = "temp-canvas"
          root.appendChild(tempCanvas)
        } else tempCanvas = document.getElementById("temp-canvas")
        tempContext = tempCanvas.getContext("2d")
        tempCanvas.width = innerWidth
        tempCanvas.height = innerHeight

        if (currentTool === brush || currentTool === eraser)
          tempContext.lineWidth = lineWidth

        if (solidOrGrad === solid) {
          if (currentTool === brush || currentTool === eraser) {
            tempContext.strokeStyle = solidColor
            tempContext.fillStyle = "#FFFFFF00"
          } else if (currentTool === freehand) {
            tempContext.strokeStyle = "#FFFFFF00"
            tempContext.fillStyle = solidColor
          }
        }

        if (solidOrGrad === grad) {
          const gradient: CanvasGradient = context.createLinearGradient(
            canvasOffsetTop,
            canvasOffsetLeft,
            end.x,
            end.y
          )

          colorStops.forEach((colorStop: colorStop): void => {
            gradient.addColorStop(colorStop.position, colorStop.color)
          })

          if (currentTool === brush || currentTool === eraser) {
            tempContext.strokeStyle = gradient
            tempContext.fillStyle = "#FFFFFF00"
          } else if (currentTool === freehand) {
            tempContext.strokeStyle = "#FFFFFF00"
            tempContext.fillStyle = gradient
          }
        }
      }
    }

    const handleMouseMove = ({ clientX, clientY }: MouseEvent): void => {
      if (mouseDown && context && tempContext) {
        context.save()
        start = {
          x: end.x,
          y: end.y,
        }

        end = {
          x: clientX + canvasOffsetLeft,
          y: clientY + canvasOffsetTop,
        }

        points.push(start)

        const firstPoint: coords = points[0]

        tempContext.beginPath()
        tempContext.arc(firstPoint.x, firstPoint.y, 0, 0, Math.PI * 2)
        tempContext.closePath()

        tempContext.beginPath()
        tempContext.moveTo(firstPoint.x, firstPoint.y)

        const loopLength: number = points.length
        if (loopLength)
          for (let i = 1; i < loopLength - 2; i++) {
            const bezierX: number = points[i].x
            const bezierY: number = points[i].y
            const endX: number = (bezierX + points[i].x) / 2
            const endY: number = (bezierY + points[i].y) / 2
            tempContext.quadraticCurveTo(bezierX, bezierY, endX, endY)
          }

        if (currentTool === brush || currentTool === eraser)
          tempContext.stroke()
        else if (currentTool === freehand) tempContext.fill()
        tempContext.closePath()
        context.drawImage(tempCanvas, 0, 0)
        if (reflectX) {
          tempContext.transform(-1, 0, 0, 1, innerWidth, 0)
          context.drawImage(tempCanvas, 0, 0)
        } else if (reflectY) {
          tempContext.transform(1, 0, 0, -1, 0, innerHeight)
          context.drawImage(tempCanvas, 0, 0)
        }
      }
    }

    const handleMouseUp = (): void => {
      if (mouseDown && context) {
        mouseDown = false
        points.length = 0
      }
    }

    if (canvasRef.current) {
      const renderContext = canvasRef.current.getContext("2d")

      if (renderContext) {
        canvasRef.current.addEventListener("mousedown", handleMouseDown)
        canvasRef.current.addEventListener("mousemove", handleMouseMove)
        canvasRef.current.addEventListener("mouseup", handleMouseUp)

        canvasOffsetLeft = canvasRef.current.offsetLeft
        canvasOffsetTop = canvasRef.current.offsetTop

        setContext(renderContext)
      }
      if (context) {
        context.scale(devicePixelRatio, devicePixelRatio)
      }
    }
  }, [context, toolOptions])
}

export default useCanvasLogic
