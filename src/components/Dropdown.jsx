import { useState } from 'react'

function Dropdown(props) {
  const {type, title, content} = props
  const [isDropdownOpen, setDropdownState] = useState(false)

  return (
    <article className={`dropdown ${type === 'large' ? 'dropdown--large' : ''} ${isDropdownOpen ? '' : 'closed'}`}>
      <span onClick={() => setDropdownState(!isDropdownOpen)}>
        <h2 className="dropdown__title">{title}</h2>
      </span>
      <div className="dropdown__content">
        {Array.isArray(content) 
          ? <ul>{content.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul> 
          : <p>{content}</p>
        }
      </div>
    </article>
  )
}

export default Dropdown