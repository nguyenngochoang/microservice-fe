import React, { Component } from 'react';
import { connect } from 'react-redux';

class CUsersIndex extends Component {

  render() {
    return (
      <h1>This is user index page</h1>
    )
  }
}

const mapStoreToProps = store => ({
})

const mapDispatchToProps = {
}

const UsersIndex = connect(
  mapStoreToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(CUsersIndex)

// export default
export default UsersIndex