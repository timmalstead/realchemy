import { colorPack, colorDefs } from "../@types/shapes"
import { supportedEnvironments } from "../@types/literals"
import isElectron from "./isElectron"

const currentEnvironment: supportedEnvironments = isElectron
  ? "Electron"
  : "Browser"

const colorHash: { [environment: string]: colorPack } = {
  Electron: {
    main: "#564f4f",
    dark: "#2b2726",
    light: "#d0c2c2",
  },
  Browser: {
    main: "#2a35bd",
    dark: "#170d71",
    light: "#ebebeb",
  },
}

const drawingColorDefaults: colorDefs = {
  solidColor: "#000",
  colorStops: [
    { position: 0, color: "#000" },
    { position: 1, color: "#fff" },
  ],
}

const colorTheme: colorDefs & colorPack = {
  ...colorHash[currentEnvironment],
  ...drawingColorDefaults,
}

export default colorTheme
