import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react"
import { coords } from "../../types/objects"
import { Tools } from "./style"

const Toolbar: FC = (): ReactElement => {
  let savedPosition = useRef<coords>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const handleMouseDown = useCallback((): void => {
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      savedPosition.current = { x: clientX, y: clientY }
    },
    [savedPosition.current, isDragging]
  )

  const handleMouseUp = useCallback(
    ({ clientX, clientY }: MouseEvent): void => {
      savedPosition.current = { x: clientX, y: clientY }
      setIsDragging(false)
    },
    []
  )

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove),
        window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const toolbarPosition = useMemo(
    () => ({
      left: `${savedPosition.current.x}px`,
      top: `${savedPosition.current.y}px`,
    }),
    [savedPosition.current, isDragging]
  )

  return (
    <Tools
      onMouseDown={e => handleMouseDown(e)}
      onMouseMove={e => handleMouseMove(e)}
      onMouseUp={e => handleMouseUp(e)}
      isDragging={isDragging}
      style={toolbarPosition}
    />
  )
}

export default Toolbar
