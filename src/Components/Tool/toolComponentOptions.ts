import { componentOption } from "../../@types/objects"
import { brush, eraser, freehand, eyedropper } from "../../constants/toolTypes"

const compOptions: componentOption[] = [
  {
    name: "Reflect X",
    reducerType: "REFLECT_X",
    tabIndex: 1,
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
    reducerType: "REFLECT_Y",
    tabIndex: 2,
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
    reducerType: "BRUSH",
    tabIndex: 3,
    options: "brush size, brush hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: brush,
    }),
  },
  {
    name: "Eraser",
    reducerType: "ERASER",
    tabIndex: 4,
    options: "eraser size, eraser hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: eraser,
    }),
  },
  {
    name: "Freehand",
    reducerType: "FREEHAND",
    tabIndex: 5,
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      currentTool: freehand,
    }),
  },
  {
    name: "Eyedropper",
    reducerType: "EYEDROPPER",
    tabIndex: 6,
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
    reducerType: "CLEAR",
    tabIndex: 7,
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
    reducerType: "LINE_WIDTH",
    tabIndex: 8,
    options: "width",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      lineWidth: 10, //this will be a number value likely accessed in the closure of the tool component
    }),
  },
]

export default compOptions
