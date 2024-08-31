import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645183805/Notfound_2_lyiwc7.png"
      alt="not found"
      className="not-found-bg-image"
    />
    <h1 className="pageNotFound-heading">Page Not Found</h1>
    <p className="pageNotFound-description">
      we are sorry, the page you requested could not be found, Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="notfound-button">
        Go Back to Home
      </button>
    </Link>
  </div>
)

export default NotFound
