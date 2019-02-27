import React, { Component } from 'react'

class Cell extends Component {
  render() {
    let picture = this.props.columnValue
    switch (picture) {
      case 'F':
        picture = '🚩'
        break
      case '*':
        picture = '💣'
        break
      case '@':
        picture = '👌'
        break
    }

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
          {picture}
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
          {picture}
        </td>
      )
    }
  }
}

export default Cell
