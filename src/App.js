import React, { Component } from 'react'
import SelectContainer from 'containers/SelectContainer'
import Films from 'components/Films'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Select</h1>
        <SelectContainer />
        {/* <h1>Films</h1>
        <Films /> */}
      </div>
    )
  }
}

export default App
