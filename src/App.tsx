import React, { FC, ReactElement, useState, useRef, useEffect } from "react"
import Canvas from "./Components/Canvas"
import { GlobalStyle } from "./style"

const App: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const renderContext = canvasRef.current.getContext("2d")
      if (renderContext) {
        setContext(renderContext)
      }
      if (context) context.fillRect(5, 5, 100, 100)
    }

    if (context) {
      context.beginPath()
      context.fillStyle = "#ff7f50"
      context.arc(440, 60, 50, 0, Math.PI * 2, true)
      context.fill()
      context.fillStyle = "#000"
      context.closePath()
    }
  }, [context])

  return (
    <>
      <Canvas canvasRef={canvasRef} />
      <GlobalStyle />
    </>
  )
}

export default App
