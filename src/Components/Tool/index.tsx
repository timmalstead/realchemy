import React, { FC, ReactElement, useState, useEffect } from "react"
import { ToolSquare, NamePopUp } from "./style"
import { componentOption } from "../../@types/objects"
import { toolbarToTool } from "../../@types/props"

const Tool: FC<componentOption & toolbarToTool> = ({
  name,
  tabIndex,
  setToolOptions,
  isCollapsed,
}: componentOption & toolbarToTool): ReactElement => {
  const [nameModal, showNameModal] = useState<boolean>(false)

  useEffect(() => () => clearTimeout(timeout), [])

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
      tabIndex={tabIndex}
    >
      {nameModal ? <NamePopUp>{name}</NamePopUp> : null}
      <span>{name.slice(0, 2)}</span>
    </ToolSquare>
  )
}

export default Tool
