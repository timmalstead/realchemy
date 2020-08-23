import React, { FC, ReactElement, useState } from "react"
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

  const reducerSelection: toolbarReducerTypes = reducerType as toolbarReducerTypes

  let timeout: number

  const startCountdown = () => {
    if (isCollapsed === false)
      timeout = setTimeout(() => showNameModal(true), 2000)
  }

  const clearCountdown = () => {
    clearTimeout(timeout)
    showNameModal(false)
  }

  const handleToolClick = () => {
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
      <span>{name.slice(0, 2)}</span>
    </ToolSquare>
  )
}

export default Tool
