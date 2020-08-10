import { colorPack, colorDefs } from "../@types/objects"

const tempSwitch: string = "browser"

const drawingColorDefaults: colorDefs = {
  solidColor: "#000",
  colorStops: ["#000,#FFF"],
}

const colorHash: { [environment: string]: colorPack } = {
  iOS: {
    main: "red",
    dark: "yellow",
    text: "white",
    contrastLight: "black",
    contrastDark: "pink",
  },
  browser: {
    main: "#293284",
    dark: "#180f64",
    text: "#ebebeb",
    contrastLight: "black",
    contrastDark: "pink",
  },
}

const colorTheme: colorDefs & colorPack = {
  ...colorHash[tempSwitch],
  ...drawingColorDefaults,
}

export default colorTheme
