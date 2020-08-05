import React, { FC, ReactElement, useState } from "react"
import Toolbar from "./components/Toolbar"
import Canvas from "./components/Canvas"
import defOpts from "./constants/defaultDrawingOptions"
import { drawingOptions } from "./types/objects"
import GlobalStyle from "./globalStyle"

const App: FC = (): ReactElement => {
  const [toolOptions, setToolOptions] = useState<drawingOptions>(defOpts)

  return (
    <>
      <Toolbar setToolOptions={setToolOptions} />
      <Canvas toolOptions={toolOptions} />
      <GlobalStyle />
    </>
  )
}

export default App
