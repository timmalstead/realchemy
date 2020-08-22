import { useState, useEffect } from "react"
import setGradient from "./setGradient"
import drawingLoop from "./drawingLoop"
import { canvasLogic } from "../../@types/props"
import { coords } from "../../@types/objects"
import {
  brush,
  eraser,
  freehand,
  eyedropper,
  grad,
  solid,
} from "../../constants/toolTypes"

//#region other drawing logic
// #region drawing
// useEffect(() => {
//   let mouseDown: boolean = false
//   let start: Coords = { x: 0, y: 0 }
//   let end: Coords = { x: 0, y: 0 }
//   let [canvasOffsetLeft, canvasOffsetTop] = [0, 0]

//   const handleMouseDown = (e: MouseEvent): void => {
//     mouseDown = true

//     start = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }

//     end = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }
//   }

//   const handleMouseUp = (e: MouseEvent): void => {
//     mouseDown = false
//   }

//   function handleMouseMove(e: MouseEvent): void {
//     if (mouseDown && context) {
//       start = {
//         x: end.x,
//         y: end.y,
//       }

//       end = {
//         x: e.clientX + canvasOffsetLeft,
//         y: e.clientY + canvasOffsetTop,
//       }
//       context.beginPath()
//       context.moveTo(start.x, start.y)
//       context.lineTo(end.x, end.y)
//       context.strokeStyle = "#ff0000"
//       context.lineWidth = 10
//       context.stroke()
//       context.closePath()
//     }
//   }
//   if (canvasRef.current) {
//     const renderContext = canvasRef.current.getContext("2d")

//     if (renderContext) {
//       canvasRef.current.addEventListener("mousedown", handleMouseDown)
//       canvasRef.current.addEventListener("mouseup", handleMouseUp)
//       canvasRef.current.addEventListener("mousemove", handleMouseMove)

//       canvasOffsetLeft = canvasRef.current.offsetLeft
//       canvasOffsetTop = canvasRef.current.offsetTop

//       setContext(renderContext)
//     }
//   }
// }, [context])
//#endregion

//#region burst from central point
// useEffect(() => {
//   let mouseDown: boolean = false
//   let start: Coords = { x: 0, y: 0 }
//   let end: Coords = { x: 0, y: 0 }
//   let [canvasOffsetLeft, canvasOffsetTop] = [0, 0]
//   const setLineWidth: number = 10
//   const paintColor: string = "#FF0000"
//   const points: Array<Coords> = []

//   const handleMouseDown = (e: MouseEvent): void => {
//     mouseDown = true

//     start = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }

//     end = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }
//   }

//   const handleMouseUp = (e: MouseEvent): void => {
//     mouseDown = false
//   }

//   const handleMouseMove = (e: MouseEvent): void => {
//     if (mouseDown && context) {
//       start = {
//         x: end.x,
//         y: end.y,
//       }

//       end = {
//         x: e.clientX + canvasOffsetLeft,
//         y: e.clientY + canvasOffsetTop,
//       }

//       points.push(start)

//       const firstPoint: Coords = points[0]

//       context.strokeStyle = paintColor
//       context.fillStyle = paintColor
//       context.lineWidth = setLineWidth

//       context.beginPath()
//       context.moveTo(firstPoint.x, firstPoint.y)
//       context.arc(
//         firstPoint.x,
//         firstPoint.y,
//         setLineWidth / 2,
//         0,
//         Math.PI * 2
//       )

//       context.lineTo(end.x, end.y)
//       context.fill()

//       context.closePath()
//     }
//   }
//   if (canvasRef.current) {
//     const renderContext = canvasRef.current.getContext("2d")

//     if (renderContext) {
//       canvasRef.current.addEventListener("mousedown", handleMouseDown)
//       canvasRef.current.addEventListener("mouseup", handleMouseUp)
//       canvasRef.current.addEventListener("mousemove", handleMouseMove)

//       canvasOffsetLeft = canvasRef.current.offsetLeft
//       canvasOffsetTop = canvasRef.current.offsetTop

//       setContext(renderContext)
//     }
//   }
// }, [context])
//#endregion

//#region more drawing effects

// useEffect(() => {
//   let mouseDown: boolean = false
//   let start: Coords = { x: 0, y: 0 }
//   let end: Coords = { x: 0, y: 0 }
//   let [canvasOffsetLeft, canvasOffsetTop] = [0, 0]
//   const setLineWidth: number = 10
//   const paintColor: string = "#FF0000"
//   const points: Array<Coords> = []

//   const handleMouseDown = (e: MouseEvent): void => {
//     //points.length can control whether you want to keep going on one line or not
//     points.length = 0
//     mouseDown = true

//     start = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }

//     end = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }
//   }

//   const handleMouseUp = (): void => {
//     mouseDown = false
//   }

//   const handleMouseMove = (e: MouseEvent): void => {
//     if (mouseDown && context) {
//       start = {
//         x: end.x,
//         y: end.y,
//       }

//       end = {
//         x: e.clientX + canvasOffsetLeft,
//         y: e.clientY + canvasOffsetTop,
//       }

//       points.push(start)

//       const firstPoint: Coords = points[0]

//       context.strokeStyle = paintColor
//       context.lineCap = "round"

//       //miter limit can produce cool spiky effects
//       context.miterLimit = 0.01

//       context.fillStyle = paintColor
//       context.lineWidth = setLineWidth

//       if (points.length > 10) {
//         context.beginPath()
//         context.arc(
//           firstPoint.x,
//           firstPoint.y,
//           setLineWidth / 2,
//           0,
//           Math.PI * 2
//         )
//         // context.fill()
//         context.closePath()
//       }

//       context.beginPath()
//       context.moveTo(firstPoint.x, firstPoint.y)

//       const loopLength: number = points.length
//       for (let i = 1; i < loopLength - 2; i++) {
//         const bezierX: number = points[i].x
//         const bezierY: number = points[i].y
//         const endX: number = (bezierX + points[i].x) / 2
//         const endY: number = (bezierY + points[i].y) / 2
//         context.quadraticCurveTo(bezierX, bezierY, endX, endY)
//       }

//       //fun "cage effect if this is unchecked"
//       // context.arc(
//       //   firstPoint.x,
//       //   firstPoint.y,
//       //   setLineWidth / 2,
//       //   0,
//       //   Math.PI * 2
//       // )

//       context.lineTo(end.x, end.y)

//       context.quadraticCurveTo(
//         points[loopLength - 2].x,
//         points[loopLength - 2].y,
//         points[loopLength - 1].x,
//         points[loopLength - 1].y
//       )

//       //an arc at the end can also produce cool textures

//       // context.arc(
//       //   points[loopLength - 1].x,
//       //   points[loopLength - 1].y,
//       //   setLineWidth / 2,
//       //   0,
//       //   Math.PI * 2
//       // )

//       //fill to have an alchemy like drag fill. haven't figured out path intersection yet though

//       // context.fill()

//       context.stroke()
//       context.closePath()

//       //points.length here to zero to get fun stutter effect
//       // points.length = 0
//     }
//   }
//   if (canvasRef.current) {
//     const renderContext = canvasRef.current.getContext("2d")

//     if (renderContext) {
//       canvasRef.current.addEventListener("mousedown", handleMouseDown)
//       canvasRef.current.addEventListener("mouseup", handleMouseUp)
//       canvasRef.current.addEventListener("mousemove", handleMouseMove)

//       canvasOffsetLeft = canvasRef.current.offsetLeft
//       canvasOffsetTop = canvasRef.current.offsetTop

//       setContext(renderContext)
//     }
//   }
// }, [context])
//#endregion

//#region more drawing effects
// useEffect(() => {
//   let mouseDown: boolean = false
//   let start: Coords = { x: 0, y: 0 }
//   let end: Coords = { x: 0, y: 0 }
//   let [canvasOffsetLeft, canvasOffsetTop] = [0, 0]
//   const setLineWidth: number = 10
//   const paintColor: string = "#FF0000"
//   const points: Array<Coords> = []

//   const handleMouseDown = (e: MouseEvent): void => {
//     //points.length can control whether you want to keep going on one line or not. but WON'T Work with an arc on the end
//     points.length = 0
//     mouseDown = true

//     start = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }

//     end = {
//       x: e.clientX - canvasOffsetLeft,
//       y: e.clientY - canvasOffsetTop,
//     }
//   }

//   const handleMouseUp = (): void => {
//     mouseDown = false
//   }

//   const handleMouseMove = (e: MouseEvent): void => {
//     if (mouseDown && context) {
//       start = {
//         x: end.x,
//         y: end.y,
//       }

//       end = {
//         x: e.clientX + canvasOffsetLeft,
//         y: e.clientY + canvasOffsetTop,
//       }

//       points.push(start)

//       const firstPoint: Coords = points[0]

//       context.strokeStyle = paintColor
//       context.lineCap = "round"

//       //miter limit can produce cool spiky effects
//       context.miterLimit = 0.01

//       context.lineWidth = setLineWidth

//       if (points.length > 10) {
//         context.beginPath()
//         context.arc(
//           firstPoint.x,
//           firstPoint.y,
//           setLineWidth / 2,
//           0,
//           Math.PI * 2
//         )
//         // context.fill()
//         context.closePath()
//       }

//       //eyedropper
//       console.log(context.getImageData(start.x, start.y, 3, 3))

//       //before doing canvas color, do this
//       // context.globalCompositeOperation = "destination-over"

//       //reflect x
//       // context.translate(0, window.innerHeight)
//       // context.scale(1, -1)

//       //reflect y
//       context.translate(window.innerWidth, 0)
//       context.scale(-1, 1)

//       context.beginPath()
//       context.moveTo(firstPoint.x, firstPoint.y)

//       const loopLength: number = points.length
//       if (loopLength) {
//         for (let i = 1; i < loopLength - 2; i++) {
//           const bezierX: number = points[i].x
//           const bezierY: number = points[i].y
//           const endX: number = (bezierX + points[i].x) / 2
//           const endY: number = (bezierY + points[i].y) / 2
//           context.quadraticCurveTo(bezierX, bezierY, endX, endY)
//         }

//         //fun "cage? effect if this is unchecked
//         context.arc(
//           firstPoint.x,
//           firstPoint.y,
//           setLineWidth / 2,
//           0,
//           Math.PI * 2
//         )

//         context.lineTo(end.x, end.y)

//         // context.quadraticCurveTo(
//         //   points[loopLength - 2].x,
//         //   points[loopLength - 2].y,
//         //   points[loopLength - 1].x,
//         //   points[loopLength - 1].y
//         // )

//         const gradient = context.createLinearGradient(
//           canvasOffsetTop,
//           canvasOffsetLeft,
//           end.x,
//           end.y
//         )

//         gradient.addColorStop(0, "#404ce7")
//         gradient.addColorStop(0.5, "#e4306c80")
//         gradient.addColorStop(0.75, "#e4306cbf")
//         gradient.addColorStop(1, "#ffc74100")

//         context.fillStyle = gradient

//         //an arc at the end can also produce cool textures

//         // context.arc(
//         //   points[loopLength - 1].x,
//         //   points[loopLength - 1].y,
//         //   setLineWidth / 2,
//         //   0,
//         //   Math.PI * 2
//         // )

//         //fill to have an alchemy like drag fill. haven't figured out path intersection yet though

//         context.fill()

//         // context.stroke()
//         context.closePath()

//         //points.length here to zero to get fun stutter effect
//         // points.length = 0
//       }
//     }
//   }
//   if (canvasRef.current) {
//     const renderContext = canvasRef.current.getContext("2d")

//     if (renderContext) {
//       canvasRef.current.addEventListener("mousedown", handleMouseDown)
//       canvasRef.current.addEventListener("mouseup", handleMouseUp)
//       canvasRef.current.addEventListener("mousemove", handleMouseMove)

//       canvasOffsetLeft = canvasRef.current.offsetLeft
//       canvasOffsetTop = canvasRef.current.offsetTop

//       setContext(renderContext)
//     }
//   }
// }, [context])
//#endregion
//#endregion

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

    const handleMouseDown = ({ clientX, clientY }: MouseEvent): void => {
      if (context) {
        points.length = 0

        start = {
          x: clientX - canvasOffsetLeft,
          y: clientY - canvasOffsetTop,
        }

        end = start

        mouseDown = true
      }
    }

    const handleMouseMove = ({ clientX, clientY }: MouseEvent): void => {
      if (mouseDown && context) {
        if (currentTool === brush || currentTool === eraser) {
          if (solidOrGrad === solid) context.strokeStyle = solidColor
          else if (solidOrGrad === grad)
            context.strokeStyle = setGradient(
              canvasOffsetLeft,
              canvasOffsetTop,
              end,
              context,
              colorStops
            )
          context.lineWidth = lineWidth
        } else if (currentTool === freehand) {
          if (solidOrGrad === solid) context.fillStyle = solidColor
          else if (solidOrGrad === grad)
            context.fillStyle = setGradient(
              canvasOffsetLeft,
              canvasOffsetTop,
              end,
              context,
              colorStops
            )
        }

        if (reflectX) {
          context.translate(innerWidth, 0)
          context.scale(-1, 1)
        } else if (reflectY) {
          context.translate(0, innerHeight)
          context.scale(1, -1)
        }

        start = {
          x: end.x,
          y: end.y,
        }

        end = {
          x: clientX + canvasOffsetLeft,
          y: clientY + canvasOffsetTop,
        }

        drawingLoop(context, start, end, points, lineWidth)

        if (currentTool === brush || currentTool === eraser) context.stroke()
        if (currentTool === freehand) context.fill()
        context.closePath()
      }
    }

    if (canvasRef.current) {
      const renderContext = canvasRef.current.getContext("2d")

      if (renderContext) {
        canvasRef.current.addEventListener("mousedown", handleMouseDown)
        canvasRef.current.addEventListener("mousemove", handleMouseMove)
        canvasRef.current.addEventListener(
          "mouseup",
          (): boolean => (mouseDown = false)
        )

        canvasOffsetLeft = canvasRef.current.offsetLeft
        canvasOffsetTop = canvasRef.current.offsetTop

        setContext(renderContext)
      }
      if (context) {
        context.scale(devicePixelRatio, devicePixelRatio)
      }
    }
  }, [context])
}

export default useCanvasLogic
