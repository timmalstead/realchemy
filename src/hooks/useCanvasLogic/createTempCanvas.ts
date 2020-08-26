const createCanvas = (
  root: HTMLElement,
  tempCanvas: HTMLCanvasElement,
  innerWidth: number,
  innerHeight: number
): HTMLCanvasElement => {
  if (root.children.length < 3) {
    tempCanvas = document.createElement("canvas")
    tempCanvas.width = innerWidth
    tempCanvas.height = innerHeight
    tempCanvas.style.display = "none"
    tempCanvas.id = "temp-canvas"
    root.appendChild(tempCanvas)
  } else tempCanvas = document.getElementById("temp-canvas")

  return tempCanvas
}

export default createCanvas
