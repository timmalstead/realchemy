import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react"
import { coords, positionParams } from "../../types/objects"

const position: coords = { x: 0, y: 0 }

const Draggable: FC = (): ReactElement => {
  const [drag, setDrag] = useState<positionParams>({
    isDragging: false,
    origin: position,
    translation: position,
  })

  return <div></div>
}

export default Draggable
