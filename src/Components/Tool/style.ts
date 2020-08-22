import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, dark, light } = colorTheme

const ToolSquare = styled.div`
  position: relative;
  width: 50%;
  height: 25%;
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: default;

  :focus,
  :hover {
    /* will do this with a boolean so it will be darker when tool is active and probably a blend mode as well, may be pure programattically to keep focus on elements when doing a stroke*/
    box-shadow: inset 0.25em 0.25em ${main}, inset -0.25em -0.25em ${main},
      inset 0.3em 0.3em ${light}88, inset -0.3em -0.3em ${light}88;
    background-color: ${dark}88;
    outline: none;
  }
`

const NamePopUp = styled.span`
  position: absolute;
  white-space: nowrap;
  padding: 0.5em;
  color: ${main};
  background-color: ${light};
  top: -1.5em;
`

export { ToolSquare, NamePopUp }
