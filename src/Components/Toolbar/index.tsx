import React, {
  FC,
  ReactElement,
  useState,
  useReducer,
  Reducer,
  Fragment,
} from "react"
import toolbarStateReducer from "./toolbarStateReducer"
import initialToolbarState from "./initialToolbarState"
import Tool from "../Tool"
import toolbarComponentOptions from "../Tool/toolComponentOptions"
import { useDrag, useLocalStorageOnUnload } from "../../hooks/"
import { appToToolbar } from "../../@types/props"
import {
  coords,
  componentOption,
  toolbarState,
  toolbarStateAction,
} from "../../@types/objects"
import { Tools, ToolHeader, CollapseArrow, ToolHolder } from "./style"

const startingPosition: coords = { x: innerWidth - 150, y: 50 }

const Toolbar: FC<appToToolbar> = ({
  setToolOptions,
}: appToToolbar): ReactElement => {
  const [toolbarStateObject, dispatchToolbarState] = useReducer<
    Reducer<toolbarState, toolbarStateAction>
  >(toolbarStateReducer, initialToolbarState)

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const {
    isDragging,
    dragPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag(startingPosition)

  useLocalStorageOnUnload("toolbarState", toolbarStateObject)

  const mappedTools: ReactElement[] = toolbarComponentOptions.map(
    (options: componentOption, i: number): ReactElement => (
      <Fragment key={i}>
        <Tool
          {...options}
          setToolOptions={setToolOptions}
          isCollapsed={isCollapsed}
          toolbarStateObject={toolbarStateObject}
          dispatchToolbarState={dispatchToolbarState}
        />
      </Fragment>
    )
  )

  return (
    <Tools style={dragPosition}>
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
