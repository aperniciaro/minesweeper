import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>MineLookerForer</h1>
        <select className="difficulty-menu" defaultValue="easy">
          <option
            value="Easy"
            onChange={() => this.props.resetGame(0)}
            name="easy"
          >
            Easy (8x8, 10 mines)
          </option>
          <option
            value="Medium"
            onChange={() => this.props.resetGame(1)}
            name="medium"
          >
            Medium (16x16, 40 mines)
          </option>
          <option
            value="Hard"
            onChange={() => this.props.resetGame(2)}
            name="hard"
          >
            Hard (24x24, 99 mines)
          </option>
        </select>
        <button
          className="reset-button"
          onClick={() => this.props.resetGame(this.props.level)}
        >
          Reset
        </button>
        <section className="announcements">
          <h2>{this.props.announcement}</h2>
        </section>
      </header>
    )
  }
}
export default Header
