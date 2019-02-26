import React, { Component } from 'react'

class Cell extends Component {
  render() {
    if (this.props.column != 'F') {
      return (
        <td
          className="cell"
          onClick={() =>
            this.props.check(this.props.rowIndex, this.props.columnIndex)
          }
          onContextMenu={event =>
            this.props.flag(event, this.props.rowIndex, this.props.columnIndex)
          }
        >
          {this.props.column}
        </td>
      )
    } else {
      return (
        <td
          className="cell"
          onContextMenu={event =>
            this.props.flag(event, this.props.rowIndex, this.props.columnIndex)
          }
        >
          {this.props.column}
        </td>
      )
    }
  }
}

export default Cell
