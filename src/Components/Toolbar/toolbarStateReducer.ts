import {
  X_REFLECT,
  Y_REFLECT,
  BRUSH,
  ERASER,
  FREEHAND,
  IDROPPER,
  CLEAR,
  LINE_WIDTH,
} from "./toolbarStateReducerTypes"
import { toolbarState, toolbarStateAction } from "../../@types/objects"

const toolbarStateReducer = (
  state: toolbarState,
  action: toolbarStateAction
): toolbarState => {
  switch (action.type) {
    case X_REFLECT:
      return {
        ...state,
        X_REFLECT: state.X_REFLECT ? false : true,
        Y_REFLECT: false,
      }
    case Y_REFLECT:
      return {
        ...state,
        Y_REFLECT: state.Y_REFLECT ? false : true,
        X_REFLECT: false,
      }
    case BRUSH:
      return {
        ...state,
        BRUSH: true,
        ERASER: false,
        FREEHAND: false,
        IDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case ERASER:
      return {
        ...state,
        BRUSH: false,
        ERASER: true,
        FREEHAND: false,
        IDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case FREEHAND:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: true,
        IDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case IDROPPER:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        IDROPPER: true,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case CLEAR:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        IDROPPER: false,
        CLEAR: true,
        LINE_WIDTH: false,
      }
    case LINE_WIDTH:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        IDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: true,
      }
    default:
      return state
  }
}

export default toolbarStateReducer
