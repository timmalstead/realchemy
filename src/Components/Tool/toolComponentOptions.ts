import { componentOption } from "../../@types/objects"
import {
  X_REFLECT,
  Y_REFLECT,
  BRUSH,
  ERASER,
  FREEHAND,
  IDROPPER,
  CLEAR,
  LINE_WIDTH,
} from "../Toolbar/toolbarStateReducerTypes"

const compOptions: componentOption[] = [
  {
    name: "Reflect X (X)",
    reducerType: X_REFLECT,
    options: null,
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Reflect Y (Y)",
    reducerType: Y_REFLECT,
    options: null,
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Brush (B)",
    reducerType: BRUSH,
    options: "brush size, brush hardness, opacity",
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Eraser (E)",
    reducerType: ERASER,
    options: "eraser size, eraser hardness, opacity",
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Freehand (F)",
    reducerType: FREEHAND,
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Eyedropper (I)",
    reducerType: IDROPPER,
    options: "area to poll",
    svg: color => "svg as function with a color argument",
  },
  {
    name: "Clear (C)",
    reducerType: CLEAR,
    options: "clear color",
    svg: color => "svg as function with a color argument",
    //what's the best way to turn off clear when done?
  },
  {
    name: "Line Width (L)",
    reducerType: LINE_WIDTH,
    options: "width",
    svg: color => "svg as function with a color argument",
  },
]

export default compOptions
