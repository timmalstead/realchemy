import React, { StrictMode } from "react"
import GlobalStyle from "./globalStyle"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById("root")
)
