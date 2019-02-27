import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>MineLookerForer</h1>
        <Dropdown resetGame={this.props.resetGame} />
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
