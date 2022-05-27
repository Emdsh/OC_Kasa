import { useEffect, useState } from 'react'

import image from '../../assets/images/temp/temp_1440w.jpg'
import image2 from '../../assets/images/home/home_banner_1440w.jpg'
import image3 from '../../assets/images/about/about_banner_1440w.jpg'

function Carousel() {
  const carousel = [{ image }, { image2 }, { image }, { image3 }]
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
    <figure className="carousel">
      <img
        src={carousel[imageIndex].image}
        alt=""
        className="carousel__image"
      />
      <figcaption className="carousel__caption">
        <p>
          {imageIndex + 1}/{carousel.length}
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
  )
}

export default Carousel
