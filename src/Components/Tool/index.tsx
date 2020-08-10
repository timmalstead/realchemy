import React, { FC, ReactElement } from "react"
import { componentOption } from "../../@types/objects"
import { appToToolbar } from "../../@types/props"

const Tool: FC<componentOption & appToToolbar> = (
  options: componentOption & appToToolbar
): ReactElement => {
  console.log(options)
  return <span>{options.name}</span>
}

export default Tool
