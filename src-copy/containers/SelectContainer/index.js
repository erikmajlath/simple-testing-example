import React from 'react'
import Select, { OPTIONS } from 'components/Select'

export default class SimpleSelect extends React.Component {
  state = {
    value: ['sf'],
  }

  onSelectChange = value => this.setState({ value })

  render() {
    return (
      <Select
        options={OPTIONS}
        value={this.state.value}
        onChange={this.onSelectChange}
      />
    )
  }
}
