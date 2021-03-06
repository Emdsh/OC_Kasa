import PropTypes from 'prop-types'

function Rating(props) {
  const { rate } = props

  const rating = []
  for (let i = 1; i <= 5; i += 1) {
    rating.push(
      <span
        key={`star-${i}`}
        className={`star ${i <= rate ? 'full' : ''}`}
      ></span>
    )
  }

  return <div className="rating">{rating}</div>
}

Rating.propTypes = {
  rate: PropTypes.number
}

export default Rating
