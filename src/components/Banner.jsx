function Banner(props) {
  return (
    //add extra className "main" or "about" to change background image
    // remove <p> if about page
    <div className={`banner ${props.page}`}>
      <p className="banner__text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner