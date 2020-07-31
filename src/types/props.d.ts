import { MutableRefObject } from "react"

export type reactCanvasRef = MutableRefObject<HTMLCanvasElement>

export interface canvasLogic {
  canvasRef: reactCanvasRef
  context: CanvasRenderingContext2D | null
  setContext: any
}
