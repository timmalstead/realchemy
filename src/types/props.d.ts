import { MutableRefObject } from "react"

export interface appToCanvas {
  canvasRef: MutableRefObject<HTMLCanvasElement>
  width: number
  height: number
}
