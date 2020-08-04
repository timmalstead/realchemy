import { MutableRefObject } from "react"

type reactCanvasRef = MutableRefObject<HTMLCanvasElement>

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isBrush: boolean
  isFreehand: boolean
  lineWidth: number
  miterLimit: number
  colorOne: string
  colorTwo: string
  colorStops: string[]
}

export interface canvasLogic {
  canvasRef: reactCanvasRef
  toolOptions: drawingOptions | null
  context: CanvasRenderingContext2D | null
  setContext: any
}

export interface appToToolbar {
  toolOptions: drawingOptions | null
  setToolOptions: any
}

export interface appToCanvas {
  canvasRef: reactCanvasRef
  width: number
  height: number
}
