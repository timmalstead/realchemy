const createCanvas = (
  root: HTMLElement,
  tempCanvas: HTMLCanvasElement
): HTMLCanvasElement => {
  if (root.children.length < 3) {
    tempCanvas = document.createElement("canvas")
    tempCanvas.style.display = "none"
    tempCanvas.id = "temp-canvas"
    root.appendChild(tempCanvas)
  } else {
    tempCanvas = document.getElementById("temp-canvas")
  }
  tempCanvas.width = innerWidth
  tempCanvas.height = innerHeight

  return tempCanvas
}

export default createCanvas
