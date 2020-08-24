import { toolbarState } from "../../@types/objects"

const initialToolbarState: toolbarState = localStorage.toolbarState
  ? JSON.parse(localStorage.toolbarState)
  : {
      X_REFLECT: false,
      Y_REFLECT: false,
      BRUSH: false,
      ERASER: false,
      FREEHAND: true,
      IDROPPER: false,
      CLEAR: false,
      LINE_WIDTH: false,
    }

export default initialToolbarState
