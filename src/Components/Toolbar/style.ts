import styled from "styled-components"
import colorTheme from "../../constants/colors"

const { main, dark, light } = colorTheme

export const Tools = styled.main`
  width: 5.25em;
  position: absolute;
  z-index: 1;
  border-radius: 0.25em;
  box-shadow: -0.075em 0.075em 0.45em ${main};
  display: flex;
  flex-direction: column;
`
Tools.displayName = "Tools"

export const ToolHeader = styled.header`
  position: relative;
  width: 100%;
  height: 1.5em;
  background-color: ${dark};
  cursor: ${({ isDragging }) => (isDragging ? "grabbing" : "grab")};
  display: flex;
  border-radius: 0.25em 0.25em 0 0;
  justify-content: flex-end;
  padding: 0.5em 0.33em;
`
ToolHeader.displayName = "ToolHeader"

export const CollapseArrow = styled.div`
  height: 0;
  width: 0;
  border-left: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  border-top: 0.4em solid ${light};
  transform: ${({ isCollapsed }) => (isCollapsed ? "rotate(90deg)" : null)};
  transition: transform 0.25s linear;
  cursor: pointer;
`
CollapseArrow.displayName = "CollapseArrow"

export const ToolHolder = styled.section`
  background-color: ${main};
  width: 100%;
  height: ${({ isCollapsed }) => (isCollapsed ? 0 : "11em")};
  color: ${({ isCollapsed }) => (isCollapsed ? "transparent" : light)};
  transition: height 0.25s linear;
  display: flex;
  border-radius: 0 0 0.25em 0.25em;
  flex-wrap: wrap;
`
ToolHolder.displayName = "ToolHolder"
