function Dropdown(props) {
  const {title, content} = props
  
  return (
    <article className="drowpdown dropdown--large closed">
      <span>
        <h2 className="dropdown__title">{title}</h2>
      </span>
      <div className="dropdown__content">
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Dropdown