import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return this.props.children
  }

}

export default App
