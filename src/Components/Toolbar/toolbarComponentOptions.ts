import { componentOption } from "../../@types/objects"

const compOptions: componentOption[] = [
  {
    name: "Reflect X",
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
    options: "clear color",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isClear: true,
    }),
    //what's the best way to turn off clear when done?
  },
  {
    name: "Eyedropper",
    options: "area to poll",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      isEyedropper: true,
    }),
    //after eye dropper executes, do you want to revert it to previous tool? can you?
  },
  {
    name: "Line Width",
    options: "width",
    svg: color => "svg as function with a color argument",
    changeAction: prevState => ({
      ...prevState,
      lineWidth: 10, //this will be a number value likely accessed in the closure of the tool component
    }),
  },
]

export default compOptions
