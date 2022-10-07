// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feed-back-question-container">
        <h1 className="feed-back-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-button"
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackHappy = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="emoji-happy-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="emoji-name">
          we will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="feed-back-card-container">
          {isFeedbackSelected
            ? this.renderFeedbackHappy()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
