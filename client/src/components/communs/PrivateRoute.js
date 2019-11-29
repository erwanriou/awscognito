import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"

const handleRedirectUrl = url => {
  localStorage.setItem("lastRedirectUrl", url)
}

const PrivateRoute = ({ component: Component, auth, roles, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Fragment>
          {handleRedirectUrl(window.location.pathname)}
          <Redirect to="/login" />
        </Fragment>
      )
    }
  />
)

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
