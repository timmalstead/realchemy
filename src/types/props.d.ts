import { MutableRefObject } from "react"

export interface appToCanvas {
  canvasRef: MutableRefObject<HTMLCanvasElement>
  width: number
  height: number
}

export interface drawingLogic {
  canvasRef: MutableRefObject<HTMLCanvasElement>
  context: CanvasRenderingContext2D | null
  setContext: any
}
