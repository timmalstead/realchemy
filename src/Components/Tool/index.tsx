import React, { FC, ReactElement, useState, useEffect } from "react"
import { ToolSquare, NamePopUp } from "./style"
import { componentOption } from "../../@types/objects"
import { toolbarToTool } from "../../@types/props"

const Tool: FC<componentOption & toolbarToTool> = ({
  name,
  reducerType,
  options,
  svg,
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

      if (eventKey === toolKey) handleToolClick()
    }

    window.addEventListener("keydown", setToolWithKeyboard)
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
      {nameModal ? <NamePopUp>{name}</NamePopUp> : null}
      {reducerType[0]}
    </ToolSquare>
  )
}

export default Tool
