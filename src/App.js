import React, { Component } from 'react'
import Cell from './components/Cell'
import axios from 'axios'

class App extends Component {
  state = {
    gameDifficulty: 0,
    gameBoard: [],
    gameID: 0,
    gameState: '',
    numberOfMines: 0
  }

  componentDidMount() {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.gameDifficulty
      })
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board,
          gameID: resp.data.id
        })
      })
  }

  check = (x, y) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.gameID
        }/check`,
        { id: this.state.gameID, row: x, col: y }
      )
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board,
          gameState: resp.data.state,
          numberOfMines: resp.data.mines
        })
      })
    console.log(this.state.gameBoard)
  }

  flag = (x, y) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/flag`,
        { id: this.state.gameID, row: x, col: y }
      )
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board,
          gameState: resp.data.state,
          numberOfMines: resp.data.mines
        })
      })
    console.log(this.state.gameBoard)
  }

  render() {
    return (
      <>
        <h1>MineLookerForer</h1>
        <table>
          <tbody>
            {this.state.gameBoard.map((row, x) => {
              return (
                <tr key={x}>
                  {row.map((column, y) => {
                    return (
                      <Cell
                        key={y}
                        rowIndex={x}
                        row={row}
                        columnIndex={y}
                        column={column}
                        check={this.check}
                        flag={this.flag}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default App
