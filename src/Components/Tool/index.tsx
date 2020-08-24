import React, { FC, ReactElement, useState, useEffect } from "react"
import { ToolSquare, NamePopUp } from "./style"
import { componentOption } from "../../@types/objects"
import { toolbarToTool } from "../../@types/props"
import { toolbarReducerTypes } from "../../@types/literals"

const Tool: FC<componentOption & toolbarToTool> = ({
  name,
  reducerType,
  setToolOptions,
  isCollapsed,
  toolbarStateObject,
  dispatchToolbarState,
}: componentOption & toolbarToTool): ReactElement => {
  const [nameModal, showNameModal] = useState<boolean>(false)

  useEffect(() => {
    const setToolWithKeyboard = ({ code }: KeyboardEvent): void => {
      const eventKey: string = code[code.length - 1]
      const toolKey: string = reducerType[0]

      if (eventKey === toolKey) dispatchToolbarState({ type: reducerSelection })
    }

    window.addEventListener("keydown", setToolWithKeyboard)
  }, [])

  const reducerSelection: toolbarReducerTypes = reducerType as toolbarReducerTypes

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
    dispatchToolbarState({ type: reducerSelection })
  }

  return (
    <ToolSquare
      onMouseEnter={startCountdown}
      onMouseLeave={clearCountdown}
      onClick={handleToolClick}
      isToolSelected={toolbarStateObject[reducerSelection]}
    >
      {nameModal ? <NamePopUp>{name}</NamePopUp> : null}
      {reducerType[0]}
    </ToolSquare>
  )
}

export default Tool
