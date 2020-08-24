import { toolbarState } from "../../@types/objects"

const initialToolbarState: toolbarState = localStorage.toolbarState
  ? JSON.parse(localStorage.toolbarState)
  : {
      REFLECT_X: false,
      REFLECT_Y: false,
      BRUSH: false,
      ERASER: false,
      FREEHAND: true,
      EYEDROPPER: false,
      CLEAR: false,
      LINE_WIDTH: false,
    }

export default initialToolbarState
