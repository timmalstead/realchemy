import React, { FC, ReactElement, useState, useRef } from "react"
import Canvas from "./components/Canvas"
import useDrawingLogic from "./useDrawingLogic"
import GlobalStyle from "./globalStyle"

const App: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  useDrawingLogic({ canvasRef, context, setContext })

  return (
    <>
      <Canvas
        canvasRef={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <GlobalStyle />
    </>
  )
}

export default App
