import {
  REFLECT_X,
  REFLECT_Y,
  BRUSH,
  ERASER,
  FREEHAND,
  EYEDROPPER,
  CLEAR,
  LINE_WIDTH,
} from "../../constants/toolbarReducerTypes"
import { toolbarState, toolbarStateAction } from "../../@types/objects"

export const initialToolbarState: toolbarState = {
  REFLECT_X: false,
  REFLECT_Y: false,
  BRUSH: false,
  ERASER: false,
  FREEHAND: true,
  EYEDROPPER: false,
  CLEAR: false,
  LINE_WIDTH: false,
}

const toolbarStateReducer = (
  state: toolbarState,
  action: toolbarStateAction
): toolbarState => {
  switch (action.type) {
    case REFLECT_X:
      return {
        ...state,
        REFLECT_X: state.REFLECT_X ? false : true,
        REFLECT_Y: false,
      }
    case REFLECT_Y:
      return {
        ...state,
        REFLECT_Y: state.REFLECT_Y ? false : true,
        REFLECT_X: false,
      }
    case BRUSH:
      return {
        ...state,
        BRUSH: true,
        ERASER: false,
        FREEHAND: false,
        EYEDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case ERASER:
      return {
        ...state,
        BRUSH: false,
        ERASER: true,
        FREEHAND: false,
        EYEDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case FREEHAND:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: true,
        EYEDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case EYEDROPPER:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        EYEDROPPER: true,
        CLEAR: false,
        LINE_WIDTH: false,
      }
    case CLEAR:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        EYEDROPPER: false,
        CLEAR: true,
        LINE_WIDTH: false,
      }
    case LINE_WIDTH:
      return {
        ...state,
        BRUSH: false,
        ERASER: false,
        FREEHAND: false,
        EYEDROPPER: false,
        CLEAR: false,
        LINE_WIDTH: true,
      }
    default:
      return state
  }
}

export default toolbarStateReducer
