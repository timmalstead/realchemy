import React, { FC, ReactElement, useState, useReducer, Reducer } from "react"
import useLocalStorageOnUnload from "./hooks/useLocalStorageOnUnload"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import { initOpts, drawingOptionsReducer } from "./constants/"
import { drawingOptions, toolbarStateAction } from "./@types/objects"

const App: FC = (): ReactElement => {
  const [toolOptions, setToolOptions] = useState<drawingOptions>(initOpts)

  const [drawingOptionsObject, dispatchDrawingOptions] = useReducer<
    Reducer<drawingOptions, toolbarStateAction>
  >(drawingOptionsReducer, initOpts)

  useLocalStorageOnUnload("savedToolOptions", toolOptions)

  return (
    <>
      <Toolbar setToolOptions={setToolOptions} />
      <Canvas toolOptions={toolOptions} />
    </>
  )
}

export default App
