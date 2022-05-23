function Rating(props) {
  const {rate} = props

  const rating = []
  for (let i = 0; i < 5; i += 1) {
    rating.push(<span key={`star-${i+1}`} className={`star ${i+1 <= rate? 'full' : ''}`}></span>)
  }


  return (
    <div className="rating">
      {rating}
    </div>
  )
}

export default Rating