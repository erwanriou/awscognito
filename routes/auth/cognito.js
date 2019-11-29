const express = require("express")
const passport = require("passport")

const router = express.Router()

// @route  POST auth/cognito
// @desc   Login user with cognito Oauth
// @access Private

router.post(
  "auth/cognito",
  passport.authenticate("cognito", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
)

module.exports = router
