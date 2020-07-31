import React, { FC, ReactElement, useState, useRef } from "react"
import Canvas from "./components/Canvas"
import useCanvasLogic from "./useCanvasLogic"
import GlobalStyle from "./globalStyle"

const App: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const { innerWidth, innerHeight } = window

  useCanvasLogic({ canvasRef, context, setContext })

  return (
    <>
      <Canvas canvasRef={canvasRef} width={innerWidth} height={innerHeight} />
      <GlobalStyle />
    </>
  )
}

export default App
