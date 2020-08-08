import { drawingOptions } from "../@types/objects"

const defOpts: drawingOptions = localStorage.savedToolOptions
  ? JSON.parse(localStorage.savedToolOptions)
  : {
      reflectX: true,
      reflectY: false,
      isBrush: false,
      isFreehand: true,
      isGradient: true,
      lineWidth: 10,
      lineCap: "round",
      miterLimit: 0.01,
      colorOne: "",
      colorTwo: "",
      colorStops: [""],
    }

export default defOpts
