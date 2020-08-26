const canvasPrep = (
  context: CanvasRenderingContext2D,
  innerWidth: number,
  innerHeight: number
): void => {
  context.globalCompositeOperation = "destination-over"
  context.fillStyle = "#FFF"
  context.fillRect(0, 0, innerWidth, innerHeight)
  context.globalCompositeOperation = "source-over"
}

export default canvasPrep
