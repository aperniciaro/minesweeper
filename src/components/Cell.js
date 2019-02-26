import React, { Component } from 'react'

class Cell extends Component {
  render() {
    return (
      <td
        className="cell"
        onClick={() => this.props.check(this.props.row, this.props.column)}
        onContextMenu={() => this.props.flag(this.props.row, this.props.column)}
      />
    )
  }
}

export default Cell
