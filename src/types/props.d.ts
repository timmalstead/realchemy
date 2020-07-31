import { MutableRefObject } from "react"

type reactCanvasRef = MutableRefObject<HTMLCanvasElement>

export interface appToCanvas {
  canvasRef: reactCanvasRef
  width: number
  height: number
}

export interface canvasLogic {
  canvasRef: reactCanvasRef
  context: CanvasRenderingContext2D | null
  setContext: any
}
