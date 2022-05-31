import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Thumb(props) {
  const { cover, title, id } = props

  return (
    <Link to={`/listing/${id}`}>
      <article className="thumb">
        <figure className="thumb__content">
          <img src={cover} alt="" className="thumb__image" />
          <figcaption className="thumb__caption">
            <h2 className="thumb__title">{title}</h2>
          </figcaption>
        </figure>
      </article>
    </Link>
  )
}

Thumb.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string
}

export default Thumb
