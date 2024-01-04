// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, selectSuggestion} = props
  const {id, suggestion} = suggestionDetails
  const onSelect = () => {
    selectSuggestion(id)
  }
  return (
    <li className="s-container">
      <p className="para"> {suggestion} </p>
      <button className="select-button" onClick={onSelect} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
