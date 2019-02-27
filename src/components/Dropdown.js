import React, { Component } from 'react'

class Dropdown extends Component {
  render() {
    return (
      <select
        className="difficulty-menu"
        defaultValue="easy"
        onChange={this.props.resetGame}
      >
        <option value="0" name="easy">
          Easy (8x8, 10 mines)
        </option>
        <option value="1" name="medium">
          Medium (16x16, 40 mines)
        </option>
        <option value="2" name="hard">
          Hard (24x24, 99 mines)
        </option>
      </select>
    )
  }
}
export default Dropdown
