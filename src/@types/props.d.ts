import { MutableRefObject, Dispatch } from "react"
import { drawingOptions, toolbarState, toolbarStateAction } from "./shapes"

export interface appToCanvas {
  toolOptions: drawingOptions
}
export interface canvasLogic extends appToCanvas {
  canvasRef: MutableRefObject<HTMLCanvasElement>
}

export interface appToToolbar {
  setToolOptions: Dispatch<toolbarStateAction>
}

export interface toolbarToTool extends appToToolbar {
  isCollapsed: boolean
  toolbarStateObject: toolbarState
  dispatchToolbarState: Dispatch<toolbarStateAction>
}
