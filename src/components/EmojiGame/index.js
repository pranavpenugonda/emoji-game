/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    showWinOrLoseCard: false,
    scoresList: [],
  }

  playAgainGame = () => {
    const {scoresList, score} = this.state
    const topScore = Math.max(...scoresList, score)
    this.setState({showWinOrLoseCard: false, score: 0, topScore})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = clickedEmojisLength => {
    const {score, scoresList} = this.state
    const newScoresList = [...scoresList, score]
    const newTopScore = Math.max(...newScoresList)
    this.setState({
      score: clickedEmojisLength,
      scoresList: newScoresList,
      topScore: newTopScore,
    })
  }

  clickEmoji = id => {
    const newScore = 0
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.setState({
        showWinOrLoseCard: true,
        score: newScore,
        clickedEmojisList: [], // Reset the score to 0 when a loss occurs
      })
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.setState({showWinOrLoseCard: true})
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
        emojisList: this.shuffledEmojisList(),
        score: previousState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, showWinOrLoseCard} = this.state
    return (
      <div className="bg-container">
        {/* <NavBar score={score} topScore={topScore} />

        <ul className="ul-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              clickEmoji={this.clickEmoji}
              emojiDetails={eachEmoji}
            />
          ))}
        </ul> */}

        {/* {showWinOrLoseCard && <WinOrLoseCard score={score} />} */}
        {showWinOrLoseCard ? (
          <WinOrLoseCard score={score} playAgainGame={this.playAgainGame} />
        ) : (
          <div>
            <NavBar score={score} topScore={topScore} />

            <ul className="ul-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  clickEmoji={this.clickEmoji}
                  emojiDetails={eachEmoji}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
