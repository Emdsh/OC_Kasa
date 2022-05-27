function Rating(props) {
  const { rate } = props

  const rating = []
  for (let i = 1; i < 6; i += 1) {
    rating.push(
      <span
        key={`star-${i}`}
        className={`star ${i <= rate ? 'full' : ''}`}
      ></span>
    )
  }

  return <div className="rating">{rating}</div>
}

export default Rating
