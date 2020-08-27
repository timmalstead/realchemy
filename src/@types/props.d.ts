import { MutableRefObject, Dispatch } from "react"
import { drawingOptions, toolbarState, toolbarStateAction } from "./objects"

export interface canvasLogic {
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
