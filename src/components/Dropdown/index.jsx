import { useState } from 'react'
import PropTypes from 'prop-types'

function Dropdown(props) {
  const { type, title, content } = props
  const [isDropdownOpen, setDropdownState] = useState(false)

  function manageKeyPress(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      setDropdownState(!isDropdownOpen)
    }
  }

  return (
    <article
      className={`dropdown ${type === 'large' ? 'dropdown--large' : ''} ${
        isDropdownOpen ? '' : 'closed'
      }`}
    >
      <span
        tabIndex="0"
        role="button"
        aria-pressed={isDropdownOpen}
        aria-expanded={isDropdownOpen}
        onClick={() => setDropdownState(!isDropdownOpen)}
        onKeyDown={manageKeyPress}
      >
        <h2 className="dropdown__title">{title}</h2>
      </span>
      <div className="dropdown__content">
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </article>
  )
}

Dropdown.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Dropdown
