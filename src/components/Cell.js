import React, { Component } from 'react'

class Cell extends Component {
  render() {
    let picture = this.props.columnValue
    let cellType = 'cell'
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
      case '_':
        picture = ''
        cellType = 'revealed-cell'
        break
      case ' ':
        break
      default:
        cellType = 'revealed-cell'
    }
    if (this.props.columnValue !== 'F') {
      return (
        <td
          className={cellType}
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
          className={cellType}
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
