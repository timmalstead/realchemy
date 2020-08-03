import { MutableRefObject } from "react"

export type coords = { x: number; y: number }

export type colorPack = {
  main: string
  text: string
  contrastLight: string
  contrastDark: string
}

export interface positionParams {
  isDragging: boolean
  origin: MutableRefObject<coords>
  translation: MutableRefObject<coords>
}
