import React, { FC, ReactElement, useRef } from "react"
import useCanvasLogic from "../../hooks/useCanvasLogic"
import { appToCanvas } from "../../@types/props"

const Canvas: FC<appToCanvas> = ({
  toolOptions,
}: appToCanvas): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useCanvasLogic({
    toolOptions,
    canvasRef,
  })

  return (
    <canvas
      ref={canvasRef}
      width={innerWidth * devicePixelRatio}
      height={innerHeight * devicePixelRatio}
      style={{ width: innerWidth, height: innerHeight }}
    >
      <span>Looks like your browser does not support canvas.</span>
    </canvas>
  )
}

export default Canvas
