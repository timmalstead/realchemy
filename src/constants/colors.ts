import { colorPack } from "../@types/objects"

const tempSwitch: string = "browser"

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

const colorTheme: colorPack = colorHash[tempSwitch]

export default colorTheme
