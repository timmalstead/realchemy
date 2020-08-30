import React, { FC, ReactElement, useReducer, Reducer } from "react"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import useLocalStorageOnUnload from "./hooks/useLocalStorageOnUnload"
import { initOpts, drawingOptionsReducer } from "./constants/"
import { drawingOptions, toolbarStateAction } from "./@types/shapes"

const App: FC = (): ReactElement => {
  const [drawingOptionsObject, dispatchDrawingOptions] = useReducer<
    Reducer<drawingOptions, toolbarStateAction>
  >(drawingOptionsReducer, initOpts)

  useLocalStorageOnUnload("savedToolOptions", drawingOptionsObject)

  return (
    <>
      <Toolbar setToolOptions={dispatchDrawingOptions} />
      <Canvas toolOptions={drawingOptionsObject} />
    </>
  )
}

export default App
