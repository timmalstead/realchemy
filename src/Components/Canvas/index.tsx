import React, { FC, ReactElement } from "react"
import { appToCanvas } from "../../types/props"

const Canvas: FC<appToCanvas> = ({
  devicePixelRatio,
  canvasRef,
  width,
  height,
}: appToCanvas): ReactElement => (
  <canvas
    ref={canvasRef}
    width={width * devicePixelRatio}
    height={height * devicePixelRatio}
    style={{ width, height }}
  >
    <span>Looks like your browser does not support canvas.</span>
  </canvas>
)

export default Canvas
