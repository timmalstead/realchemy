import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, dark } = colorTheme

export const Tools = styled.main`
  min-width: 4em;
  max-width: 10em;
  min-height: 25em;
  max-height: 40em;
  position: absolute;
  z-index: 1;
  border-radius: 0.25em;
  overflow: hidden;
  background-color: ${main};
  box-shadow: -0.075em 0.075em 0.45em ${main};
  resize: both;
  object-fit: contain;
`

export const ToolHeader = styled.header`
  width: 100%;
  height: 1.5em;
  background-color: ${dark};
  cursor: ${props => (props.isDragging ? "grabbing" : "grab")};
`
