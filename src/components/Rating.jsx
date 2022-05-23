function Rating(props) {
  const {rate} = props

  const rating = []
  for (let i = 0; i < 5; i += 1) {
    rating.push(<span className={`star ${i+1 <= rate? 'full' : ''}`}></span>)
  }


  return (
    <div className="rating">
      {rating}
      {/* <span className="star full"></span>
      <span className="star full"></span>
      <span className="star full"></span>
      <span className="star"></span>
      <span className="star"></span> */}
    </div>
  )
}

export default Rating