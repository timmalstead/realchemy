import React, { FC, ReactElement, useState, useEffect } from "react"
import { ToolSquare, NamePopUp } from "./style"
import { toolDefinitionTypes } from "../../@types/shapes"
import { toolbarToTool } from "../../@types/props"

const Tool: FC<toolDefinitionTypes & toolbarToTool> = ({
  name,
  reducerType,
  options,
  svg,
  setToolOptions,
  isCollapsed,
  toolbarStateObject,
  dispatchToolbarState,
}: toolDefinitionTypes & toolbarToTool): ReactElement => {
  const [nameModal, showNameModal] = useState<boolean>(false)

  useEffect(() => {
    const setToolWithKeyboard = ({ code }: KeyboardEvent): void => {
      const eventKey: string = code[code.length - 1]
      const toolKey: string = reducerType[0]

      if (eventKey === toolKey) handleToolClick()
    }

    addEventListener("keydown", setToolWithKeyboard)

    return () => removeEventListener("keydown", setToolWithKeyboard)
  }, [])

  let timeout: number

  const startCountdown = (): void => {
    if (isCollapsed === false)
      timeout = setTimeout(() => showNameModal(true), 2000)
  }

  const clearCountdown = (): void => {
    clearTimeout(timeout)
    showNameModal(false)
  }

  const handleToolClick = (): void => {
    clearTimeout(timeout)
    setToolOptions({ type: reducerType })
    dispatchToolbarState({ type: reducerType })
  }

  return (
    <ToolSquare
      onMouseEnter={startCountdown}
      onMouseLeave={clearCountdown}
      onClick={handleToolClick}
      isToolSelected={toolbarStateObject[reducerType]}
    >
      {nameModal && <NamePopUp>{name}</NamePopUp>}
      {reducerType[0]}
    </ToolSquare>
  )
}

export default Tool
