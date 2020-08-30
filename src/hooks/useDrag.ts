import { useState, useRef, MouseEvent } from "react"
import { coords, positionParams } from "../@types/shapes"

const useDrag = (startingPosition: coords) => {
  const savedPosition = useRef<positionParams | null>(null)
  const [dragInfo, setDragInfo] = useState<positionParams>({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: startingPosition,
    lastTranslation: startingPosition,
  })

  const { isDragging } = dragInfo

  const handleMouseDown = ({
    clientX,
    clientY,
  }: MouseEvent<HTMLElement>): void => {
    if (!isDragging) {
      let translation: coords, lastTranslation: coords

      if (savedPosition.current) {
        translation = savedPosition.current.translation
        lastTranslation = savedPosition.current.lastTranslation
      } else {
        translation = startingPosition
        lastTranslation = startingPosition
      }

      setDragInfo({
        isDragging: true,
        origin: { x: clientX, y: clientY },
        translation,
        lastTranslation,
      })
    }
  }

  const handleMouseMove = ({
    clientX,
    clientY,
  }: MouseEvent<HTMLElement>): void => {
    if (isDragging) {
      const { origin, lastTranslation } = dragInfo
      setDragInfo({
        ...dragInfo,
        translation: {
          x: Math.abs(clientX - origin.x + lastTranslation.x),
          y: Math.abs(clientY - origin.y + lastTranslation.y),
        },
      })
    }
  }

  const handleMouseUp = (): void => {
    if (isDragging) {
      const { translation } = dragInfo
      const newPositionData = {
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      }

      setDragInfo(newPositionData)
      savedPosition.current = newPositionData
    }
  }

  const dragPosition = {
    left: `${dragInfo.translation.x}px`,
    top: `${dragInfo.translation.y}px`,
  }

  return {
    isDragging,
    dragPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
}

export default useDrag
