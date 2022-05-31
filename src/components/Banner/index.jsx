import PropTypes from 'prop-types'

function Banner(props) {
  const { page, title } = props

  return (
    <div className={`banner ${page}`}>
      {title && <p className="banner__text">{title}</p>}
    </div>
  )
}

Banner.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string
}

export default Banner
