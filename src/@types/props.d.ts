import { MutableRefObject, SetStateAction, Dispatch } from "react"
import { drawingOptions } from "./objects"

export interface canvasLogic {
  innerWidth: number
  innerHeight: number
  devicePixelRatio: number
  canvasRef: MutableRefObject<HTMLCanvasElement>
  toolOptions: drawingOptions
}

export interface appToToolbar {
  setToolOptions: Dispatch<SetStateAction<drawingOptions>>
}

export interface appToCanvas {
  toolOptions: drawingOptions
}
