import React, { FC, ReactElement, useState, useEffect } from "react"
import { appToCanvas } from "../../types/props"
import { screenSize } from "../../types/states"

const Canvas: FC<appToCanvas> = ({
  canvasRef,
  width,
  height,
}: appToCanvas): ReactElement => {
  const [measurements, changeMeasurements] = useState<screenSize>({
    width,
    height,
  })

  useEffect(() => {
    //have to figure out how to save and restore on resize,
    //and then maybe how to do it on entire stack once i do undo/redo
    const resizeCanvas = () =>
      changeMeasurements({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={measurements.width}
      height={measurements.height}
    >
      <span>Looks like your browser does not support canvas.</span>
    </canvas>
  )
}

export default Canvas
