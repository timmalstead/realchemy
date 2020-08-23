import React, { FC, ReactElement, useState } from "react"
import { ToolSquare, NamePopUp } from "./style"
import { componentOption } from "../../@types/objects"
import { toolbarToTool } from "../../@types/props"
import { toolbarReducerTypes } from "../../@types/literals"

const Tool: FC<componentOption & toolbarToTool> = ({
  name,
  reducerType,
  tabIndex,
  setToolOptions,
  isCollapsed,
  toolbarStateObject,
  dispatchToolbarState,
}: componentOption & toolbarToTool): ReactElement => {
  const [nameModal, showNameModal] = useState<boolean>(false)

  let timeout: number

  const startCountdown = () => {
    if (isCollapsed === false)
      timeout = setTimeout(() => showNameModal(true), 2000)
  }

  const clearCountdown = () => {
    clearTimeout(timeout)
    showNameModal(false)
  }

  return (
    <ToolSquare
      onMouseEnter={startCountdown}
      onMouseLeave={clearCountdown}
      onClick={() =>
        dispatchToolbarState({ type: reducerType as toolbarReducerTypes })
      }
      tabIndex={tabIndex}
      isToolSelected={toolbarStateObject[reducerType as toolbarReducerTypes]}
    >
      {nameModal ? <NamePopUp>{name}</NamePopUp> : null}
      <span>{name.slice(0, 2)}</span>
    </ToolSquare>
  )
}

export default Tool
