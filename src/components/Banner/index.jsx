function Banner(props) {
  const { page, title } = props

  return (
    <div className={`banner ${page}`}>
      {title && <p className="banner__text">{title}</p>}
    </div>
  )
}

export default Banner
