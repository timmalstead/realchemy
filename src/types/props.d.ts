import { MutableRefObject } from "react"

type reactCanvasRef = MutableRefObject<HTMLCanvasElement>

export type drawingOptions = {
  reflectX: boolean
  reflectY: boolean
  isBrush: boolean
  isFreehand: boolean
  lineWidth: number
  lineCap: "butt" | "round" | "square"
  miterLimit: number
  colorOne: string
  colorTwo: string
  colorStops: string[]
}

export interface canvasLogic {
  innerWidth: number
  innerHeight: number
  devicePixelRatio: number
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
  devicePixelRatio: number
  canvasRef: reactCanvasRef
  width: number
  height: number
}
