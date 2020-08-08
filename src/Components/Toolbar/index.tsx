import React, { FC, ReactElement, useState } from "react"
import useDrag from "../../hooks/useDrag"
import { appToToolbar } from "../../types/props"
import { coords } from "../../types/objects"
import { Tools, ToolHeader, CollapseArrow, ToolHolder } from "./style"

const startingPosition: coords = { x: window.innerWidth - 100, y: 25 }

const Toolbar: FC<appToToolbar> = ({
  setToolOptions,
}: appToToolbar): ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
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
      >
        <CollapseArrow
          onClick={() => setIsCollapsed(!isCollapsed)}
          isCollapsed={isCollapsed}
        />
      </ToolHeader>
      <ToolHolder isCollapsed={isCollapsed}></ToolHolder>
    </Tools>
  )
}

export default Toolbar
