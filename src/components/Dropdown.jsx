import { useState } from 'react'

function Dropdown(props) {
  const {title, content} = props
  const [isDropdownOpen, setDropdownState] = useState(false)

  return (
    <article className={`drowpdown dropdown--large ${isDropdownOpen ? "" : "closed"}`}>
      <span onClick={() => setDropdownState(!isDropdownOpen)}>
        <h2 className="dropdown__title">{title}</h2>
      </span>
      <div className="dropdown__content">
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Dropdown