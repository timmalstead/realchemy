import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, dark, text } = colorTheme

export const Tools = styled.main`
  width: 4em;
  position: absolute;
  z-index: 1;
  border-radius: 0.25em;
  overflow: hidden;
  box-shadow: -0.075em 0.075em 0.45em ${main};
  display: flex;
  flex-direction: column;
`

export const ToolHeader = styled.header`
  position: relative;
  width: 100%;
  height: 1.5em;
  background-color: ${dark};
  cursor: ${props => (props.isDragging ? "grabbing" : "grab")};
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 0.33em;
`

export const CollapseArrow = styled.div`
  height: 0;
  width: 0;
  border-left: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  border-top: 0.4em solid ${text};
  transform: ${props => (props.isCollapsed ? "rotate(90deg)" : null)};
  transition: transform 0.25s linear;
  cursor: pointer;
`

export const ToolHolder = styled.section`
  background-color: ${main};
  width: 100%;
  height: ${props => (props.isCollapsed ? 0 : "13em")};
  transition: height 0.25s linear;
`
