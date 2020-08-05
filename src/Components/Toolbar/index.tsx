import React, { FC, ReactElement } from "react"
//component imports
import useDrag from "../../hooks/useDrag"
import { appToToolbar } from "../../types/props"
import { coords } from "../../types/objects"
import { Tools, ToolHeader } from "./style"

const startingPosition: coords = { x: window.innerWidth - 100, y: 25 }

const Toolbar: FC<appToToolbar> = ({
  setToolOptions,
}: appToToolbar): ReactElement => {
  const {
    isDragging,
    toolbarPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag(startingPosition)

  return (
    <Tools style={toolbarPosition}>
      <ToolHeader
        onMouseDown={e => handleMouseDown(e)}
        onMouseMove={e => handleMouseMove(e)}
        onMouseLeave={e => handleMouseMove(e)}
        onMouseUp={handleMouseUp}
        isDragging={isDragging}
      ></ToolHeader>
    </Tools>
  )
}

export default Toolbar
