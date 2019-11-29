const CognitoStrategy = require("passport-cognito")

// IMPORT CONFIGS
const keys = require("../config/keys").keys

module.exports = passport => {
  passport.use(
    new CognitoStrategy(
      {
        userPoolId: keys.cognito.userPoolId,
        clientId: keys.cognito.uclientIdserPoolId,
        region: keys.cognito.region
      },
      async (accessToken, idToken, refreshToken, user, cb) => {
        process.nextTick(function() {
          cb(null, user)
        })
      }
    )
  )
}
