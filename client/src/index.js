import React from "react"
import ReactDOM from "react-dom"
import jwt_decode from "jwt-decode"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { BrowserRouter as Router } from "react-router-dom"

// COMPONENTS
import App from "./components/App"
import middleware from "./middlewares"
import reducer from "./reducers"

let store
// MANAGE COMPOSE WITH DEVTOOL FEATURE OUT OF PRODUCTION
switch (process.env.NODE_ENV) {
  case "production":
    store = createStore(reducer, middleware)
    break
  case "development":
    store = createStore(reducer, composeWithDevTools(middleware))
    break
  default:
    store = createStore(reducer, composeWithDevTools(middleware))
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("awscognito")
)
