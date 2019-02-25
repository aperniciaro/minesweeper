import React, { Component } from 'react'

class Cell extends Component {
  render() {
    return (
      <td
        className="cell"
        onClick={this.props.check}
        onContextMenu={this.props.flag}
      />
    )
  }
}

export default Cell
