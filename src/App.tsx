import React, { FC, ReactElement, useState, useRef } from "react"
import useCanvasLogic from "./useCanvasLogic"
import GlobalStyle from "./globalStyle"

const App: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const { innerWidth, innerHeight } = window
  useCanvasLogic({ canvasRef, context, setContext })

  return (
    <>
      <canvas ref={canvasRef} width={innerWidth} height={innerHeight}>
        <span>Looks like your browser does not support canvas.</span>
      </canvas>
      <GlobalStyle />
    </>
  )
}

export default App
