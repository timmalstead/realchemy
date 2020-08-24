import { MutableRefObject, SetStateAction, Dispatch } from "react"
import { drawingOptions, toolbarState, toolbarStateAction } from "./objects"

export interface canvasLogic {
  innerWidth: number
  innerHeight: number
  devicePixelRatio: number
  canvasRef: MutableRefObject<HTMLCanvasElement>
  toolOptions: drawingOptions
}

export interface appToToolbar {
  setToolOptions: Dispatch<toolbarStateAction>
}

export interface appToCanvas {
  toolOptions: drawingOptions
}

export interface toolbarToTool extends appToToolbar {
  isCollapsed: boolean
  toolbarStateObject: toolbarState
  dispatchToolbarState: Dispatch<toolbarStateAction>
}
