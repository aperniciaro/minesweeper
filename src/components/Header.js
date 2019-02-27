import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>MineLookerForer</h1>
        <section className="announcements">
          <h2>{this.props.announcement}</h2>
        </section>
      </header>
    )
  }
}
export default Header
