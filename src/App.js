import React, { Component } from 'react'
import Header from './components/Header'
import Cell from './components/Cell'
import axios from 'axios'
// import Minefield from './images/Minefield.jpg'

class App extends Component {
  state = {
    gameDifficulty: 0,
    gameBoard: [],
    gameID: 0,
    gameState: '',
    numberOfMines: 0,
    announcement: ''
  }

  componentDidMount() {
    this.resetGame()
  }

  resetGame = event => {
    let _difficulty = this.state.gameDifficulty
    if (event && event.type === 'change') {
      _difficulty = event.target.value
    }

    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: _difficulty
      })
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board,
          gameID: resp.data.id,
          gameDifficulty: _difficulty,
          announcement: ''
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
        this.setState(
          {
            gameBoard: resp.data.board,
            gameState: resp.data.state,
            numberOfMines: resp.data.mines
          },
          () => {
            if (this.state.gameState === 'won') {
              this.setState({ announcement: 'You Won 😃' })
            } else if (this.state.gameState === 'lost') {
              this.setState({ announcement: 'You Lost 😔' })
            }
          }
        )
      })
  }

  flag = (event, x, y) => {
    event.preventDefault()
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
  }

  render() {
    return (
      <div className="game-area">
        <Header
          announcement={this.state.announcement}
          resetGame={this.resetGame}
        />
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
                        rowValue={row}
                        columnIndex={y}
                        columnValue={column}
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
      </div>
    )
  }
}

export default App
