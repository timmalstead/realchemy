import React, { FC, ReactElement, useState, useEffect } from "react"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import initOpts from "./constants/initialDrawingOptions"
import { drawingOptions } from "./@types/objects"

const App: FC = (): ReactElement => {
  const [toolOptions, setToolOptions] = useState<drawingOptions>(initOpts)

  useEffect(() => {
    localStorage.savedToolOptions = JSON.stringify(toolOptions)
  }, [toolOptions])

  return (
    <>
      <Toolbar setToolOptions={setToolOptions} />
      <Canvas toolOptions={toolOptions} />
    </>
  )
}

export default App
