import { componentOption } from "../../@types/objects"

const compOptions: componentOption[] = [
  {
    name: "Reflect X",
    typeVal: "reflectX",
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
    typeVal: "reflectY",
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
    typeVal: "isBrush",
    options: "brush size, brush hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isBrush: true,
      isEraser: false,
      isFreehand: false,
    }),
  },
  {
    name: "Eraser",
    typeVal: "isEraser",
    options: "eraser size, eraser hardness, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isBrush: false,
      isEraser: true,
      isFreehand: false,
    }),
  },
  {
    name: "Freehand",
    typeVal: "isFreehand",
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isBrush: false,
      isEraser: false,
      isFreehand: true,
    }),
  },
  {
    name: "Clear",
    typeVal: "isClear",
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isClear: true,
    }),
    //what's the best way to turn off clear when done?
  },
  {
    name: "Eyedropper",
    typeVal: "isClear",
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isClear: true,
    }),
    //after eye dropper executes, do you want to revert it to previous tool? can you?
  },
  {
    name: "Line Width",
    typeVal: "lineWidth",
    options: "path intersection, opacity",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      lineWidth: "lineWidthValueAccessedThroughClosure",
    }),
  },
]

export default compOptions
