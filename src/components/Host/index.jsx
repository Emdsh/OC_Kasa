import PropTypes from 'prop-types'

function Host(props) {
  const { name, picture } = props

  return (
    <figure className="host">
      <img src={picture} alt="" className="host__profile-picture" />
      <figcaption className="host__name">
        <p>{name}</p>
      </figcaption>
    </figure>
  )
}

Host.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string
}

export default Host
