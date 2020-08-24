import {
  brush,
  eraser,
  freehand,
  eyedropper,
  grad,
  solid,
} from "./drawingOptionsTypes"
import {
  X_REFLECT,
  Y_REFLECT,
  BRUSH,
  ERASER,
  FREEHAND,
  IDROPPER,
  CLEAR,
  LINE_WIDTH,
} from "../components/Toolbar/toolbarStateReducerTypes"
import { drawingOptions, toolbarStateAction } from "../@types/objects"

const drawingOptionsReducer = (
  state: drawingOptions,
  action: toolbarStateAction
): drawingOptions => {
  switch (action.type) {
    case X_REFLECT:
      return {
        ...state,
        reflectX: state.reflectX ? false : true,
        reflectY: false,
      }
    case Y_REFLECT:
      return {
        ...state,
        reflectY: state.reflectY ? false : true,
        reflectX: false,
      }
    case BRUSH:
      return {
        ...state,
        currentTool: brush,
      }
    case ERASER:
      return {
        ...state,
        currentTool: eraser,
      }
    case FREEHAND:
      return {
        ...state,
        currentTool: freehand,
      }
    case IDROPPER:
      return {
        ...state,
        currentTool: eyedropper,
      }
    case CLEAR:
      return {
        ...state,
        isClear: true,
      }
    case LINE_WIDTH:
      return {
        ...state,
        lineWidth: 10,
      }
    default:
      return state
  }
}

export default drawingOptionsReducer
