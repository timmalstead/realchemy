import React, { FC, ReactElement, useState, useRef } from "react"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import { drawingOptions } from "./types/props"
import useCanvasLogic from "./hooks/useCanvasLogic"
import GlobalStyle from "./globalStyle"

//do dynamic import of toolbar mobile or full size based on environment?

const App: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [toolOptions, setToolOptions] = useState<drawingOptions>({
    reflectX: true,
    reflectY: false,
    isBrush: false,
    isFreehand: true,
    lineWidth: 10,
    lineCap: "round",
    miterLimit: 0.01,
    colorOne: "",
    colorTwo: "",
    colorStops: [""],
  })
  const { innerWidth, innerHeight, devicePixelRatio } = window

  useCanvasLogic({
    innerWidth,
    innerHeight,
    devicePixelRatio,
    toolOptions,
    canvasRef,
    context,
    setContext,
  })

  return (
    <>
      <Toolbar toolOptions={toolOptions} setToolOptions={setToolOptions} />
      <Canvas
        devicePixelRatio={devicePixelRatio}
        canvasRef={canvasRef}
        width={innerWidth}
        height={innerHeight}
      />
      <GlobalStyle />
    </>
  )
}

export default App
