// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectSuggestion = id => {
    const {suggestionsList} = this.props
    const filteredSuggestionData = suggestionsList.filter(
      each => each.id === id,
    )
    this.setState({
      searchInput: filteredSuggestionData[0].suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-img"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="input-box"
              placeholder="Search Google"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                selectSuggestion={this.selectSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
