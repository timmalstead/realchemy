import React, { FC, ReactElement, useState, useEffect } from "react"
import { appToCanvasProps } from "../../types/props"

const Canvas: FC<appToCanvasProps> = ({
  canvasRef,
}: appToCanvasProps): ReactElement => {
  const [measurements, changeMeasurements] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const resizeCanvas = () => {
      changeMeasurements({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={measurements.width}
      height={measurements.height}
    >
      <span>
        Looks like your browser does not support canvas. You may want to do
        something about that.
      </span>
    </canvas>
  )
}

export default Canvas
