import { MutableRefObject } from "react"

type ReactCanvasRefObject = MutableRefObject<HTMLCanvasElement>

export interface appToCanvas {
  canvasRef: ReactCanvasRefObject
  width: number
  height: number
}

export interface drawingLogic {
  canvasRef: ReactCanvasRefObject
  context: CanvasRenderingContext2D | null
  setContext: any
}
