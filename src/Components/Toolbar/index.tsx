import React, { FC, ReactElement, useState, useCallback, useRef } from "react"
import { coords, positionParams } from "../../types/objects"
import { Tools } from "./style"

const Toolbar: FC = (): ReactElement => {
  const savedPosition = useRef<positionParams | null>(null)
  const [dragInfo, setDragInfo] = useState<positionParams>({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
    lastTranslation: { x: 0, y: 0 },
  })

  const handleMouseDown = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      let [translation, lastTranslation]: coords[] = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
      ]
      if (savedPosition.current) {
        translation = savedPosition.current.translation
        lastTranslation = savedPosition.current.lastTranslation
      }
      setDragInfo({
        isDragging: true,
        origin: { x: clientX, y: clientY },
        translation,
        lastTranslation,
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
            x: Math.abs(clientX - origin.x + lastTranslation.x),
            y: Math.abs(clientY - origin.y + lastTranslation.y),
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
      const newPositionData = {
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      }

      setDragInfo(newPositionData)
      savedPosition.current = newPositionData
    }
  }, [dragInfo.translation])

  const toolbarPosition = {
    left: `${dragInfo.translation.x}px`,
    top: `${dragInfo.translation.y}px`,
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
