import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, dark, light } = colorTheme

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
  background-color: ${({ isToolSelected }) => (isToolSelected ? dark : main)};
  box-shadow: inset 0.25em 0.25em ${main}, inset -0.25em -0.25em ${main};

  :hover {
    box-shadow: inset 0.25em 0.25em ${main}, inset -0.25em -0.25em ${main},
      inset 0.3em 0.3em ${light}88, inset -0.3em -0.3em ${light}88;
    outline: none;
  }
`
ToolSquare.displayName = "ToolSquare"

export const NamePopUp = styled.label`
  text-align: center;
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  padding: 0.5em;
  color: ${main};
  background-color: ${light};
  top: -2em;
`
NamePopUp.displayName = "NamePopUp"
