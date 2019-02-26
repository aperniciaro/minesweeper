import React, { Component } from 'react'

class Cell extends Component {
  render() {
    return (
      <td
        className="cell"
        onClick={() =>
          this.props.check(this.props.rowIndex, this.props.columnIndex)
        }
        onContextMenu={() =>
          this.props.flag(this.props.rowIndex, this.props.columnIndex)
        }
      >
        {this.props.column}
      </td>
    )
  }
}

export default Cell
