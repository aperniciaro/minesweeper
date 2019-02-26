import React, { Component } from 'react'

class Cell extends Component {
  render() {
    if (this.props.columnValue !== 'F') {
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
          {this.props.columnValue}
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
          {this.props.columnValue}
        </td>
      )
    }
  }
}

export default Cell
