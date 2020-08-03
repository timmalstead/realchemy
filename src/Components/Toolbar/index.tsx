import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { coords, positionParams } from "../../types/objects"
import { Tools } from "./style"

const initialPosition: coords = { x: 0, y: 0 }

const Toolbar: FC = (): ReactElement => {
  // const savedPosition = useRef<coords>({ x: 0, y: 0 })
  const [drag, setDrag] = useState<positionParams>({
    isDragging: false,
    origin: initialPosition,
    translation: initialPosition,
  })
  console.log("toolbar render")

  const handleMouseDown = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      console.log("drag down")
      setDrag({
        ...drag,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      })
    },
    []
  )

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      if (drag.isDragging) {
        console.log("drag moving")
        const translation: coords = {
          x: clientX - drag.origin.x,
          y: clientY - drag.origin.y,
        }
        setDrag({ ...drag, translation })
      }
    },
    [drag.origin]
  )

  const handleMouseUp = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      console.log("drag up")
      const origin: coords = {
        x: clientX,
        y: clientY,
      }
      const translation: coords = {
        x: clientX,
        y: clientY,
      }
      setDrag({ origin, translation, isDragging: false })
    },
    []
  )

  useEffect(() => {
    if (drag.isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => (
      window.removeEventListener("mousemove", handleMouseMove),
      window.removeEventListener("mouseup", handleMouseUp)
    )
  }, [drag.isDragging, handleMouseMove, handleMouseUp])

  const toolbarPosition = useMemo(
    () => ({
      left: `${drag.translation.x}px`,
      top: `${drag.translation.y}px`,
      cursor: `${drag.isDragging ? "grabbing" : "grab"}`,
    }),
    [drag.translation, drag.isDragging]
  )

  return (
    <Tools
      onMouseDown={e => handleMouseDown(e)}
      onMouseMove={e => handleMouseMove(e)}
      onMouseUp={e => handleMouseUp(e)}
      style={toolbarPosition}
    />
  )
}

export default Toolbar
