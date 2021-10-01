import {Component} from 'react'

import {v4} from 'uuid'

import SavedPassword from '../SavedPassword'

import './index.css'

class AddPassword extends Component {
  state = {
    websitename: '',
    username: '',
    password: '',
    websiteList: [],
    searchInput: '',
  }

  onChangeWebsiteName = event => {
    this.setState({
      websitename: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  searchInputItem = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredWebsiteList = () => {
    const {searchInput, websiteList} = this.state

    const filteredWebsiteList = websiteList.filter(eachWebsite =>
      eachWebsite.websitename.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filteredWebsiteList
  }

  deleteWebsite = websiteId => {
    const {websiteList} = this.state
    this.setState({
      websiteList: websiteList.filter(
        websitename => websitename.id !== websiteId,
      ),
    })
  }

  onAddWebsite = event => {
    event.preventDefault()
    const {websitename, username, password} = this.state
    const newWebsite = {
      id: v4(),
      websitename,
      username,
      password,
      isChecked: false,
    }
    this.setState(prevState => ({
      websiteList: [...prevState.websiteList, newWebsite],
      websitename: '',
      username: '',
      password: '',
    }))
  }

  renderWebsiteList = () => {
    const {websiteList} = this.state
    return websiteList.map(eachWebsite => (
      <SavedPassword
        key={eachWebsite.id}
        websiteDetails={eachWebsite}
        toggleIsChecked={this.toggleIsChecked}
        deleteWebsite={this.deleteWebsite}
      />
    ))
  }

  render() {
    const {websitename, username, password, websiteList} = this.state
    return (
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-img"
        />
        <div className="input-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manger"
          />
          <div className="password-container">
            <h1 className="heading">Add New Password</h1>
            <form className="inputs form-control" onSubmit={this.onAddWebsite}>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter website"
                  value={websitename}
                  onChange={this.onChangeWebsiteName}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-img"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="website-img"
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="save-container">
            <p className="heading">
              your passwords
              <span className="comments-count">{websiteList.length}</span>
            </p>

            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
                onClick={this.getFilteredWebsiteList()}
              />
              <input
                onChange={this.searchInputItem}
                type="search"
                className="input"
                placeholder="Search"
              />
            </div>

            <form className="form-control check">
              <input
                onChange={this.chekedPassword}
                type="checkbox"
                className="inputs"
              />
              <labal className="para form-control">Show passwords</labal>
            </form>
          </div>
          <hr className="break" />
          <ul className="comments-list">{this.renderWebsiteList()}</ul>
        </div>
      </div>
    )
  }
}

export default AddPassword
