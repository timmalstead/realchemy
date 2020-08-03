import styled from "styled-components"
import colorTheme from "../../colors"

const Tools = styled.main`
  width: 3em;
  height: 6em;
  position: absolute;
  z-index: 1;
  background-color: ${colorTheme.main};
  cursor: ${props => (props.isDragging ? "grabbing" : "grab")};
`

export { Tools }
