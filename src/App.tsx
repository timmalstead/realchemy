import React, { FC, ReactElement, useState } from "react"
import useLocalStorageOnUnload from "./hooks/useLocalStorageOnUnload"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import initOpts from "./constants/initialDrawingOptions"
import { drawingOptions } from "./@types/objects"

const App: FC = (): ReactElement => {
  const [toolOptions, setToolOptions] = useState<drawingOptions>(initOpts)

  useLocalStorageOnUnload("savedToolOptions", toolOptions)

  return (
    <>
      <Toolbar setToolOptions={setToolOptions} />
      <Canvas toolOptions={toolOptions} />
    </>
  )
}

export default App
