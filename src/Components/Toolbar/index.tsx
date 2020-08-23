import React, {
  FC,
  ReactElement,
  useState,
  useReducer,
  Reducer,
  Fragment,
} from "react"
import toolbarStateReducer, { initialToolbarState } from "./toolbarStateReducer"
import Tool from "../Tool"
import toolbarComponentOptions from "../Tool/toolComponentOptions"
import useDrag from "../../hooks/useDrag"
import { appToToolbar } from "../../@types/props"
import {
  coords,
  componentOption,
  toolbarState,
  toolbarStateAction,
} from "../../@types/objects"
import { Tools, ToolHeader, CollapseArrow, ToolHolder } from "./style"

const startingPosition: coords = { x: window.innerWidth - 100, y: 25 }

const Toolbar: FC<appToToolbar> = ({
  setToolOptions,
}: appToToolbar): ReactElement => {
  const [toolbarState, dispatchToolbarState] = useReducer<
    Reducer<toolbarState, toolbarStateAction>
  >(toolbarStateReducer, initialToolbarState)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const {
    isDragging,
    toolbarPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag(startingPosition)

  const mappedTools: ReactElement[] = toolbarComponentOptions.map(
    (options: componentOption, i: number): ReactElement => (
      <Fragment key={i}>
        <Tool
          {...options}
          setToolOptions={setToolOptions}
          isCollapsed={isCollapsed}
        />
      </Fragment>
    )
  )

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
      <ToolHolder isCollapsed={isCollapsed}>{mappedTools}</ToolHolder>
    </Tools>
  )
}

export default Toolbar
