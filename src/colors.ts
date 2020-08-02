import { colorPack } from "./types/objects"

const tempSwitch: string = "browser"

const colorHash: { [environment: string]: colorPack } = {
  iOS: {
    main: "red",
    text: "white",
    contrastLight: "black",
    contrastDark: "pink",
  },
  browser: {
    main: "#293284",
    text: "white",
    contrastLight: "black",
    contrastDark: "pink",
  },
}

const colorTheme: colorPack = colorHash[tempSwitch]

export default colorTheme
