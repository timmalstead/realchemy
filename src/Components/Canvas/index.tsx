import React, { FC, ReactElement } from "react"
import { reactCanvasRef } from "../../types/props"

const Canvas: FC = ({ canvasRef }: reactCanvasRef): ReactElement => {
  const { innerWidth, innerHeight } = window

  return (
    <canvas ref={canvasRef} width={innerWidth} height={innerHeight}>
      <span>Looks like your browser does not support canvas.</span>
    </canvas>
  )
}

export default Canvas
