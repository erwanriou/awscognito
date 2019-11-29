const keys = {
  cognito: {
    userPoolId: process.env.COGNITO_POOL_ID,
    clientId: process.env.COGNITO_CLIENT_ID,
    region: process.env.COGNITO_REGION
  }
}

exports.keys = keys
