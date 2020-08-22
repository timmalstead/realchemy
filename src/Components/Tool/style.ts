import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, light } = colorTheme

export const ToolSquare = styled.div`
  position: relative;
  width: 50%;
  height: 25%;
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: default;
  box-shadow: inset 0.25em 0.25em ${main}, inset -0.25em -0.25em ${main};

  :focus,
  :hover {
    box-shadow: inset 0.25em 0.25em ${main}, inset -0.25em -0.25em ${main},
      inset 0.3em 0.3em ${light}88, inset -0.3em -0.3em ${light}88;
    outline: none;
  }
`
ToolSquare.displayName = "ToolSquare"

export const NamePopUp = styled.span`
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  padding: 0.5em;
  color: ${main};
  background-color: ${light};
  top: -1.5em;
`
NamePopUp.displayName = "NamePopUp"
