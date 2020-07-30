//Library Import
import React, { FC, ReactElement, useState, useEffect } from "react"
//Style Import
import { CanvasWithFallback, FallbackText } from "./style"
//Type Import
import { appToCanvas } from "../../types/props"
import { screenSize } from "../../types/states"

//Component
const Canvas: FC<appToCanvas> = ({
  canvasRef,
  width,
  height,
}: appToCanvas): ReactElement => {
  //Canvas Size
  const [measurements, changeMeasurements] = useState<screenSize>({
    width,
    height,
  })

  useEffect(() => {
    //have to figure out how to save and restore on resize, and then maybe how to do it on entire stack once i do undo/redo
    const resizeCanvas = () =>
      changeMeasurements({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <CanvasWithFallback
      ref={canvasRef}
      width={measurements.width}
      height={measurements.height}
    >
      <FallbackText>
        Looks like your browser does not support canvas. You may want to do
        something about that.
      </FallbackText>
    </CanvasWithFallback>
  )
}

export default Canvas
