import React, { FC, ReactElement, useState, useCallback, useRef } from "react"
import { coords, positionParams } from "../../types/objects"
import { Tools } from "./style"

const Toolbar: FC = (): ReactElement => {
  let savedPosition = useRef<coords>({ x: 0, y: 0 })
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
    lastTranslation: { x: 0, y: 0 },
  })

  const handleMouseDown = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      setDragInfo({
        ...dragInfo,
        origin: { x: clientX, y: clientY },
        isDragging: true,
      })
    },
    []
  )

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      if (dragInfo.isDragging) {
        const { origin, lastTranslation } = dragInfo
        setDragInfo({
          ...dragInfo,
          translation: {
            x: clientX - (origin.x + lastTranslation.x),
            y: clientY - (origin.y + lastTranslation.y),
          },
        })
      }
    },
    [dragInfo.isDragging]
  )

  const handleMouseUp = useCallback((): void => {
    if (dragInfo.isDragging) {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)

      const { translation } = dragInfo
      console.log(translation)
      savedPosition.current.x = translation.x
      savedPosition.current.y = translation.y
      setDragInfo({
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      })
    }
  }, [dragInfo.translation])

  const toolbarPosition = {
    left: `${
      dragInfo.isDragging ? dragInfo.translation.x : savedPosition.current.x
    }px`,
    top: `${
      dragInfo.isDragging ? dragInfo.translation.y : savedPosition.current.y
    }px`,
  }

  return (
    <Tools
      onMouseDown={e => handleMouseDown(e)}
      onMouseMove={e => handleMouseMove(e)}
      onMouseUp={() => handleMouseUp()}
      isDragging={dragInfo.isDragging}
      style={toolbarPosition}
    />
  )
}

export default Toolbar
