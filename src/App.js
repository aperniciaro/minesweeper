import React, { Component } from 'react'
import Cell from './components/Cell'
import axios from 'axios'

class App extends Component {
  state = {
    difficulty: 0,
    gameBoard: []
  }

  componentDidMount() {
    axios.post('https://minesweeper-api.herokuapp.com/games').then(resp => {
      console.log(resp)
      this.setState({
        gameBoard: resp.data.board
      })
    })
  }

  check = event => {
    console.log('left click')
    axios
      .post('https://minesweeper-api.herokuapp.com/games/{id}/check')
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board
        })
      })
  }

  flag = event => {
    console.log('right click')
    axios
      .post('https://minesweeper-api.herokuapp.com/games/{id}/flag')
      .then(resp => {
        this.setState({
          gameBoard: resp.data.board
        })
      })
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
                    return (
                      <Cell onClick={this.check} onContextMenu={this.flag} />
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
