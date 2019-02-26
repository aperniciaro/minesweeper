import React, { Component } from 'react'

class Cell extends Component {
  render() {
    console.log(this.props.i)
    return (
      <td
        className="cell"
        onClick={() => this.props.check(this.props.i, this.props.j)}
        onContextMenu={() => this.props.flag(this.props.i, this.props.j)}
      />
    )
  }
}

export default Cell
