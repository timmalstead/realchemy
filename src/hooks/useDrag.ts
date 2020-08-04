import { useState, useRef } from "react"
import { coords, positionParams } from "../types/objects"

const useDrag = (startingPosition: coords) => {
  const savedPosition = useRef<positionParams | null>(null)
  const [dragInfo, setDragInfo] = useState<positionParams>({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: startingPosition,
    lastTranslation: startingPosition,
  })

  const handleMouseDown = ({ clientX, clientY }: MouseEvent): void => {
    let [translation, lastTranslation]: coords[] = [
      startingPosition,
      startingPosition,
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
  }

  const handleMouseMove = ({ clientX, clientY }: MouseEvent): void => {
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
  }

  const handleMouseUp = (): void => {
    if (dragInfo.isDragging) {
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

  const toolbarPosition = {
    left: `${dragInfo.translation.x}px`,
    top: `${dragInfo.translation.y}px`,
  }

  return {
    dragInfo,
    toolbarPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
}

export default useDrag
