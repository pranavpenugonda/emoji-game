// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainGame} = props
  const onClickPlayAgainBtn = () => {
    playAgainGame()
  }

  if (score === 12) {
    return (
      <div className="result-card">
        <div className="result-card-sub-container">
          <h1 className="won-txt">You Won</h1>
          <p className="best-score-txt">Best Score</p>
          <p className="score-txt">12/12</p>
          <button type="button" className="play-again-btn">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win"
          className="won-game-img"
        />
      </div>
    )
  }
  return (
    <div className="result-card">
      <div className="result-card-sub-container">
        <h1 className="won-txt">You Lose</h1>
        <p className="best-score-txt">Score</p>
        <p className="score-txt">{`${score}/12`}</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgainBtn}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="lose"
        className="won-game-img"
      />
    </div>
  )
}

export default WinOrLoseCard
