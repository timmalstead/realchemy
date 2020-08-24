import { componentOption } from "../../@types/objects"
import { brush, eraser, freehand, eyedropper } from "../../constants/toolTypes"
import {
  REFLECT_X,
  REFLECT_Y,
  BRUSH,
  ERASER,
  FREEHAND,
  EYEDROPPER,
  CLEAR,
  LINE_WIDTH,
} from "../Toolbar/toolbarStateReducerTypes"

const compOptions: componentOption[] = [
  {
    name: "Reflect X",
    reducerType: REFLECT_X,
    options: null,
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      reflectX: true,
      reflectY: false,
    }),
  },
  {
    name: "Reflect Y",
    reducerType: REFLECT_Y,
    options: null,
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      reflectY: true,
      reflectX: false,
    }),
  },
  {
    name: "Brush",
    reducerType: BRUSH,
    options: "brush size, brush hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: brush,
    }),
  },
  {
    name: "Eraser",
    reducerType: ERASER,
    options: "eraser size, eraser hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: eraser,
    }),
  },
  {
    name: "Freehand",
    reducerType: FREEHAND,
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: freehand,
    }),
  },
  {
    name: "Eyedropper",
    reducerType: EYEDROPPER,
    options: "area to poll",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: eyedropper,
    }),
    //after eye dropper executes, do you want to revert it to previous tool? can you?
  },
  {
    name: "Clear",
    reducerType: CLEAR,
    options: "clear color",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isClear: true,
    }),
    //what's the best way to turn off clear when done?
  },
  {
    name: "Line Width",
    reducerType: LINE_WIDTH,
    options: "width",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      lineWidth: 10, //this will be a number value likely accessed in the closure of the tool component
    }),
  },
]

export default compOptions
