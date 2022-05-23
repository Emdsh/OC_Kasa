import { useState } from 'react'

import image from '../assets/images/temp/temp_1440w.jpg';
import image2 from '../assets/images/main_banner_1440w.jpg';
import image3 from '../assets/images/about_banner_1440w.jpg';

function Carousel() {
  const carousel = [{image}, {image2}, {image}, {image3}]
  const [imageIndex, navigationClick] = useState(0)

  return(
    <figure className='carousel'>
      <img src={carousel[imageIndex].image} alt='' className='carousel__image'/>
      <figcaption className='carousel__caption'>
        <p>{imageIndex + 1}/{carousel.length}</p>
      </figcaption>
      {carousel.length > 1 &&
        <div className='carousel__navigation'>
          <span className='carousel__navigation--backward' 
            onClick={() => navigationClick((imageIndex - 1) < 0 ? (carousel.length - 1) : (imageIndex - 1))}>
          </span>
          <span className='carousel__navigation--forward'
            onClick={() => navigationClick((imageIndex + 1) > (carousel.length - 1) ? 0 : (imageIndex + 1))}>
          </span>
        </div>
      }
    </figure>
  )
}

export default Carousel