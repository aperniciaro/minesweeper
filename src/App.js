import React, { Component } from 'react'
import Cell from './components/Cell'
import axios from 'axios'

class App extends Component {
  state = {
    difficulty: 0,
    gameBoard: [],
    gameID: 0
  }

  componentDidMount() {
    axios.post('https://minesweeper-api.herokuapp.com/games').then(resp => {
      this.setState({
        gameBoard: resp.data.board,
        gameID: resp.data.id
      })
      console.log(this.state.gameBoard)
    })
  }

  check = event => {
    console.log('left click')
    console.log()
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/check`
      )
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board
        })
      })
    console.log(this.state.gameBoard)
  }

  flag = event => {
    console.log('right click')
    // event.preventDefault()
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/flag`
      )
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board
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
            {this.state.gameBoard.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((col, j) => {
                    return (
                      <Cell
                        key={j}
                        row={i}
                        col={j}
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
