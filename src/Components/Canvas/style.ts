import styled from "styled-components"

const CanvasWithFallback = styled.canvas`
  position: relative;
`

const FallbackText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { CanvasWithFallback, FallbackText }
