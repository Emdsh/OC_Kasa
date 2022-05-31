import { useEffect, useState, useContext } from 'react'
import { ListingsContext } from '../../API/Listings'

function Carousel(props) {
  const { id } = props
  const { listingData: listings, isDataLoading: loader } =
    useContext(ListingsContext)

  let carousel = []
  if (listings.length >= 1) {
    listings.forEach((listing) => {
      if (listing.id === id.id) {
        carousel = listing.pictures
      }
    })
  }

  const [imageIndex, navigationClick] = useState(0)

  function navigateBackward() {
    navigationClick(imageIndex - 1 < 0 ? carousel.length - 1 : imageIndex - 1)
  }

  function navigateForward() {
    navigationClick(imageIndex + 1 > carousel.length - 1 ? 0 : imageIndex + 1)
  }

  function manageKeyPress(event) {
    if (event.key === 'ArrowLeft') {
      navigateBackward()
    }
    if (event.key === 'ArrowRight') {
      navigateForward()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', manageKeyPress)
  })

  return (
    <>
      {loader ? (
        <div>Loading</div>
      ) : (
        <figure className="carousel">
          <img src={carousel[imageIndex]} alt="" className="carousel__image" />
          <figcaption className="carousel__caption">
            <p>
              {carousel.length > 0 ? imageIndex + 1 : 0}/{carousel.length}
            </p>
          </figcaption>
          {carousel.length > 1 && (
            <div className="carousel__navigation">
              <span
                className="carousel__navigation--backward"
                onClick={navigateBackward}
              ></span>
              <span
                className="carousel__navigation--forward"
                onClick={navigateForward}
              ></span>
            </div>
          )}
        </figure>
      )}
    </>
  )
}

export default Carousel
