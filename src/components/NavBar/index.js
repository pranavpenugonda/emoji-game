// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score} = props

  return (
    <div className="nav-bar">
      <div className="game-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      <div className="game-logo-container">
        <p className="score-heading">{`Score: ${score}`}</p>
        <p className="game-heading">{`Top Score: ${topScore}`}</p>
      </div>
    </div>
  )
}

export default NavBar
