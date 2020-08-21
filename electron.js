const { app, BrowserWindow } = require("electron")
const path = require("path")
const url = require("url")

// Keep a global reference of the window object
let mainWindow

// Keep a reference for dev mode
let dev = false

// Determine the mode (dev or production)
if (
  process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
)
  dev = true

// Fix for broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true")
  app.commandLine.appendSwitch("force-device-scale-factor", "1")
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  mainWindow.maximize()

  // Load the index.html of the app.
  let indexPath

  // Determine the correct index.html file
  if (dev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:3000",
      pathname: "index.html",
      slashes: true,
    })
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "build", "index.html"),
      slashes: true,
    })
  }

  // Load the index.html
  mainWindow.loadURL(indexPath)

  // Don't show the app window until it is ready and loaded
  mainWindow.once("ready-to-show", () => mainWindow.show())

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow)

// Quit when all windows are closed unless macOs
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

// Recreate on dock icon click if macOs
app.on("activate", () => {
  if (mainWindow === null) createWindow()
})
