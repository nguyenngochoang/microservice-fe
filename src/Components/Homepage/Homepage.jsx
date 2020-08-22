import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Homepage.scss'
class CHomepage extends Component {

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
}

export const Homepage = connect(
  mapStoreToProps,
  mapDispatchToProps
)(CHomepage)

// export default
export default Homepage