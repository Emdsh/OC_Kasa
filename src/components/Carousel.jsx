import image from '../assets/images/temp/temp_1440w.jpg'

function Carrousel() {
  return(
    <figure className='carousel'>
      <img src={image} alt='' className='carousel__image'/>
      <figcaption className='carousel__caption'>
        <p>1/1</p>
      </figcaption>
      <span className='carousel__navigation'></span>
    </figure>
  )
}

export default Carrousel