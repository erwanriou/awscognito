const express = require("express")
const compression = require("compression")
const bodyParser = require("body-parser")
const http = require("http")
const path = require("path")

// Import security
const helmet = require("helmet")

// Initialize Express
const app = express()
const server = http.Server(app)

// Apply Middleware
app.use(helmet())
app.disable("x-powered-by")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())

// Server static assets
if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy")
  app.use(express.static("client/build", { maxAge: 3600000 }))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// Server Port
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server running on port ${port}`))
