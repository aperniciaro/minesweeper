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
    })
  }

  check = event => {
    console.log('left click')
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
    event.preventDefault()
    console.log('right click')
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
            {this.state.gameBoard.map(row => {
              return (
                <tr>
                  {row.map(column => {
                    return <Cell check={this.check} flag={this.flag} />
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
