// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickEmojiCard = () => {
    console.log(emojiName)
    clickEmoji(id)
  }

  return (
    <li className="emoji-list-card">
      <button
        type="button"
        className="list-item-btn"
        onClick={onClickEmojiCard}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
