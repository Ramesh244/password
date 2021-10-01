import './index.css'

const SavedPassword = props => {
  const {websiteDetails} = props
  const {id, websitename, username, password} = websiteDetails
  const initial = websitename ? websitename[0].toUpperCase() : ''

  const onDeleteWebsite = () => {
    const {deleteWebsite} = props
    deleteWebsite(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className="website-details">
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{websitename}</p>
          </div>
          <p className="password">{username}</p>
          <p className="password">{password}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button
          className="button"
          type="button"
          onClick={onDeleteWebsite}
          testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SavedPassword
