import React, { Component } from 'react'
import Cell from './components/Cell'

class App extends Component {
  state = {
    difficulty: 0
  }

  createBoard = () => {
    let board = []
    for (let i = 0; i < (this.state.difficulty + 1) * 8; i++) {
      let boardRow = []
      for (let j = 0; j < (this.state.difficulty + 1) * 8; j++) {
        boardRow.push(<Cell />)
      }
      board.push(<tr>{boardRow}</tr>)
    }
    return board
  }

  render() {
    return (
      <div>
        <h1>MineLookerForer</h1>
        <table>{this.createBoard()}</table>
      </div>
    )
  }
}

export default App
