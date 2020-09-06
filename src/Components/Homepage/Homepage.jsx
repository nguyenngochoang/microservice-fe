import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homepage.scss'
import { USER_PATH } from "constants.js"
import { setCurrentUser } from "actions/users"
class CHomepage extends Component {

  componentDidMount() {
    const user_token = localStorage.getItem("auth_token")

    if(user_token)
      this.getLoggedUserInfo(user_token)
  }

  getLoggedUserInfo(user_token) {
    window.userServiceAxios.get(USER_PATH, {params: {user_token: user_token}}).then(response => {
      this.props.setCurrentUser(response.data.user)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="homepage-container">
        <h1 className="text-center">Welcome to Shopping app</h1>
      </div>
    )
  }
}


const mapStoreToProps = store => ({

})

const mapDispatchToProps = {
  setCurrentUser
}

export const Homepage = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CHomepage)

// export default
export default Homepage