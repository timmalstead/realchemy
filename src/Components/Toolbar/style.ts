import styled from "styled-components"
import colorTheme from "../../colors"

const { main, dark } = colorTheme

const Tools = styled.main`
  width: 4em;
  height: 25em;
  position: absolute;
  z-index: 1;
  border-radius: 0.25em;
  overflow: hidden;
  background-color: ${main};
  box-shadow: -0.075em 0.075em 0.45em ${main};
  resize: both;
  object-fit: contain;
`
const ToolHeader = styled.header`
  width: 100%;
  height: 1.5em;
  background-color: ${dark};
  cursor: ${props => (props.isDragging ? "grabbing" : "grab")};
`

export { Tools, ToolHeader }
